// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login info:", formData);
    // TODO: connect to backend
  };

  return (
    <div className="auth-container">
      <h2>Staff/Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
