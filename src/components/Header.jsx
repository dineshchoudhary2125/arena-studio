import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='h-20 bg-black w-screen flex items-center justify-between'>
      <div className='h-fit w-fit ml-14'>
        <Link to="/" className="flex items-center">
          <h1 className='text-white text-2xl'>Arena Studio</h1>
        </Link>
      </div>
      <nav className='h-fit w-fit mr-14 '>
        <ul className='flex gap-4'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }              
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visualization"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400` 
              }
            >
              Visualization
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header