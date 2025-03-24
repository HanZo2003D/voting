import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);

    if (username === "admin" && password === "admin123") {
      navigate("/admin"); // ✅ Redirect admin to the admin panel
    } else {
      navigate("/"); // ✅ Redirect normal users to home
    }

    setUsername("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={
          handleSubmit // Simulates successful login
        }
      >
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
