import React, { useState } from "react";

const ThemePreferences = () => {
  const [theme, setTheme] = useState("light");

  return (
    <SectionWrapper title="Theme Preferences">
      <div className="flex space-x-4">
        <button
          onClick={() => setTheme("light")}
          className={`px-4 py-2 rounded border ${
            theme === "light" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`px-4 py-2 rounded border ${
            theme === "dark" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Dark
        </button>
      </div>
    </SectionWrapper>
  );
};

export default ThemePreferences;
