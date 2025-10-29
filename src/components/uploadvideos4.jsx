import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Upload, Image, FileVideo, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UploadVideos4() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // upload states
  const [trailer, setTrailer] = useState(null);
  const [captions, setCaptions] = useState(null);
  const [artwork, setArtwork] = useState(null);

  useEffect(() => setOpen(true), []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => navigate(-1), 250);
  };

  // progress steps logic
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
    { id: 2, label: "Video elements" },
    { id: 3, label: "Media upload" },
    { id: 4, label: "Visibility" },
  ];

  // File upload handlers
  const handleFileUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

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
              <div className="flex-1 p-8 space-y-6 overflow-y-auto max-h-[85vh]">
                <div>
                  <h1 className="text-xl font-semibold">
                    Media Upload — Trailer, Captions & Artwork
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    Upload additional media to enhance your video presentation.
                  </p>
                </div>

                {/* ✅ Progress Steps */}
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

                {/* ✅ MEDIA UPLOAD SECTION */}
                <div className="space-y-8">
                  {/* Trailer Upload */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-5 hover:border-gray-500 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <FileVideo size={20} className="text-blue-400" />
                      <h3 className="text-md font-medium">Upload Trailer</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">
                      Add a short trailer to give viewers a sneak peek.
                    </p>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg py-8 cursor-pointer hover:border-blue-500 transition">
                      <Upload size={30} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-300">
                        {trailer ? trailer.name : "Click to upload trailer"}
                      </span>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e, setTrailer)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Captions Upload */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-5 hover:border-gray-500 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText size={20} className="text-yellow-400" />
                      <h3 className="text-md font-medium">Upload Captions</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">
                      Upload captions or subtitles to make your content accessible.
                    </p>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg py-8 cursor-pointer hover:border-blue-500 transition">
                      <Upload size={30} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-300">
                        {captions ? captions.name : "Click to upload .srt or .vtt file"}
                      </span>
                      <input
                        type="file"
                        accept=".srt,.vtt"
                        onChange={(e) => handleFileUpload(e, setCaptions)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Artwork Upload */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-5 hover:border-gray-500 transition">
                    <div className="flex items-center gap-3 mb-3">
                      <Image size={20} className="text-pink-400" />
                      <h3 className="text-md font-medium">Upload Artwork</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">
                      Add custom artwork or a poster image to represent your video.
                    </p>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg py-8 cursor-pointer hover:border-blue-500 transition relative">
                      {artwork ? (
                        <img
                          src={URL.createObjectURL(artwork)}
                          alt="Artwork preview"
                          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                        />
                      ) : (
                        <>
                          <Upload size={30} className="text-gray-400 mb-2" />
                          <span className="text-sm text-gray-300">
                            Click to upload image (JPG, PNG)
                          </span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, setArtwork)}
                        className="hidden"
                      />
                    </label>
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

            {/* ✅ Bottom Navigation */}
            <motion.div
              className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-gray-800 flex items-center justify-between px-6 py-3"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-green-500" />
                {trailer && captions && artwork
                  ? "All media uploaded successfully."
                  : "Waiting for uploads..."}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleStepClick(currentStep - 1)}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded text-sm font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => handleStepClick(currentStep + 1)}
                  disabled={!trailer || !captions || !artwork}
                  className={`px-6 py-2 rounded text-sm font-medium ${
                    trailer && captions && artwork
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-700 cursor-not-allowed text-gray-400"
                  }`}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
