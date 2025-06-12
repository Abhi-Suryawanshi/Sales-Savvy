import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/welcome.css' // Don't forget to import the CSS

export default function Welcome() {
  return (
    <div className="welcome-container">
      <h4>Welcome to Sales Savvy</h4>
      <div className="welcome-links">
        <NavLink className="welcome-link" to={'/sign_up'}>Sign Up</NavLink>
        <NavLink className="welcome-link" to={'/sign_in'}>Sign In</NavLink>
      </div>
    </div>
  )
}