import React, { useState } from "react";

const NotificationPreferences = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);

  return (
    <SectionWrapper title="Notification Preferences">
      <label className="flex items-center space-x-3 mb-2">
        <input
          type="checkbox"
          checked={emailNotif}
          onChange={() => setEmailNotif(!emailNotif)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span>Email Notifications</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={pushNotif}
          onChange={() => setPushNotif(!pushNotif)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span>Push Notifications</span>
      </label>
    </SectionWrapper>
  );
};

export default NotificationPreferences;
