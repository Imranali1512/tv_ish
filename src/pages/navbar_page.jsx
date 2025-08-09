import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaShieldAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const NavbarPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close menu if resized to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/home_page" },
    { name: "Movies", path: "/movies" },
    { name: "TV shows", path: "/tvshows" },
    { name: "Podcast", path: "/podcast" },
    { name: "Snips", path: "/snips" },
    { name: "Music", path: "/music" },
    { name: "Education", path: "/education" },
    { name: "Sports", path: "/sports" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm px-4 py-3 sm:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="relative z-50"
          style={{
            width: isMobile ? "110px" : "140px",
            height: isMobile ? "50px" : "60px",
            filter: `
              drop-shadow(0 0 10px rgba(200, 200, 200, 0.8)) 
              drop-shadow(0 0 20px rgba(180, 180, 180, 0.5)) 
              drop-shadow(0 0 30px rgba(150, 150, 150, 0.3))
            `,
          }}
        >
          <img
            src="/logo/tv-ish.png"
            alt="TV-ish Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="bg-zinc-900 rounded-xl px-6 py-2 flex flex-wrap justify-center gap-3 shadow-lg">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-zinc-800 text-lg font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[2px] after:bg-red-500 after:rounded-full"
                      : "text-zinc-400 hover:text-white hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-2/3 hover:after:h-[2px] hover:after:bg-red-500 hover:after:rounded-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}

        {/* Right Icons / Hamburger */}
        <div className="flex items-center space-x-4 text-lg text-white">
          {!isMobile ? (
            <>
              <FaSearch className="cursor-pointer hover:text-blue-400 transition duration-200" />
              <FaBell className="cursor-pointer hover:text-red-400 transition duration-200" />

              {/* User icon wrapped in Link */}
              <Link to="/login">
                <FaUser className="cursor-pointer hover:text-green-400 transition duration-200" />
              </Link>

              <FaShieldAlt className="cursor-pointer hover:text-purple-400 transition duration-200" />
            </>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-zinc-800 rounded-md text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div className="bg-zinc-900 mt-3 p-4 rounded-lg shadow-lg space-y-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)} // Close menu after click
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? "bg-red-500 text-white" : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarPage;
