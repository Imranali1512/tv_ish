import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function F1() {
  // --- Image Array (apni images yahan daal do) ---
  const images = [
    "/images/image 1.png",
    "/images/Rectangle 41.png",
    "/images/Rectangle 42.png",
    "/images/Rectangle 43.png",
    "/images/Rectangle 44.png",
    "/images/Rectangle 45.png",
    "/images/Rectangle 46.png",
    "/images/Rectangle 47.png",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center text-white w-full">
      {/* Product Section */}
      <div className="flex flex-col items-center text-center">
        {/* Bottle Image */}
        <motion.img
          src={images[current]} // <-- Yeh image change hogi arrows se
          alt="Cell Pwr Bottle"
          className="w-[280px] md:w-[340px] drop-shadow-[0_0_20px_rgba(0,255,255,0.4)] rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Info */}
        <h2 className="text-[#00eaff] mt-4 text-sm tracking-widest">IGNITE THE MYTE</h2>
        <h1 className="text-3xl font-bold mt-2 tracking-tight">CELL PWR SPORT</h1>
        <p className="text-gray-300 text-sm mt-1">HIGH-ENERGY PEPTIDES</p>
        <p className="text-gray-400 text-xs mb-4">FROM RICE</p>
        <p className="text-gray-500 text-xs">DIETARY SUPPLEMENT | 150 CAPSULES</p>

        {/* Slider Images Section */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
          >
            ◀
          </button>

          {/* Thumbnails */}
          <div className="flex space-x-1">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`w-10 h-10 rounded-md object-cover cursor-pointer transition ${
                  i === current
                    ? "ring-2 ring-[#00eaff]"
                    : "opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
          >
            ▶
          </button>
        </div>

        {/* Nutrition Label Button */}
        <button className="bg-[#f0e2d0] text-black mt-6 px-8 py-3 rounded-md font-semibold hover:bg-[#e8d9c5] transition-all duration-200 flex items-center gap-2">
          View Nutrition Label
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Guarantee Section */}
      <div className="text-center mt-10 max-w-md">
        <div className="flex justify-center mb-3">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-orange-500 flex items-center justify-center text-sm font-bold">
              100%
            </div>
            <span className="absolute text-xs text-orange-400 mt-16">
              SATISFACTION GUARANTEE
            </span>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          Try <span className="text-[#00eaff] font-semibold">Cell Pwr</span> risk-free for 90 days.<br />
          If you're not satisfied, we will refund you,<br />
          no questions asked. Reclaim your masculinity, risk-free.
        </p>
      </div>
    </div>
  );
}
