import React, { useState } from 'react';

const EmailAddress = () => {
  const [email, setEmail] = useState('ali@example.com');
  const [isEditing, setIsEditing] = useState(false);
  const [tempEmail, setTempEmail] = useState(email);

  const handleSave = () => {
    setEmail(tempEmail);
    setIsEditing(false);
    alert('Email updated successfully!');
  };

  const handleCancel = () => {
    setTempEmail(email);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-800">Email Address</h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            Edit
          </button>
        )}
      </div>

      {!isEditing ? (
        <p className="text-gray-600">{email}</p>
      ) : (
        <div className="space-y-3">
          <input
            type="email"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailAddress;
