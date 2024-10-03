import React from 'react'
import {Link} from "react-router-dom"
export default function NavBar() {
  return (
    <div className="topnav">
    <Link className="active" to="/">Home</Link>
    <Link to="/signin">sign in</Link>
    <Link to="/signup">sign up</Link>
    {/* <a href="#about">About</a> */}
  </div>
  
  )
}
