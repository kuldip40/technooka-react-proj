import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <form className="form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
