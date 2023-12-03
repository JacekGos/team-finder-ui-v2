import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import "./login.css";
import Pictures from "./Pictures";

export default function Register() {
  const ipAddr = window.location.hostname;
  const port = window.location.port;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

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
    <div
      className="d-flex flex-column p-0"
      style={{ backgroundColor: "#1D2125" }}
    >
      <div>
        <Row style={{ width: "100vw", paddingLeft: 25 }}>
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center"
            style={{ height: "80vh" }}
          >
            <div
              className="d-flex flex-column justify-content-center"
              style={{ minWidth: 300 }}
            >
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Nav.Link as={NavLink} to={"/signin"} eventKey={1}>
                  <button className="btn-base rounded-circle d-flex align-items-center p-2 me-2">
                    <IoMdArrowBack size={18} style={{ color: "white" }} />
                  </button>
                </Nav.Link>
                <span
                className="auth-form-title"
                >
                  Utwórz konto
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "#333C43",
                  borderRadius: 5,
                  padding: "40px 15px 15px 15px",
                }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <form
                  onSubmit={handleSumbit}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control login-form"
                      style={{ color: "white" }}
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      placeholder="username"
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                      required
                    />
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control login-form"
                      style={{ color: "white" }}
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Hasło</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control login-form"
                      style={{ color: "white" }}
                      id="password"
                      placeholder="repeat-password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Powtórz hasło</label>
                  </div>
                  <button
                    type="submit"
                    className="btn-base btn-filled"
                    style={{ width: 150 }}
                    name="Zaloguj"
                  >
                    Załóż konto
                  </button>
                </form>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-none d-lg-flex align-items-center p-5"
            style={{ color: "white" }}
          >
            <Pictures />
          </Col>
        </Row>
      </div>
      <Container className="d-flex justify-content-center">
        <span className="form-error-msg">{errMsg}</span>
      </Container>
    </div>
  );
}
