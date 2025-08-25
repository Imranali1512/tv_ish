import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const NotificationPreferences = () => {
  const [pauseAll, setPauseAll] = useState(false);
  const [sleepMode, setSleepMode] = useState(false);

  const togglePauseAll = () => setPauseAll(!pauseAll);
  const toggleSleepMode = () => setSleepMode(!sleepMode);

  const sections = [
    "Posts, stories and comments",
    "Following and followers",
    "Messages",
    "Calls",
    "Live and reels",
    "Fundraisers",
    "From Instagram",
    "Birthdays",
  ];

  const otherTypes = ["Email notifications", "Shopping"];

  // Condition to check if notifications are disabled
  const isNotificationsDisabled = pauseAll || sleepMode;

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 pt-16 pb-24">
      {/* Heading stays in original position */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-500">Notification Preferences</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage how you receive notifications on your device.
        </p>
      </div>

      {/* All content shifted right */}
      <div className="ml-6 space-y-8">
        {/* Pause All */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-white">Pause all</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pauseAll}
                onChange={togglePauseAll}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-600 transition-all"></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  pauseAll ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
          </div>
          <p className="text-sm text-gray-400">
            Temporarily pause all push notifications.
          </p>
        </div>

        {/* Sleep Mode */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-white">Sleep mode</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={sleepMode}
                onChange={toggleSleepMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-600 transition-all"></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  sleepMode ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
          </div>
          <p className="text-sm text-gray-400">
            Automatically mute notifications at night or when you need to focus.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Categories */}
        <div>
          <p className="font-semibold mb-3">Activity notifications</p>
          <div className="space-y-2">
            {sections.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-3 px-3 rounded-lg cursor-pointer transition ${
                  isNotificationsDisabled
                    ? "bg-[#1a1a1a] opacity-50 cursor-not-allowed"
                    : "hover:bg-[#1c1f24]"
                }`}
              >
                <p>{item}</p>
                <FiChevronRight className="text-gray-400 text-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Other Types */}
        <div>
          <p className="font-semibold mb-3">Other notification types</p>
          <div className="space-y-2">
            {otherTypes.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-3 px-3 rounded-lg cursor-pointer transition ${
                  isNotificationsDisabled
                    ? "bg-[#1a1a1a] opacity-50 cursor-not-allowed"
                    : "hover:bg-[#1c1f24]"
                }`}
              >
                <p>{item}</p>
                <FiChevronRight className="text-gray-400 text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3">
        <button className="text-white text-2xl hover:scale-110 transition">🏠</button>
        <button className="text-white text-2xl hover:scale-110 transition">🔍</button>
        <button className="text-white text-2xl hover:scale-110 transition">➕</button>
        <button className="text-white text-2xl hover:scale-110 transition">🎥</button>
        <button className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white ring-opacity-20">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default NotificationPreferences;
