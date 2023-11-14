// LoginPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    // Check if both username and password are non-empty
    if (username.trim() === '' || password.trim() === '') {
      // Show modal with an error message
      setShowModal(true);
      return;
    }

    // Perform login logic here (e.g., validate credentials)
    // For simplicity, let's assume a successful login for any input

    // Redirect to /app
    navigate('/app');
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login Page</h1>

      <div className="login-box">
        <form className="login-form">
          <label className="input-label">
            Username:
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
            />
          </label>
          <label className="input-label">
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </label>
          <button type="button" onClick={handleLogin} className="login-button">
            Log in
          </button>
        </form>
      </div>

      <p className="signup-link">
        Don't have an account? <Link to="/signup" className="signup-link-text">Sign up</Link>
      </p>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}></span>
            <p>Username and password cannot be empty!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
