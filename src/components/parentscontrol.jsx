import React, { useState } from "react";

const ParentsControl = () => {
  const [settings, setSettings] = useState({
    kidsOnly: false,
    block18: true,
    blockViolence: false,
    disableChat: false,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="bg-black text-white w-[360px] p-6 rounded-lg relative font-sans">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Parental Controls</h2>
        <button className="text-white text-2xl absolute top-4 right-4">×</button>
      </div>

      <p className="text-sm text-gray-400 mb-4">
        Manage what your child can watch and do on this platform.
      </p>

      {/* Content Restriction */}
      <div className="border-t border-gray-700 pt-4">
        <p className="text-sm font-medium mb-2">Content Restriction</p>

        <ToggleSwitch
          label="Allow Kids Content Only"
          enabled={settings.kidsOnly}
          onToggle={() => handleToggle("kidsOnly")}
        />
        <ToggleSwitch
          label="Block 18+ Movies"
          enabled={settings.block18}
          onToggle={() => handleToggle("block18")}
        />
        <ToggleSwitch
          label="Block Horror/ Violent Content"
          enabled={settings.blockViolence}
          onToggle={() => handleToggle("blockViolence")}
        />
      </div>

      {/* Time Limit */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <p className="text-sm font-medium mb-2">Time Limit</p>
        <p className="text-sm text-gray-400">Set Watch Time Limit Per Day:</p>
        {/* Add input or time picker if needed */}
      </div>

      {/* Communication Setting */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <p className="text-sm font-medium mb-2">Communication Setting</p>

        <ToggleSwitch
          label="Disable Chats/comments"
          enabled={settings.disableChat}
          onToggle={() => handleToggle("disableChat")}
        />
      </div>

      {/* Save Button */}
      <button className="mt-6 bg-red-600 hover:bg-red-700 transition-colors text-white font-medium py-2 px-4 rounded">
        Save changes
      </button>
    </div>
  );
};

// Toggle Switch Component
const ToggleSwitch = ({ label, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between my-2">
      <span className="text-sm">{label}</span>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-red-500" : "bg-gray-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default ParentsControl;
