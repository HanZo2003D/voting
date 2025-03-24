import React from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign Up</button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
