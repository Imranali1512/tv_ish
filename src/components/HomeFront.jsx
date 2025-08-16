import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  "homepic1.png", "homepic2.png", "homepic3.png", "homepic4.png", "homepic5.png",
  "homepic6.png", "homepic7.png", "homepic8.png", "homepic9.png", "homepic10.png",
  "homepic11.png", "homepic12.png", "homepic13.png", "homepic14.png", "homepic15.png",
  "homepic16.png", "homepic17.png", "homepic18.png", "homepic19.png", "homepic20.png",
  "homepic21.png", "homepic22.png", "homepic23.png", "homepic24.png", "homepic25.png",
  "homepic26.png", "homepic27.png", "homepic28.png", "homepic29.png", "homepic30.png",
  "homepic31.png", "homepic32.png", "homepic33.png", "homepic34.png", "homepic35.png",
];

const HomeFront = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedImages = isMobile || isTablet
    ? backgroundImages.slice(0, 12)
    : backgroundImages;

  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      {/* Image Grid Background */}
      <div
        className={`absolute inset-0 grid gap-[2px] px-1 pt-2 z-0 ${
          isMobile
            ? "grid-cols-4 grid-rows-3"
            : "grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
        }`}
      >
        {displayedImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25, transition: { duration: 1 } }} // lighter fade
          >
            <img
              src={`/images/${img}`}
              alt={`Background ${idx + 1}`}
              className="w-full h-full object-cover rounded-md"
              onError={(e) => (e.target.style.display = "none")}
            />
          </motion.div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent px-6 pt-28 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          The Ultimate Entertainment Hub
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Enjoy a seamless streaming experience with movies, episodes, exclusive podcasts, music,
          and original content from your favorite creators – all on demand, anytime, anywhere.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300">
          ▶ Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default HomeFront;
