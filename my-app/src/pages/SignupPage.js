// SignupPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import your CSS file

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSignup = () => {
    // Check if any of the fields are empty
    if (name.trim() === '' || username.trim() === '' || password.trim() === '') {
      // Show modal with an error message
      setShowModal(true);
      return;
    }

    // Perform signup logic here (e.g., send a signup request to the server)
    // For simplicity, let's assume a successful signup for any input

    // Redirect to the login page after signup
    navigate('/');
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Signup Page</h1>

      <div className="signup-box">
        <form className="signup-form">
          <label className="input-label">
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup-input"
              required
            />
          </label>
          <label className="input-label">
            Username:
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
              required
            />
          </label>
          <label className="input-label">
            Password:
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
              required
            />
          </label>
          <button type="button" onClick={handleSignup} className="signup-button">
            Sign up
          </button>
        </form>
      </div>

      <p className="login-link">
        Already have an account? <Link to="/" className="login-link-text">Log in</Link>
      </p>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}></span>
            <p>All fields must be filled out!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
