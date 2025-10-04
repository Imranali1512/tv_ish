import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome, FaThLarge, FaVideo, FaThumbsUp, FaList,
  FaHeart, FaHistory, FaCog, FaQuestionCircle, FaSignOutAlt,
  FaBell, FaSearch, FaUpload, FaBars, FaTimes, FaChartBar
} from 'react-icons/fa';

import Notification from './notification'; // Import your Notification component
import { ChannelContext } from '../context/ChannelContext';  // 👈 Import your ChannelContext

const DashboardSidebar = ({
  showSearch = true,
  showUpload = true,
  showNotifications = true,
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Get channel data from context
  const { channel } = useContext(ChannelContext);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleNotif = () => setNotifOpen(!notifOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    }
    if (notifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notifOpen]);

  const menuItems = [
    { label: 'Home', icon: <FaHome />, path: '/' },
    // { label: 'Dashboard', icon: <FaThLarge />, path: '/dashboard' },
    { label: 'Content ', icon: <FaVideo />, path: '/my-videos' },
    { label: 'History', icon: <FaHistory />, path: '/history' },
    { label: 'Liked Videos', icon: <FaThumbsUp />, path: '/liked' },
    { label: 'Playlist', icon: <FaList />, path: '/playlist' },
    { label: 'Watch Later', icon: <FaHeart />, path: '/watch-later' },
    
  ];

  const bottomItems = [
    { label: 'Settings', icon: <FaCog />, path: '/settings' },
    { label: 'Support', icon: <FaQuestionCircle />, path: '/support' },
    { label: 'Plan', icon: <FaChartBar />, path: '/plans' }, // ✅ NEW Plan item
    {
      label: 'Log out',
      icon: <FaSignOutAlt />,
      path: '/login',
      red: true,
      onClick: () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
        setSidebarOpen(false);
      }
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-52 xl:w-64 bg-black text-white flex-col z-40 shadow-xl border-r border-gray-800 transition-all duration-300 ease-in-out">
        <SidebarContent
          menuItems={menuItems}
          bottomItems={bottomItems}
          onItemClick={() => {}}
          channel={channel}
        />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={toggleSidebar}></div>
      )}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="flex justify-end p-4">
          <FaTimes className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <SidebarContent
          menuItems={menuItems}
          bottomItems={bottomItems}
          onItemClick={() => setSidebarOpen(false)}
          channel={channel}
        />
      </aside>

      {/* Topbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black text-white flex items-center justify-between px-4 lg:pl-64 z-30 border-b border-gray-800 shadow-md">
        <div className="flex flex-1 items-center gap-4 justify-start">
          <div className="flex items-center lg:hidden">
            <FaBars className="text-xl cursor-pointer" onClick={toggleSidebar} />
          </div>

          {showSearch && (
            <div
              className="flex items-center bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow-inner
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full transition-all duration-300 ease-in-out"
            >
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm"
              />
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-4 relative" ref={notifRef}>
          {showUpload && (
            <button
              onClick={() => navigate('/uploadvideos')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-md transition duration-200"
            >
              <FaUpload />
              <span className="hidden sm:inline">Upload</span>
            </button>
          )}

          {showNotifications && (
            <div
              className="relative cursor-pointer"
              onClick={toggleNotif}
              aria-haspopup="true"
              aria-expanded={notifOpen}
              title="Notifications"
            >
              <FaBell className="text-xl text-gray-300 hover:text-white transition duration-200" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                3
              </span>

              {notifOpen && (
                <div className="absolute right-0 mt-3 w-[360px] max-h-[calc(100vh-80px)] overflow-y-auto z-50">
                  <Notification onClose={() => setNotifOpen(false)} />
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

const SidebarContent = ({ menuItems, bottomItems, onItemClick, channel }) => {
  return (
    <>
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 border-b border-gray-700">
        <img
          src={channel?.dp || 'https://i.pravatar.cc/100?img=3'}
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2 border-4 border-red-500 shadow-md"
        />
        <h2 className="text-lg font-semibold">{channel?.name || 'User Name'}</h2>
        <p className="text-sm text-gray-400">{channel?.description || 'Web Developer'}</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 transition select-none ${
                isActive ? 'bg-red-600 text-white' : 'text-white hover:bg-gray-800'
              }`
            }
            onClick={onItemClick}
          >
            <div className="mr-4 text-lg">{item.icon}</div>
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="mb-6">
        {bottomItems.map((item) =>
          item.label === 'Log out' ? (
            <div
              key={item.label}
              className="flex items-center px-6 py-3 cursor-pointer text-red-500 hover:bg-red-900 transition"
              onClick={item.onClick}
            >
              <div className="mr-4 text-lg">{item.icon}</div>
              <span className="text-sm">{item.label}</span>
            </div>
          ) : (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 transition select-none ${
                  isActive ? 'bg-red-600 text-white' : 'text-white hover:bg-gray-800'
                }`
              }
              onClick={onItemClick}
            >
              <div className="mr-4 text-lg">{item.icon}</div>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          )
        )}
      </div>
    </>
  );
};

export default DashboardSidebar;
