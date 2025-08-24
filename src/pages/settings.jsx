// Settings.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const settingsData = [
  {
    section: "Account Settings",
    items: [
      {
        title: "Profile Information",
        description:
          "Manage your profile information, including your name, bio, and profile picture.",
        route: "/ProfileInfo", // Navigation route
      },
      {
        title: "Email Address",
        description: "Change your email address associated with your account.",
      },
      {
        title: "Phone Number",
        description:
          "Update your phone number for account verification and notifications.",
      },
    ],
  },
  {
    section: "Notification Settings",
    items: [
      {
        title: "Notification Preferences",
        description: "Customize your notification preferences for various activities.",
      },
      {
        title: "Email Notifications",
        description: "Manage your email notification settings.",
      },
    ],
  },
  {
    section: "Privacy Settings",
    items: [
      {
        title: "Privacy Controls",
        description: "Control who can see your posts and profile information.",
      },
      {
        title: "Blocked Users",
        description: "Manage blocked users.",
      },
    ],
  },
  {
    section: "Security Settings",
    items: [
      {
        title: "Change Password",
        description: "Change your account password.",
      },
      {
        title: "Two-Factor Authentication",
        description: "Enable or disable two-factor authentication for enhanced security.",
      },
    ],
  },
  {
    section: "Preference Settings",
    items: [
      {
        title: "Language Preferences",
        description: "Choose your preferred language for the app interface.",
      },
      {
        title: "Theme Preferences",
        description: "Adjust the app’s appearance with light or dark mode.",
      },
    ],
  },
];

const Settings = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white w-full pt-12 pr-6 pl-6">
      <h1 className="text-red-500 font-bold text-xl mb-8">Settings</h1>

      {settingsData.map(({ section, items }) => (
        <div key={section} className="mb-10">
          <h2 className="text-gray-300 font-semibold mb-4">{section}</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a1a1a] p-4 rounded flex justify-between items-center cursor-pointer hover:bg-[#333]"
                onClick={() => handleItemClick(item)}
              >
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Settings;
