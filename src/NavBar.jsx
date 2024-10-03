import React from 'react'
import {Link} from "react-router-dom"
export default function NavBar({userAuth}) {
  return (
    <div className="topnav">
   {userAuth && <Link className="active" to="/">Home</Link>}
  {!userAuth &&  <Link to="/signin">sign in</Link>}
 {!userAuth &&  <Link to="/signup">sign up</Link>}
    {/* <a href="#about">About</a> */}
  </div>
  
  )
}
