import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ShieldCheck, FileText, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UploadVideos5() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [visibility, setVisibility] = useState("private");
  const [rating, setRating] = useState("");
  const [legalChecks, setLegalChecks] = useState({
    ownership: false,
    noCopyright: false,
    consent: false,
  });
  const [scheduled, setScheduled] = useState(false);
  const [publishConfirm, setPublishConfirm] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => navigate(-1), 250);
  };

  // ✅ Determine current step
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
    { id: 3, label: "Checks" },
    { id: 4, label: "Visibility" },
  ];

  const handlePublish = () => {
    if (!rating || !legalChecks.ownership || !legalChecks.noCopyright) {
      alert("⚠️ Please complete ratings and legal confirmations before publishing.");
      return;
    }
    setPublishConfirm(true);
    setTimeout(() => {
      alert("✅ Your video has been published successfully!");
      navigate("/");
    }, 1200);
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
              <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[85vh]">
                {/* Header */}
                <div>
                  <h1 className="text-xl font-semibold">
                    Final Listing · Publish Your Video
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    Review details before publishing
                  </p>
                </div>

                {/* ✅ Step Progress Bar */}
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

                {/* ✅ Final Listing Sections */}
                <div className="space-y-8 pt-2">
                  {/* Save or Publish */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-3">
                      Visibility Options
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="visibility"
                          checked={visibility === "private"}
                          onChange={() => setVisibility("private")}
                          className="accent-blue-600"
                        />
                        <span>Private — Only you and chosen people can view</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="visibility"
                          checked={visibility === "unlisted"}
                          onChange={() => setVisibility("unlisted")}
                          className="accent-blue-600"
                        />
                        <span>Unlisted — Anyone with the link can watch</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="visibility"
                          checked={visibility === "public"}
                          onChange={() => setVisibility("public")}
                          className="accent-blue-600"
                        />
                        <span>Public — Everyone can watch</span>
                      </label>
                    </div>
                  </div>

                  {/* Ratings Section */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                    <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                      <Star size={16} className="text-yellow-400" />
                      Audience Rating
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">
                      Select the appropriate age group for your content.
                    </p>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="bg-[#202020] border border-gray-700 text-sm px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Rating</option>
                      <option value="G">G — Suitable for all ages</option>
                      <option value="PG">PG — Parental Guidance suggested</option>
                      <option value="PG-13">PG-13 — Some material may be inappropriate for children</option>
                      <option value="R">R — Restricted (18+)</option>
                      <option value="NC-17">NC-17 — Adults only</option>
                    </select>
                  </div>

                  {/* Legal & Rights Confirmation */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                    <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                      <ShieldCheck size={16} className="text-green-500" />
                      Legal & Rights
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">
                      Please confirm the following before publishing:
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={legalChecks.ownership}
                          onChange={(e) =>
                            setLegalChecks({
                              ...legalChecks,
                              ownership: e.target.checked,
                            })
                          }
                          className="accent-green-500"
                        />
                        <span className="text-sm">
                          I own or have rights to all video content.
                        </span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={legalChecks.noCopyright}
                          onChange={(e) =>
                            setLegalChecks({
                              ...legalChecks,
                              noCopyright: e.target.checked,
                            })
                          }
                          className="accent-green-500"
                        />
                        <span className="text-sm">
                          This video doesn’t contain copyrighted material.
                        </span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={legalChecks.consent}
                          onChange={(e) =>
                            setLegalChecks({
                              ...legalChecks,
                              consent: e.target.checked,
                            })
                          }
                          className="accent-green-500"
                        />
                        <span className="text-sm">
                          I have consent from all participants appearing in the
                          video.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Legal Docs */}
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                    <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                      <FileText size={16} className="text-blue-400" />
                      Upload Legal Documents (Optional)
                    </h3>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="block w-full text-sm text-gray-300 bg-[#202020] border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
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
                All checks passed. Ready to publish.
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleStepClick(currentStep - 1)}
                  className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded text-sm font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handlePublish}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm font-medium"
                >
                  {publishConfirm ? "Publishing..." : "Publish Now"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
