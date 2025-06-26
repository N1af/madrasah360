// src/components/Auth/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup info:", formData);
    // TODO: connect to backend
  };

  return (
    <div className="auth-container">
      <h2>Staff/Admin Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Full Name</label>
        <input name="fullName" onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Signup</button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
