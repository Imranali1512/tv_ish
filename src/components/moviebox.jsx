import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaThumbsUp,
  FaVolumeUp,
} from "react-icons/fa";

// Movie Data
const movies = [
  {
    title: "Avengers : Endgame",
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    image: "/images/Container.png", // make sure this file exists in public/images
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    image: "/images/14.jpg",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "/images/15.jpg",
  },
];

const MovieBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? movies.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300); // delay index update to allow fade
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-black text-white py-0 px-0 select-none">
      <div className="relative w-full max-w-full h-[750px] mx-auto rounded-lg overflow-hidden bg-black">
        {/* Background Image */}
        <img
          key={movies[currentIndex].image}
          src={movies[currentIndex].image}
          alt={movies[currentIndex].title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isAnimating ? "opacity-60" : "opacity-90"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-end items-center h-full text-center text-white px-6 sm:px-8 md:px-12 pb-12 md:pb-20 transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0.6 : 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            {movies[currentIndex].title}
          </h2>
          <p className="text-xs md:text-sm max-w-xl opacity-70 mb-6">
            {movies[currentIndex].description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-3 items-center">
            <button className="bg-red-600 px-4 py-2 rounded flex items-center hover:bg-red-700 transition duration-300">
              <svg className="w-4 h-4 mr-2 fill-white" viewBox="0 0 20 20">
                <path d="M4 3h1v14H4V3zm11 7l-6 4V6l6 4z" />
              </svg>
              Play Now
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition duration-300">
              <FaPlus />
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition duration-300">
              <FaThumbsUp />
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition duration-300">
              <FaVolumeUp />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300 text-white active:scale-90 focus:outline-none"
          aria-label="Previous Movie"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300 text-white active:scale-90 focus:outline-none"
          aria-label="Next Movie"
        >
          <FaArrowRight size={20} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {movies.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-1 rounded ${
                idx === currentIndex ? "bg-red-600" : "bg-gray-600"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
