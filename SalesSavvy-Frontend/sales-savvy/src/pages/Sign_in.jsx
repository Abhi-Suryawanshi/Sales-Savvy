import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sign_in.css';

export default function Sign_in() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      password
    };

    try {
      const resp = await fetch('http://localhost:8080/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const msg = await resp.text();
      
      if (msg === "admin") {
        navigate('/admin_home');
      } else if (msg === "customer") {
        navigate('/customer_home');
      } else {
        alert(msg);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit data");
    }
  }

  return (
    <div className="signin-container">
      <h4>Sign In</h4>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="forgot-link">
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}