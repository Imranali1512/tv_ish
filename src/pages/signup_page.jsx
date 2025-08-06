import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen md:h-[150vh] bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Side — Posters */}
      <div className="relative md:w-1/2 p-4 flex flex-col items-start overflow-hidden">

        {/* Logo Video */}
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

        {/* Posters Grid */}
        <motion.div
          className={`grid gap-3 relative z-0 overflow-hidden ${
            isMobile ? "grid-cols-3" : "grid-cols-5"
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {imagesToShow.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Poster ${index + 1}`}
              className={`object-cover rounded-md ${
                isMobile
                  ? "w-[110px] h-[180px]"
                  : "w-[173.8px] h-[359.67px]"
              }`}
              variants={imageVariants}
            />
          ))}
        </motion.div>
      </div>

      {/* Right Side — Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6 overflow-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md space-y-6">

          {/* Top Nav in Form */}
          <div className="w-full flex items-center justify-between text-sm text-gray-300 mb-2">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <span className="text-lg">&larr;</span> Back
            </button>
            <div className="text-right">
              <p className="text-xs text-gray-400">Step 1 of 2</p>
              <p className="font-semibold text-blue-400">Signup</p>
            </div>
          </div>

          {/* Header */}
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Register your account</h2>
            <p className="text-sm text-gray-300 mt-1">Fill the details below to submit register account.</p>
          </div>

          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your firstname"
              className="w-full sm:w-1/2 p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Your lastname"
              className="w-full sm:w-1/2 p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="(+123) 9876543210"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
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

          {/* Terms */}
          <p className="text-xs text-gray-400">
            By signing in, you're agree to our{" "}
            <span className="text-blue-400 underline cursor-pointer">Terms & Condition</span> and{" "}
            <span className="text-blue-400 underline cursor-pointer">Privacy Policy.</span>
          </p>

          {/* Submit */}
          <button
            className="w-full bg-blue-700 hover:bg-blue-800 transition p-2 rounded-md"
            onClick={() => navigate("/signup_page2")}
          >
            Continue
          </button>

          {/* Back to login */}
          <p className="text-center text-sm text-gray-400">
            Already have account?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-blue-400 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
