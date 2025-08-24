import React, { useState } from "react";


const BlockedUsers = () => {
  const [blocked, setBlocked] = useState(["spam_account1", "annoying_user2"]);

  const unblockUser = (user) => {
    setBlocked(blocked.filter((u) => u !== user));
  };

  return (
    <SectionWrapper title="Blocked Users">
      {blocked.length === 0 ? (
        <p>No users blocked</p>
      ) : (
        <ul className="space-y-2">
          {blocked.map((user) => (
            <li key={user} className="flex justify-between items-center border p-2 rounded">
              <span>{user}</span>
              <button
                onClick={() => unblockUser(user)}
                className="text-red-600 hover:underline"
              >
                Unblock
              </button>
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
};

export default BlockedUsers;
