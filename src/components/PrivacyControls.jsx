import React, { useState } from "react";

const PrivacyControls = () => {
  const [profilePrivate, setProfilePrivate] = useState(false);

  return (
    <SectionWrapper title="Privacy Controls">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={profilePrivate}
          onChange={() => setProfilePrivate(!profilePrivate)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span>Make Profile Private</span>
      </label>
    </SectionWrapper>
  );
};

export default PrivacyControls;
