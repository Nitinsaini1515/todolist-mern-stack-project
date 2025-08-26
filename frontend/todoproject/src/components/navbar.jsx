import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-3 md:mb-0">
          <span className="bg-white rounded-full p-2 shadow-md">
            <svg
              className="h-7 w-7 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-3-3v6m9 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="text-white text-2xl font-extrabold tracking-wider drop-shadow-lg">
            Todo List
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center">
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
            About Us
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
            to="/register"
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
