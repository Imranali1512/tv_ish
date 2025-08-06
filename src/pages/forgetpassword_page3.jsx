import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

const ForgotPasswordPage3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || null;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/forgetpassword_page2");
    }

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [email, navigate]);

  const images = Array.from({ length: 15 }, (_, i) => `/images/login_img${i + 1}.png`);
  const imagesToShow = isMobile ? images.slice(0, 9) : images.slice(0, 10);

  const validatePassword = (password) => {
    return {
      length: password.length >= 8 && password.length <= 32,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };
  };

  const validations = validatePassword(newPassword);
  const allValid = Object.values(validations).every(Boolean) && newPassword === confirmPassword;

  const handleReset = () => {
    if (!allValid) {
      alert("Please meet all password requirements and ensure passwords match.");
      return;
    }

    alert("Password reset successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Side – Posters Grid */}
      <div className="relative md:w-1/2 p-4 flex flex-col items-start overflow-hidden">
        <div className="w-[180px] h-[100px] mb-4 ml-2">
          <video
            src="/logo/tv-ish_logo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Fades */}
        <div className="absolute top-[100px] left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />

        <motion.div
          className={`grid gap-3 relative z-0 overflow-hidden ${
            isMobile ? "grid-cols-3" : "grid-cols-5"
          }`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {imagesToShow.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Poster ${index + 1}`}
              className={`object-cover rounded-md ${
                isMobile ? "w-[110px] h-[180px]" : "w-[173.8px] h-[359.67px]"
              }`}
              loading="lazy"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Right Side – Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6 overflow-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md space-y-6">
          {/* Top Nav */}
          <div className="flex justify-between items-start text-sm text-gray-300">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <span className="text-lg">&larr;</span> Back
            </button>
            <div className="text-right">
              <p className="text-xs text-gray-400">Step 3 of 3</p>
              <p className="font-semibold text-white">Forgot Password</p>
            </div>
          </div>

          {/* Header */}
          <h2 className="text-red-500 text-2xl font-bold">Create New Password</h2>
          <p className="text-sm text-gray-300">
            Enter the new password for your account.
          </p>

          {/* New Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">New Password</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 pl-10 pr-10 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="************"
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <span
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
              >
                {showNew ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 pl-10 pr-10 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="************"
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
              >
                {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          {/* Password Rules */}
          <ul className="text-sm text-gray-300 space-y-1 mt-2">
            <li className={`${validations.length ? "text-blue-400" : "text-gray-500"}`}>
              ✓ Password must be between 8 to 32 characters.
            </li>
            <li className={`${validations.uppercase ? "text-blue-400" : "text-gray-500"}`}>
              ✓ Must contain an uppercase character.
            </li>
            <li className={`${validations.number ? "text-blue-400" : "text-gray-500"}`}>
              ✓ Must contain a number.
            </li>
            <li className={`${validations.special ? "text-blue-400" : "text-gray-500"}`}>
              ✓ Must contain one special character.
            </li>
          </ul>

          {/* Submit */}
          <button
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md font-semibold"
          >
            Reset Password
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage3;
