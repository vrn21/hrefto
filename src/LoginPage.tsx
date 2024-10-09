import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>(''); // Changed email to username
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Username:", username, "Password:", password); // Updated to log username
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>
          Unlock Your Links with<br />
          <span className="hrefto-text">hrefto/</span>
        </h1>
      </div>
      <div className="login-right">
        <h2></h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username:</label> {/* Updated label from Email to Username */}
          <input
            type="text" // Changed type to text for username
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="new-user">
          <p>New user? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
