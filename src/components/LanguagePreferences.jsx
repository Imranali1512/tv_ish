import React, { useState } from "react";

const LanguagePreferences = () => {
  const [language, setLanguage] = useState("English");

  return (
    <SectionWrapper title="Language Preferences">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option>English</option>
        <option>Urdu</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
      </select>
    </SectionWrapper>
  );
};

export default LanguagePreferences;
