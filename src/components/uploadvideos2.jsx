import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Upload } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UploadVideos2() {
  const [open, setOpen] = useState(false);
  const [uploadType, setUploadType] = useState("Select type");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, 250);
  };

  const getCurrentStep = () => {
    if (location.pathname.includes("uploadvideos5")) return 4;
    if (location.pathname.includes("uploadvideos4")) return 3;
    if (location.pathname.includes("uploadvideos3")) return 2;
    return 1;
  };

  const currentStep = getCurrentStep();

  const handleStepClick = (step) => {
    if (step === 1) navigate("/uploadvideos2");
    else if (step === 2) navigate("/uploadvideos3");
    else if (step === 3) navigate("/uploadvideos4");
    else if (step === 4) navigate("/uploadvideos5");
  };

  const steps = [
    { id: 1, label: "Details" },
    { id: 2, label: "Profile" },
    { id: 3, label: "Media" },
    { id: 4, label: "Listing" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-6xl bg-[#181818] text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.25 }}
            >
              {/* ❌ Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleClose}
                  className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ✅ Left Section */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[85vh]">
                {/* Title */}
                <div>
                  <h1 className="text-xl font-semibold">
                    Upload Project – Step 1: Basic Details
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">Saved as private</p>
                </div>

                {/* ✅ Dotted Line Progress Bar */}
                <div className="relative flex items-center justify-between w-full mt-6 mb-10 px-8">
                  <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-600 -translate-y-1/2 z-0" />
                  {steps.map((step) => {
                    const isCompleted = step.id < currentStep;
                    const isActive = step.id === currentStep;
                    return (
                      <div
                        key={step.id}
                        onClick={() => handleStepClick(step.id)}
                        className={`relative z-10 flex flex-col items-center cursor-pointer transition hover:scale-105 ${
                          step.id > currentStep ? "opacity-60" : ""
                        }`}
                      >
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                            isCompleted
                              ? "bg-white border-white text-black"
                              : isActive
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-black border-gray-400"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle size={18} className="text-black" />
                          ) : (
                            <div
                              className={`w-3 h-3 rounded-full ${
                                isActive ? "bg-white" : "bg-gray-400"
                              }`}
                            />
                          )}
                        </div>
                        <span className="text-xs text-gray-300 mt-2">
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* ✅ Step 1 Content — Basic Details */}
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Title (required)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project title"
                      className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md p-2 text-sm mt-1"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-sm text-gray-300">Description</label>
                    <textarea
                      placeholder="Provide a brief description of your project"
                      className="w-full h-24 bg-[#0f0f0f] border border-gray-700 rounded-md p-2 text-sm resize-none mt-1"
                    />
                  </div>

                  {/* ✅ Upload Type Dropdown (moved below Description) */}
                  <div>
                    <label className="text-sm text-gray-300">
                      What’s being uploaded?
                    </label>
                    <select
                      value={uploadType}
                      onChange={(e) => setUploadType(e.target.value)}
                      className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md p-2 text-sm mt-1"
                    >
                      <option>Select type</option>
                      <option>Movie</option>
                      <option>Show</option>
                      <option>Podcast</option>
                      <option>Music Video</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-sm text-gray-300">Category</label>
                    <select className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md p-2 text-sm mt-1">
                      <option>Select a category</option>
                      <option>Action</option>
                      <option>Drama</option>
                      <option>Documentary</option>
                      <option>Comedy</option>
                      <option>Music</option>
                    </select>
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="text-sm text-gray-300">
                      Keywords (for search)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. drama, sci-fi, thriller"
                      className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md p-2 text-sm mt-1"
                    />
                  </div>

                  {/* Captions */}
                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-sm font-semibold mb-2">Captions</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="captions" />
                        <span>Upload your own</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="captions" />
                        <span>
                          Pay for it to be done by a contractor (coming soon)
                        </span>
                      </label>
                    </div>

                    <div className="mt-3">
                      <label className="text-sm text-gray-300">
                        Upload additional languages (optional)
                      </label>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="border border-gray-700 bg-[#0f0f0f] rounded-md w-36 h-20 flex flex-col items-center justify-center text-sm cursor-pointer hover:border-blue-600 transition">
                          <Upload size={20} />
                          Upload File
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Audience */}
                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-sm font-semibold mb-2">Audience</h3>
                    <p className="text-xs text-gray-400 mb-3">
                      Set whether your video is made for kids.
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="kids" className="accent-blue-600" />
                        <span>Yes, it’s “Made for Kids”</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="kids"
                          checked
                          readOnly
                          className="accent-blue-600"
                        />
                        <span>No, it’s not “Made for Kids”</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Right Section */}
              <div className="w-full md:w-80 bg-[#1f1f1f] border-l border-gray-800 p-4 flex flex-col items-center justify-start">
                <div className="w-56 h-32 bg-[#0f0f0f] rounded-md overflow-hidden">
                  <img
                    src="https://i.ytimg.com/vi_webp/5qap5aO4i9A/mqdefault.webp"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-xs text-gray-400 mt-2">0:00 / 0:25</p>

                <div className="text-sm mt-3 w-full">
                  <p className="text-gray-300 truncate">Video link</p>
                  <a href="#" className="text-blue-500 text-xs break-all">
                    https://youtu.be/C6yMDE6gxzU
                  </a>
                  <p className="text-gray-400 text-xs mt-2">Filename</p>
                  <p className="text-xs text-gray-300 truncate">
                    My Store · Themes · Shopify - Google Chrome.mp4
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ✅ Bottom Bar */}
            <motion.div
              className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-gray-800 flex items-center justify-between px-6 py-3"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-green-500" />
                All fields auto-saved.
              </div>
              <button
                onClick={() => handleStepClick(currentStep + 1)}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm font-medium"
              >
                Next
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
