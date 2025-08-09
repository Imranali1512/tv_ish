// src/pages/navbar_page.jsx

import React, { useEffect, useState } from "react";
import { FaSearch, FaBell, FaUser, FaShieldAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const NavbarPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV shows", path: "/tvshows" },
    { name: "Podcast", path: "/podcast" },
    { name: "Snips", path: "/snips" },
    { name: "Music", path: "/music" },
    { name: "Education", path: "/education" },
    { name: "Sports", path: "/sports" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm px-4 sm:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="relative"
          style={{
            width: isMobile ? "110px" : "140px",
            height: isMobile ? "50px" : "60px",
            filter: `
              drop-shadow(0 0 10px rgba(200, 200, 200, 0.8)) 
              drop-shadow(0 0 20px rgba(180, 180, 180, 0.5))
            `,
          }}
        >
          <img
            src="/logo/tv-ish.png"
            alt="TV-ish Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Center Menu */}
        <div className="bg-zinc-900/90 rounded-xl px-6 py-2 flex flex-wrap justify-center gap-2 sm:gap-3 shadow-lg">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 px-4 py-2 text-sm sm:text-base rounded-lg font-medium 
                ${
                  isActive
                    ? "bg-zinc-800 text-white text-lg font-semibold shadow-inner after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[3px] after:bg-red-500 after:rounded-full"
                    : "text-zinc-400 hover:text-white hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-2/3 hover:after:h-[2px] hover:after:bg-red-500 hover:after:rounded-full"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-lg text-white">
          <FaSearch className="cursor-pointer hover:text-blue-400 transition duration-200" />
          <FaBell className="cursor-pointer hover:text-red-400 transition duration-200" />
          {/* Correct Link to /login */}
          <Link to="/login">
            <FaUser className="cursor-pointer hover:text-green-400 transition duration-200" />
          </Link>
          <FaShieldAlt className="cursor-pointer hover:text-purple-400 transition duration-200" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
