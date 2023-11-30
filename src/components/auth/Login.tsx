import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import "./login.css";


export default function Login() {
  console.log("login page");

  const ipAddr = window.location.hostname;
  const port = window.location.port;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [login, password]);

  function clearUserData() {
    localStorage.setItem("login", "");
    localStorage.setItem("roles", JSON.stringify("[]"));
    localStorage.setItem("token", "");
  }

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://" + ipAddr + ":" + port + "/srvlt/sortplan/login",
        JSON.stringify({
          authData: {
            login: login,
            password: password,
          },
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.data.success === true &&
        response.data.returnedValue.authData !== null
      ) {
        const userLogin = response.data.returnedValue.authData.login;
        const roles = response.data.returnedValue.authData.roles;
        const token = response.data.returnedValue.authData.accessToken;
        localStorage.setItem("login", userLogin);
        localStorage.setItem("roles", JSON.stringify(roles));
        localStorage.setItem("token", token);

        setLogin("");
        setPassword("");
        navigate("/");
      } else if (
        response.data.success === false &&
        response.data.errorMessage !== null
      ) {
        setErrMsg(response.data.errorMessage);
        clearUserData();
      } else {
        setErrMsg("Niepoprawne dane logowania");
        clearUserData();
      }
    } catch (error) {
      setErrMsg("Nieprawidłowy login lub hasło");
      clearUserData();
    }
  };

  return (
    <div className="d-flex flex-column" style={{ backgroundColor: "#1D2125" }}>
      <Container
        fluid
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="d-flex">
          <Col lg={6} md={12} >
            <form
              onSubmit={handleSumbit}
              className="d-flex flex-column justify-content-center"
            >
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control login-form"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  placeholder="username"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control login-form"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit" name="Zaloguj" />
            </form>
          </Col>
          <Col lg={6} className="d-none d-lg-flex" style={{ color: "white" }}>
            Jakiś obrazek
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center">
        <span className="form-error-msg">{errMsg}</span>
      </Container>
    </div>
  );
}
