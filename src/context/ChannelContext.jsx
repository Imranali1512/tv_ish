// src/context/ChannelContext.js
import React, { createContext, useState } from "react";

export const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [channel, setChannel] = useState({
    name: "Brooke Cooper",
    handle: "@brooke-cooper",
    description: "Web Developer & Content Creator",
    email: "brooke@example.com",
    dp: "https://i.pravatar.cc/150?img=3",
    banner: "https://source.unsplash.com/1200x300/?technology",
    watermark: "https://via.placeholder.com/80x80?text=WM",
  });

  return (
    <ChannelContext.Provider value={{ channel, setChannel }}>
      {children}
    </ChannelContext.Provider>
  );
};
