// src/context/ChannelContext.js
import React, { createContext, useEffect, useState } from "react";

export const ChannelContext = createContext();

const GUEST_CHANNEL = {
  name: "Guest User",
  handle: "@guest",
  description: "content Creator",
  email: "guest@example.com",
  dp: "https://i.pravatar.cc/150?img=1",
  banner: "https://source.unsplash.com/1200x300/?abstract",
  watermark: "https://via.placeholder.com/80x80?text=GM",
};

const ADMIN_CHANNEL = {
  name: "Brooke Cooper",
  handle: "@brooke-cooper",
  description: "Web Developer & Content Creator",
  email: "brooke@example.com",
  dp: "https://i.pravatar.cc/150?img=3",
  banner: "https://source.unsplash.com/1200x300/?technology",
  watermark: "https://via.placeholder.com/80x80?text=WM",
};

export const ChannelProvider = ({ children }) => {
  const [channel, setChannel] = useState(GUEST_CHANNEL);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On mount, restore from localStorage if present
  useEffect(() => {
    try {
      const storedLoggedIn = localStorage.getItem("isLoggedIn");
      const storedChannel = localStorage.getItem("channel");
      if (storedLoggedIn === "true" && storedChannel) {
        setIsLoggedIn(true);
        setChannel(JSON.parse(storedChannel));
      }
    } catch (err) {
      console.error("Failed to read auth state from localStorage", err);
    }
  }, []);

  // login: return true on success, false on fail
  // Currently: credentials are simple — both id and password must be "admin"
  const login = (id, password) => {
    // sanitize inputs (optional)
    const _id = (id || "").toString().trim();
    const _pw = (password || "").toString();

    if (_id === "admin" && _pw === "admin") {
      setChannel(ADMIN_CHANNEL);
      setIsLoggedIn(true);
      try {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("channel", JSON.stringify(ADMIN_CHANNEL));
      } catch (err) {
        console.error("Failed to save auth state to localStorage", err);
      }
      return true;
    }

    // if you want multiple users, add checks here (or call an API)
    return false;
  };

  const logout = () => {
    setChannel(GUEST_CHANNEL);
    setIsLoggedIn(false);
    try {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("channel");
    } catch (err) {
      console.error("Failed to clear auth state from localStorage", err);
    }
  };

  return (
    <ChannelContext.Provider
      value={{
        channel,
        setChannel,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
