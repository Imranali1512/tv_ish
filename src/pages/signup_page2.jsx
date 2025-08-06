import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SignupPage2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "username@gmail.com";

  const [code, setCode] = useState(new Array(6).fill(""));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const firstInput = document.getElementById("code-0");
    if (firstInput) firstInput.focus();
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

  const handleChange = (element, index) => {
    if (!/^\d*$/.test(element.value)) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);
    if (element.value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      setCode(pasteData.split(""));
      const lastInput = document.getElementById("code-5");
      if (lastInput) lastInput.focus();
    }
  };

  const verifyCode = () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 6) {
      alert("Please enter the complete 6-digit code.");
      return;
    }
    alert(`Code verified: ${enteredCode}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Side — Logo Video + Posters */}
      <div className="relative md:w-1/2 p-4 flex flex-col items-start overflow-hidden">
        {/* Logo Video */}
        <div className="w-[180px] h-[100px] mb-6 ml-2">
          <video
            src="/logo/tv-ish_logo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

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
                isMobile ? "w-[110px] h-[180px]" : "w-[173.8px] h-[359.67px]"
              }`}
              variants={imageVariants}
            />
          ))}
        </motion.div>
      </div>

      {/* Right Side — Confirmation Form */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 max-w-md mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full">
          <div className="w-full flex justify-between text-sm text-gray-400 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <span className="text-lg">&larr;</span> Back
            </button>
            <div className="text-right">
              <p>Step 2 of 2</p>
              <p className="font-semibold text-blue-400">Signup</p>
            </div>
          </div>

          <h2 className="text-red-600 text-3xl font-bold mb-3 text-center sm:text-left">
            Check your Mail
          </h2>

          <p className="text-sm text-gray-300 mb-8 text-center sm:text-left">
            We&apos;ve sent a 6-digit confirmation code to{" "}
            <span className="text-blue-600 underline cursor-pointer">{email}</span>. Make sure
            you enter correct code.
          </p>

          {/* OTP Inputs — Responsive Grid */}
          <div
            className="grid grid-cols-6 gap-2 sm:gap-4 justify-center mb-8"
            onPaste={handlePaste}
          >
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`code-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-full h-14 sm:h-16 text-center text-2xl sm:text-3xl rounded-md bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={digit}
                onChange={(e) => handleChange(e.target, idx)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={verifyCode}
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md font-semibold"
          >
            Verify
          </button>

          {/* Resend Link */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Didn&apos;t receive code?{" "}
            <button
              onClick={() => alert("Resend code clicked!")}
              className="text-blue-400 underline hover:text-blue-600"
            >
              Resend Code
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage2;
