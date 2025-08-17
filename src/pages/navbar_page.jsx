import React, { useEffect, useRef, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaHome,
  FaVideo,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import ParentsControl from "../components/ParentsControl";

const NavbarPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false); // NEW
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showParentalControl, setShowParentalControl] = useState(false);

  const shieldRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const updatedSearches = [
      searchQuery,
      ...recentSearches.filter((item) => item !== searchQuery),
    ].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    setSearchQuery("");
    setShowSearch(false);
  };

  useEffect(() => {
    if (showParentalControl && shieldRef.current) {
      const rect = shieldRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollLeft = window.scrollX || window.pageXOffset;
      const viewportWidth = window.innerWidth;
      const dropdownWidth = 600;

      let leftPosition = rect.left + scrollLeft;
      const maxLeft = scrollLeft + viewportWidth - dropdownWidth - 8;
      if (leftPosition > maxLeft) {
        leftPosition = maxLeft;
      }

      setDropdownStyles({
        position: "absolute",
        top: rect.bottom + scrollTop + 8,
        left: leftPosition,
        width: dropdownWidth,
        zIndex: 999,
        backgroundColor: "#18181b",
        borderRadius: "0.5rem",
        boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
        padding: "1rem",
        boxSizing: "border-box",
        overflow: "visible",
      });
    }
  }, [showParentalControl]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showParentalControl &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        shieldRef.current &&
        !shieldRef.current.contains(event.target)
      ) {
        setShowParentalControl(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showParentalControl]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/tvshows" },
    { name: "Podcast", path: "/podcast" },
    { name: "Snips", path: "/snips" },
    { name: "Music", path: "/music" },
    { name: "Education", path: "/education" },
    { name: "Sports", path: "/sports" },
  ];

  const bottomNavItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Search", icon: <FaSearch />, path: "/search" },
    { name: "Snips", icon: <FaVideo />, path: "/snips" },
    { name: "Notifications", icon: <FaBell />, path: "/notification" },
    { name: "Account", icon: <FaUser />, path: "/account" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm px-4 py-3 sm:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
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
          <div className="flex items-center space-x-4 text-lg text-white relative">
            {!isMobile ? (
              <>
                {/* Search Icon */}
                <div
                  className={`relative cursor-pointer transition duration-200 p-1 rounded-md ${
                    showSearch
                      ? "text-blue-400 bg-zinc-800 shadow-lg"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() => setShowSearch(!showSearch)}
                  aria-label="Toggle search input"
                >
                  <FaSearch size={22} />
                </div>

                {/* Bell Icon */}
                <div
                  className={`relative cursor-pointer transition duration-200 p-1 rounded-md ${
                    showNotifications
                      ? "text-red-400 bg-zinc-800 shadow-lg"
                      : "hover:text-red-400"
                  }`}
                  onClick={() => setShowNotifications((prev) => !prev)}
                  aria-label="Notifications"
                >
                  <FaBell size={22} />
                </div>

                {/* User Icon */}
                <Link to="/login">
                  <FaUser className="cursor-pointer hover:text-green-400 transition duration-200" />
                </Link>

                {/* Shield Icon */}
                <div
                  ref={shieldRef}
                  className={`relative cursor-pointer transition duration-200 p-1 rounded-md ${
                    showParentalControl
                      ? "text-purple-400 bg-zinc-800 shadow-lg"
                      : "hover:text-purple-400"
                  }`}
                  onClick={() => setShowParentalControl((prev) => !prev)}
                  aria-label="Toggle parental control dropdown"
                >
                  <FaShieldAlt size={22} />
                </div>
              </>
            ) : (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Desktop Search Bar */}
        {showSearch && !isMobile && (
          <div className="absolute top-full left-0 right-0 bg-zinc-800 px-4 py-3 z-40 shadow-lg">
            <form onSubmit={handleSearch} className="flex items-center space-x-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Search
              </button>
            </form>

            {recentSearches.length > 0 && (
              <div className="mt-3">
                <h4 className="text-zinc-400 text-sm mb-2">Recent Searches:</h4>
                <ul className="space-y-1">
                  {recentSearches.map((item, index) => (
                    <li
                      key={index}
                      className="text-zinc-200 hover:text-white cursor-pointer"
                      onClick={() => setSearchQuery(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && menuOpen && (
          <div className="bg-zinc-900 mt-3 p-4 rounded-lg shadow-lg space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "text-zinc-300 hover:bg-zinc-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t-[3px] border-zinc-700 flex justify-around items-center py-4 md:hidden">
          {bottomNavItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-sm font-semibold transition-all ${
                  isActive ? "text-red-500" : "text-zinc-300 hover:text-white"
                }`
              }
            >
              <div className="text-lg mb-0.5">{item.icon}</div>
              <span className="text-[13px]">{item.name}</span>
            </NavLink>
          ))}
        </div>
      )}

      {/* Parental Control Dropdown */}
      {showParentalControl && (
        <div ref={dropdownRef} style={dropdownStyles}>
          <ParentsControl onClose={() => setShowParentalControl(false)} />
        </div>
      )}
    </>
  );
};

export default NavbarPage;
