import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const handleChangePassword = () => {
    if (newPwd !== confirmPwd) {
      alert("New passwords do not match");
      return;
    }
    // Password change logic here
    alert("Password changed successfully!");
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
  };

  return (
    <SectionWrapper title="Change Password">
      <input
        type="password"
        placeholder="Current Password"
        value={currentPwd}
        onChange={(e) => setCurrentPwd(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPwd}
        onChange={(e) => setNewPwd(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPwd}
        onChange={(e) => setConfirmPwd(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleChangePassword}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Change Password
      </button>
    </SectionWrapper>
  );
};

export default ChangePassword;
