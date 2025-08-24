import React, { useState } from "react";

const TwoFactorAuthentication = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <SectionWrapper title="Two-Factor Authentication">
      <p>Status: <strong>{enabled ? "Enabled" : "Disabled"}</strong></p>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`mt-3 px-4 py-2 rounded transition ${
          enabled ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {enabled ? "Disable" : "Enable"} 2FA
      </button>
    </SectionWrapper>
  );
};

export default TwoFactorAuthentication;
