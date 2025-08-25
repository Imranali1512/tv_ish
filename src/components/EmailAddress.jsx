import React, { useState } from 'react';

const EmailAddress = () => {
  const [email, setEmail] = useState('Brooke@gmail.com'); // current verified email
  const [isEditing, setIsEditing] = useState(false);
  const [tempEmail, setTempEmail] = useState(email);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleSendVerification = () => {
    if (tempEmail === email) {
      setError('This is your current email. Please enter a different one.');
      return;
    }

    // Simulate sending code
    setError('');
    setVerificationSent(true);
    alert(`Verification code sent to ${tempEmail}`);
  };

  const handleVerifyCode = () => {
    if (verificationCode === '123456') {
      setIsVerified(true);
      alert('Email verified!');
    } else {
      alert('Invalid verification code');
    }
  };

  const handleSave = () => {
    if (!isVerified) {
      alert('Please verify your new email before saving.');
      return;
    }

    setEmail(tempEmail);
    setIsEditing(false);
    setIsVerified(false);
    setVerificationSent(false);
    setVerificationCode('');
    alert('Email updated successfully!');
  };

  const handleCancel = () => {
    setTempEmail(email);
    setIsEditing(false);
    setIsVerified(false);
    setVerificationSent(false);
    setVerificationCode('');
    setError('');
  };

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-8 pt-24 pb-12">
      <div className="bg-[#1c1f24] p-6 rounded-xl shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Email Address</h1>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-2xl">
            This is the email connected to your account. You can update it anytime. We'll send a verification code to confirm your new email.
          </p>
        </div>

        {/* Email Edit Box */}
        <div className="border border-gray-700 rounded-xl p-5 bg-[#101418] max-w-xl space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Email</p>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                Edit
              </button>
            )}
          </div>

          {!isEditing ? (
            <p className="text-base font-medium text-white">{email}</p>
          ) : (
            <div className="space-y-4">
              <input
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {!verificationSent ? (
                <button
                  onClick={handleSendVerification}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Send Verification Code
                </button>
              ) : (
                <>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">
                      Enter the 6-digit verification code sent to <span className="text-white font-medium">{tempEmail}</span>
                    </p>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter code (e.g., 123456)"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {!isVerified && (
                      <button
                        onClick={handleVerifyCode}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                      >
                        Verify Code
                      </button>
                    )}
                    {isVerified && (
                      <p className="text-green-400 text-sm">Email verified ✅</p>
                    )}
                  </div>
                </>
              )}

              <div className="flex gap-3 justify-end pt-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!isVerified}
                  className={`px-4 py-2 rounded-md transition ${
                    isVerified
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailAddress;
