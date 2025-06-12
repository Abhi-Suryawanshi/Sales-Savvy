import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sign_up.css'; // Don't forget to import the CSS

export default function Sign_up() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      gender,
      dob,
      role
    };

    try {
      const resp = await fetch('http://localhost:8080/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const msg = await resp.text();
      alert(msg);
      
      if (msg === "User created successfully!") {
        navigate('/sign_in'); 
      }
    } 
    catch (error) {
      console.error("Error:", error);
      alert("Failed to submit data");
    }
  }

  return (
    <div className="signup-container">
      <h4>Create Your Account</h4>
      <form className="signup-form" onSubmit={handleSubmit}>
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
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label className="radio-option">
              Male
              <input
                type="radio"
                name="gender"
                value="M"
                checked={gender === "M"}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="radio-option">
              Female
              <input
                type="radio"
                name="gender"
                value="F"
                checked={gender === "F"}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="radio-option">
              Other
              <input
                type="radio"
                name="gender"
                value="O"
                checked={gender === "O"}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <div className="radio-group">
            <label className="radio-option">
              ADMIN
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <label className="radio-option">
              CUSTOMER
              <input
                type="radio"
                name="role"
                value="customer"
                checked={role === "customer"}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">SIGN UP</button>
      </form>
    </div>
  );
}