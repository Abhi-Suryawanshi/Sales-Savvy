import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/welcome.css' // Don't forget to import the CSS

export default function Welcome() {
  return (
    <>
        <h4>Welcome page</h4>
        <NavLink to={'/sign_in'}>Sign In</NavLink>
        <br></br>
        <NavLink to={'/sign_up'}>Sign Up</NavLink>
    </>
  )
}