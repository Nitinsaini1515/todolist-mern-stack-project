import React from 'react'
import Home from './home'
import AboutUs from './aboutUs'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
 <>
 <div>
  Todo list
 </div>
 <div>
<NavLink to="/home">Home</NavLink>
 <NavLink to="/aboutus">About us</NavLink>
 <NavLink to="/login">Login</NavLink>
 <NavLink to="/Register">Register</NavLink>
 </div>
 </>
  )
}

export default Navbar
