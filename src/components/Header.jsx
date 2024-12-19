import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "VISUALIZATION", path: "/visualization" },
    { name: "CLIENTS", path: "/clients" },
    { name: "CAREER", path: "/career" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <header className="h-[12vh] bg-black w-full fixed top-0 left-0 flex items-center justify-between px-6 md:px-7 z-50 shadow-2xl">
      <div className="h-fit w-fit">
        <Link to="/" className="flex items-center">
          <h1 className="text-white text-xl font-bold whitespace-nowrap font-kanit">ARENA STUDIO</h1>
        </Link>
      </div>

      <div
        className="md:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`w-6 h-1 bg-white transition-transform duration-500 ${menuOpen ? "rotate-45 absolute" : ""}`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-opacity duration-500 ${menuOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-transform duration-500 ${menuOpen ? "-rotate-45 absolute" : ""}`}
        ></div>
      </div>

      <nav
        className={`absolute md:static top-20 left-0 w-full md:w-fit bg-black md:bg-transparent md:flex md:items-center md:justify-end z-50 transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-6 p-6 md:p-0">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-xs md:text-sm lg:text-md ${
                    isActive ? 'text-yellow-400' : 'text-white'
                  } hover:text-yellow-400`
                }
                onClick={() => setMenuOpen(false)} 
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;