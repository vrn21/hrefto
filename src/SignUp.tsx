import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '', // Added username
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission, validation logic can be added here
    console.log(formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-text">
        <h1>Join us today and start creating smart, shareable links in seconds!</h1>
      </div>
      <div className="signup-container">
        <form className="signup-box" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button className="signup-button" type="submit">Sign Up</button>
          <div className="signup-footer">
            <span>Already have an account? <a href="/login">Sign In</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
