import React, { useState, useEffect } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = Array.from({ length: 15 }, (_, i) => `/images/login_img${i + 1}.png`);
  const imagesToShow = isMobile ? images.slice(0, 9) : images.slice(0, 10);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden relative">
      {/* LEFT SIDE — Posters + Logo */}
      <div className="relative md:w-1/2 p-4 flex flex-col items-start overflow-hidden">
        {/* Logo Video */}
        <div className="w-[180px] h-[75px] mb-4 ml-2 z-20 relative bg-black">
          <video
            src="/logo/tv-ish_logo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* Top & Bottom Fades */}
        <div className="absolute top-[100px] left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />

        {/* Poster Grid */}
        <div className={`grid gap-3 relative z-10 overflow-hidden ${isMobile ? "grid-cols-3" : "grid-cols-5"}`}>
          {imagesToShow.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Poster ${index + 1}`}
              className="object-cover rounded-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              style={{
                width: isMobile ? "110px" : "173.8px",
                height: isMobile ? "180px" : "359.67px",
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Login Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-red-500 text-2xl font-bold">Welcome</h2>
          <p className="text-sm text-white">Login to continue</p>

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-white"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm text-gray-400">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="checkbox" className="accent-red-500" />
              <span>Remember Me</span>
            </label>
            <button
              type="button"
              onClick={() => navigate("/forgetpassword_page")}
              className="text-blue-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-700 hover:bg-blue-800 transition p-2 rounded-md">
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup_page")}
              className="text-blue-400 hover:underline"
              type="button"
            >
              Signup
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="flex-1 border-gray-600" />
            <span className="text-xs text-gray-400">or continue with</span>
            <hr className="flex-1 border-gray-600" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
              <FaFacebook className="text-3xl cursor-pointer hover:text-blue-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
              <FaGoogle className="text-3xl cursor-pointer hover:text-red-500" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
              <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
