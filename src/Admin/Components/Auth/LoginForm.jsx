import React, { useState, useContext } from "react";
import { AdminContext } from "../../Context/AdminContext/AdminState";
import "./LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  const { AdminLogin } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AdminLogin(formData);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Enter your email"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="Password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="Password"
          name="Password"
          placeholder="Enter your password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="/" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
