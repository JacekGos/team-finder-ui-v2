import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function Login() {
  // const { userData, setUserData } = useContext(AuthContext);

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

    // setUserData({ login: '', roles: [], token: '' });
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

        // setUserData({ login, roles, token });

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
    <Container className="d-flex flex-column">
      <Container
        fluid
        className="login-page d-flex flex-column justify-content-end mb-1"
        style={{ minHeight: "50vh" }}
      >
        <p
          className="brand-title mb-5"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <img src={logo} alt="Logo" width={450} /> */}
        </p>
        <form
          onSubmit={handleSumbit}
          className="d-flex flex-column justify-content-center"
        >
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
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
              className="form-control"
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
      </Container>
      <Container className="d-flex justify-content-center">
        <span className="form-error-msg">{errMsg}</span>
      </Container>
    </Container>
  );
}
