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
import { NavLink } from "react-router-dom";
import ParentsControl from "../components/parentscontrol";
import PersonalSidebar from "../components/personalsidebar";

const NavbarPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showParentalControl, setShowParentalControl] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const shieldRef = useRef(null);
  const dropdownRef = useRef(null);
  const accountRef = useRef(null);
  const accountDropdownRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setRecentSearches(
      JSON.parse(localStorage.getItem("recentSearches")) || []
    );
  }, []);

  useEffect(() => {
    const checkLogin = () =>
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    checkLogin();
    const interval = setInterval(checkLogin, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const updated = [
      searchQuery,
      ...recentSearches.filter((s) => s !== searchQuery),
    ].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    setSearchQuery("");
    setShowSearch(false);
  };

  useEffect(() => {
    if (showParentalControl && shieldRef.current && !isMobile) {
      const rect = shieldRef.current.getBoundingClientRect();
      const width = 600;
      const viewW = window.innerWidth;
      let left = rect.left + window.pageXOffset;
      if (left + width + 8 > viewW) left = viewW - width - 8;
      setDropdownStyles({
        position: "fixed",
        top: rect.bottom + 8,
        left,
        width,
        zIndex: 999,
      });
    } else {
      setDropdownStyles({});
    }
  }, [showParentalControl, isMobile]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showParentalControl &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        shieldRef.current &&
        !shieldRef.current.contains(e.target)
      ) {
        setShowParentalControl(false);
      }
      if (
        showAccountDropdown &&
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(e.target) &&
        accountRef.current &&
        !accountRef.current.contains(e.target)
      ) {
        setShowAccountDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showParentalControl, showAccountDropdown]);

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
              filter:
                "drop-shadow(0 0 10px rgba(200,200,200,0.8)) drop-shadow(0 0 20px rgba(180,180,180,0.5)) drop-shadow(0 0 30px rgba(150,150,150,0.3))",
            }}
          >
            <img
              src="/logo/tv-ish.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop nav links */}
          {!isMobile && (
            <div className="bg-zinc-900 rounded-xl px-6 py-2 flex flex-wrap justify-center gap-3 shadow-lg">
              {navItems.map((item, idx) => (
                <NavLink
                  key={idx}
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

          {/* Icons */}
          <div className="flex items-center space-x-4 text-lg text-white relative">
            {!isMobile ? (
              <>
                <div
                  className={`cursor-pointer p-1 rounded-md transition ${
                    showSearch ? "text-blue-400 bg-zinc-800 shadow-lg" : "hover:text-blue-400"
                  }`}
                  onClick={() => setShowSearch((prev) => !prev)}
                >
                  <FaSearch size={22} />
                </div>
                <div
                  className={`cursor-pointer p-1 rounded-md transition ${
                    showNotifications
                      ? "text-red-400 bg-zinc-800 shadow-lg"
                      : "hover:text-red-400"
                  }`}
                  onClick={() => setShowNotifications((prev) => !prev)}
                >
                  <FaBell size={22} />
                </div>
                <div
                  ref={accountRef}
                  className={`cursor-pointer p-1 rounded-md transition ${
                    showAccountDropdown
                      ? "text-green-400 bg-zinc-800 shadow-lg"
                      : "hover:text-green-400"
                  }`}
                  onClick={() => setShowAccountDropdown((prev) => !prev)}
                >
                  <FaUser size={22} />
                </div>
                {showAccountDropdown && !isMobile && (
                  <div
                    ref={accountDropdownRef}
                    style={{
                      position: "fixed",
                      top: accountRef.current?.getBoundingClientRect().bottom + 8 || 0,
                      right: 16,
                      zIndex: 999,
                    }}
                  >
                    <PersonalSidebar onClose={() => setShowAccountDropdown(false)} />
                  </div>
                )}
                <div
                  ref={shieldRef}
                  className={`cursor-pointer p-1 rounded-md transition ${
                    showParentalControl
                      ? "text-purple-400 bg-zinc-800 shadow-lg"
                      : "hover:text-purple-400"
                  }`}
                  onClick={() => setShowParentalControl((prev) => !prev)}
                >
                  <FaShieldAlt size={22} />
                </div>
              </>
            ) : (
              <button onClick={() => setMenuOpen((prev) => !prev)}>
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            )}
          </div>
        </div>

        {showSearch && !isMobile && (
          <div className="absolute top-full left-0 right-0 bg-zinc-800 px-4 py-3 z-40 shadow-lg">
            <form onSubmit={handleSearch} className="flex items-center space-x-3">
              <input
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
          </div>
        )}

        {isMobile && menuOpen && (
          <div className="bg-zinc-900 mt-3 p-4 rounded-lg shadow-lg space-y-2">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
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

      {/* Mobile bottom nav */}
      {isMobile && (
        <>
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t-[3px] border-zinc-700 flex justify-around items-center py-4 md:hidden">
            {bottomNavItems.map((item, idx) => (
              <NavLink
                key={idx}
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
            <div
              className={`flex flex-col items-center text-sm font-semibold transition cursor-pointer ${
                showAccountDropdown ? "text-green-400" : "text-zinc-300 hover:text-white"
              }`}
              onClick={() => setShowAccountDropdown(true)}
            >
              <div className="text-lg mb-0.5">
                <FaUser />
              </div>
              <span className="text-[13px]">Account</span>
            </div>
          </div>

          {/* ✅ Fixed responsive width drawer here */}
          {showAccountDropdown && (
            <div
              ref={accountDropdownRef}
              className="fixed inset-0 z-50 bg-black/70 flex justify-end"
              onClick={() => setShowAccountDropdown(false)}
            >
              <div
                className="bg-zinc-900 w-[80%] max-w-xs h-full shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <PersonalSidebar onClose={() => setShowAccountDropdown(false)} />
              </div>
            </div>
          )}
        </>
      )}

      {/* Parental Control */}
      {!isMobile && showParentalControl && (
        <div ref={dropdownRef} style={dropdownStyles}>
          <ParentsControl onClose={() => setShowParentalControl(false)} />
        </div>
      )}

      {isMobile && showParentalControl && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex justify-end"
          onClick={() => setShowParentalControl(false)}
        >
          <div
            className="bg-zinc-900 w-[80%] max-w-xs h-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ParentsControl onClose={() => setShowParentalControl(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarPage;
