import React, { useState, useEffect } from "react";
import loginService from "../../services/loginService";
import { useAppContext } from "../../context/useAppContext";
import { useNavigate } from "react-router-dom";
import AuthTokenManager from "../../helpers/AuthTokenManager";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const { setUser, setLoginStatus } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();

      let res = await loginService(trimmedUsername, trimmedPassword);

      if (res.data && res.data.token !== undefined) {
        AuthTokenManager.set(res.data.token);
        console.log(res.data);
        setLoginStatus(true);
      }

      if (res.status === 404) {
        setErrorUsername(true);
      }

      if (res.status === 401) {
        setErrorPassword(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let auth = AuthTokenManager.get();
      if (auth) {
        navigate("/home");
      }
    }, 200);
  });

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="input-group-login">
            {errorUsername && (
              <label htmlFor="username">Usuario incorrecto</label>
            )}
            <input
              type="text"
              id="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group-login">
            {errorPassword && (
              <label htmlFor="password">Contraseña incorrecta</label>
            )}
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={() => {
              setErrorPassword(false);
              setErrorUsername(false);
            }}
          >
            Login
          </button>
          <div className="sign-up-container">
            <a href="" onClick={() => navigate("/register")}>
              Registrarse
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
