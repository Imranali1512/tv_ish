import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalSidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: 'Bessie Cooper',
    image: 'https://i.pravatar.cc/100?img=3',
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleAccountClick = () => {
    navigate('/dashboard'); // 👈 Navigate to dashboard
  };

  return (
    <div className="bg-zinc-900 text-white w-64 rounded-lg shadow-lg p-4 h-full">
      {isLoggedIn ? (
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2 border-2 border-zinc-700"
          />
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-400">My Channel</p>

          <div className="mt-4 w-full space-y-2">
            <button
              onClick={handleAccountClick}
              className="flex items-center w-full gap-2 hover:bg-zinc-800 px-3 py-2 rounded transition"
            >
              <span>👤</span>
              <span>Account</span>
            </button>
            <button className="flex items-center w-full gap-2 hover:bg-zinc-800 px-3 py-2 rounded transition">
              <span>🕒</span>
              <span>NEW</span>
            </button>
            <button className="flex items-center w-full gap-2 hover:bg-zinc-800 px-3 py-2 rounded transition">
              <span>💬</span>
              <span>Support</span>
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 flex items-center gap-2 text-red-400 hover:text-red-500 transition"
          >
            <span>🔚</span>
            Log out
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-full px-4 text-center">
          <p className="text-zinc-400 mb-4 text-lg font-semibold">
            You are not logged in.
          </p>
          <button
            onClick={handleLogin}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalSidebar;
