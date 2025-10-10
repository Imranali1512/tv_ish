import React, { createContext, useEffect, useState, useCallback } from "react";

export const ChannelContext = createContext();

const GUEST_CHANNEL = {
  name: "Guest User",
  handle: "@guest",
  description: "Welcome guest!",
  email: "",
  phone: "",
  dp: "",
  banner: "",
  watermark: "",
  links: [],
  socialLinks: [],
};

// Admin profile (the only real user in this app)
const ADMIN_CHANNEL = {
  name: "Brooke Cooper",
  handle: "@brooke-cooper",
  description: "Web Developer & Content Creator",
  email: "brooke@example.com",
  phone: "123-456-7890",
  dp: "https://i.pravatar.cc/150?img=3",
  banner: "https://source.unsplash.com/1200x300/?technology",
  watermark: "https://via.placeholder.com/80x80?text=WM",
  links: [],
  socialLinks: [],
};

export const ChannelProvider = ({ children }) => {
  // Load initial channel from localStorage or guest
  const [channel, setChannel] = useState(() => {
    try {
      const storedLoggedIn = localStorage.getItem("isLoggedIn");
      const storedChannel = localStorage.getItem("channel");
      if (storedLoggedIn === "true" && storedChannel) {
        return JSON.parse(storedChannel);
      }
    } catch (err) {
      console.error("Failed to read auth state from localStorage", err);
    }
    return GUEST_CHANNEL;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem("isLoggedIn") === "true";
    } catch (err) {
      return false;
    }
  });

  const updateChannel = useCallback((updatedData) => {
    setChannel((prev) => {
      const newChannel = { ...prev, ...updatedData };
      try {
        localStorage.setItem("channel", JSON.stringify(newChannel));
      } catch (err) {
        console.error("Failed to save updated channel", err);
      }
      return newChannel;
    });
  }, []);

  const login = useCallback((id, password) => {
    const _id = (id || "").trim();
    const _pw = (password || "").toString();

    if (_id === "admin" && _pw === "admin") {
      // On login, check if we have saved channel for admin in localStorage
      try {
        const savedChannel = localStorage.getItem("channel");
        if (savedChannel) {
          setChannel(JSON.parse(savedChannel));
        } else {
          setChannel(ADMIN_CHANNEL);
          localStorage.setItem("channel", JSON.stringify(ADMIN_CHANNEL));
        }
        localStorage.setItem("isLoggedIn", "true");
      } catch (err) {
        console.error("Failed during login", err);
        setChannel(ADMIN_CHANNEL);
      }
      setIsLoggedIn(true);
      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    setChannel(GUEST_CHANNEL);
    setIsLoggedIn(false);
    try {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("channel");
    } catch (err) {
      console.error("Failed to clear auth state from localStorage", err);
    }
  }, []);

  // Sync localStorage when channel or login state changes
  useEffect(() => {
    try {
      if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("channel", JSON.stringify(channel));
      } else {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("channel");
      }
    } catch (err) {
      // ignore
    }
  }, [isLoggedIn, channel]);

  return (
    <ChannelContext.Provider
      value={{
        channel,
        isLoggedIn,
        login,
        logout,
        updateChannel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
