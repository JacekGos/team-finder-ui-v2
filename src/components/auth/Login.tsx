import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Pictures from "./Pictures";

export default function Login() {
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
    <div
      className="d-flex flex-column p-0"
      style={{ backgroundColor: "#1D2125" }}
    >
      <Container
        fluid
        className="d-flex flex-column justify-content-center p-0"
      >
        <Row style={{width: '100vw'}}>
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center"
            style={{ height: "80vh" }}
          >
            <div
              className="d-flex flex-column justify-content-center"
              style={{ minWidth: 370 }}
            >
              <div className="d-flex justify-content-center align-items-center mb-4">
                <span
                  style={{
                    color: "#b2b2b8",
                    textAlign: "center",
                    fontSize: 27,
                    fontWeight: 400,
                  }}
                >
                  Zaloguj się lub utwórz konto
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
                  <button
                    type="submit"
                    className="btn-base btn-filled"
                    style={{ width: 150 }}
                    name="Zaloguj"
                  >
                    Zaloguj
                  </button>
                </form>
                <div className="d-flex justify-content-center align-items-center">
                  <Nav.Link as={NavLink} to={"/register"} eventKey={1}>
                    <button
                      type="submit"
                      className="btn-not-filled mt-3"
                      style={{ width: 300, height: 50 }}
                      name="Zaloguj"
                    >
                      Nie masz konta? Zarejestruj się
                    </button>
                  </Nav.Link>
                </div>
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
      </Container>
      <Container className="d-flex justify-content-center">
        <span className="form-error-msg">{errMsg}</span>
      </Container>
    </div>
  );
}
