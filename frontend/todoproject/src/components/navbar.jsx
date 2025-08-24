import React, { useEffect, useState } from 'react'
import Home from './home'
import AboutUs from './aboutUs'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Logout from './logout'
// import 'tailwindcss/tailwind.css'

const Navbar = () => {



  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="bg-white rounded-full p-2 shadow-md">
            <svg className="h-7 w-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="text-white text-2xl font-extrabold tracking-wider drop-shadow-lg">
            Todo List
          </span>
        </div>
        <div className="space-x-2 md:space-x-6 flex items-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white hover:text-purple-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white hover:text-purple-600"
              }`
            }
          >
            About us
          </NavLink>



          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white hover:text-purple-600"
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/Register"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white hover:text-purple-600"
              }`
            }
          >
            Register
          </NavLink>
               <NavLink
            to="/logout"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white hover:text-purple-600"
              }`
            }
          >
            Logout
          </NavLink>
        {/* <NavLink
        to="/logout"
        className={({isActive})=>{
          `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${isActive? "bg-white text-purple-600 shadow-md"
          : "text-white hover:bg-white hover:text-purple-600"}`
        }}
        >Logout
        </NavLink> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar
// agar login true hai to register and login ki jagah logout aaye