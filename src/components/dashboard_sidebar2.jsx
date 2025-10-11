import React, { useState, useContext } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  FaThLarge,
  FaPlayCircle,
  FaChartBar,
  FaUsers,
  FaClosedCaptioning,
  FaCopyright,
  FaCog,
  FaBars,
  FaTimes,
  FaSearch,
  FaUpload,
  FaBell,
  FaArrowLeft,
  FaPencilAlt,
  FaSignOutAlt,
  FaClock,
} from 'react-icons/fa';

import { ChannelContext } from "../context/ChannelContext";

const DashboardSidebar2 = ({
  showSearch = true,
  showUpload = true,
  showNotifications = true,
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleNotif = () => setNotifOpen(!notifOpen);

  const menuItems = [
    { label: 'Dashboard', icon: <FaThLarge />, path: '/dashboard' },
    { label: 'Content', icon: <FaPlayCircle />, path: '/my-videos' },
    { label: 'Analytics', icon: <FaChartBar />, path: '/analytics' },
    { label: 'Community', icon: <FaUsers />, path: '/community' },
    { label: 'Subtitles', icon: <FaClosedCaptioning />, path: '/subtitles' },
    { label: 'Copyright', icon: <FaCopyright />, path: '/copyright' },
    { label: 'Customization', icon: <FaPencilAlt />, path: '/customization' },
  ];

  const bottomItems = [
    { label: 'Settings', icon: <FaCog />, path: '/settings' },
    { label: 'News', icon: <FaClock />, path: '/news' },
    // feedback removed as requested
  ];

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // Add any other logout cleanup here (e.g., tokens, context)
    navigate('/login');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-black text-white flex-col z-40 shadow-lg border-r border-gray-800">
        <SidebarContent
          menuItems={menuItems}
          bottomItems={bottomItems}
          onItemClick={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <SidebarContent
          menuItems={menuItems}
          bottomItems={bottomItems}
          onItemClick={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Topbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black text-white flex items-center justify-between px-4 lg:pl-64 z-30 border-b border-gray-800 shadow">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="lg:hidden text-white text-2xl">
            <FaBars />
          </button>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {/* Search */}
          {showSearch && (
            <div className="hidden sm:flex items-center bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
              />
            </div>
          )}

          {/* Upload */}
          {showUpload && (
            <button
              onClick={() => navigate('/uploadvideos')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium"
            >
              <FaUpload />
              <span className="hidden sm:inline">Upload</span>
            </button>
          )}

          {/* Notifications */}
          {showNotifications && (
            <div className="relative cursor-pointer" onClick={toggleNotif}>
              <FaBell className="text-xl text-gray-300 hover:text-white" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

const SidebarContent = ({ menuItems, bottomItems, onItemClick, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { channel } = useContext(ChannelContext);

  const fixedItems = menuItems.slice(0, 6);
  const scrollableItems = menuItems.slice(6);

  return (
    <div className="flex flex-col h-full pt-16 relative">
      {/* Back Button */}
      <button
        onClick={() => {
          onItemClick?.();
          navigate('/history');
        }}
        className="absolute top-4 left-4 text-white text-xl hover:text-red-500 transition"
        aria-label="Go back"
      >
        <FaArrowLeft />
      </button>

      {/* Profile Info */}
      <div className="flex flex-col items-center py-6 border-b border-gray-700">
        <img
          src={channel.dp}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-red-600 shadow"
        />
        <h2 className="text-lg font-semibold mt-2">{channel.name}</h2>
        <p className="text-sm text-gray-400">{channel.description}</p>
      </div>

      {/* Fixed Menu Items */}
      <nav className="flex flex-col">
        {fixedItems.map(({ label, icon, path }) => {
          const isCopyright = label === 'Copyright';
          const isActive =
            location.pathname === path ||
            (isCopyright && location.pathname.startsWith('/copyright'));

          return (
            <NavLink
              key={label}
              to={path}
              className={`flex items-center px-6 py-3 space-x-4 text-sm font-medium ${
                isActive ? 'bg-red-600 text-white' : 'text-white hover:bg-gray-800'
              }`}
              onClick={onItemClick}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Scrollable Items */}
      <nav
        className="flex flex-col overflow-y-auto"
        style={{ maxHeight: 'calc(100vh - 28rem)' }}
      >
        {scrollableItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={label}
              to={path}
              className={`flex items-center px-6 py-3 space-x-4 text-sm font-medium ${
                isActive ? 'bg-red-600 text-white' : 'text-white hover:bg-gray-800'
              }`}
              onClick={onItemClick}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Items + Logout */}
      <div className="mt-auto mb-4">
        {bottomItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={label}
              to={path}
              className={`flex items-center px-6 py-3 space-x-4 text-sm font-medium ${
                isActive
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={onItemClick}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </NavLink>
          );
        })}

        {/* Logout Button with red text */}
        <button
          onClick={() => {
            onLogout();
            onItemClick();
          }}
          className="flex items-center px-6 py-3 space-x-4 text-sm font-medium text-red-500 hover:bg-gray-800 hover:text-red-600 w-full"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar2;
