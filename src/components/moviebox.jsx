import React, { useState, useRef } from "react";
import {
  FaPlus,
  FaThumbsUp,
  FaVolumeUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const movies = [
  {
    title: "Avengers : Endgame",
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    image: "/images/Container.png",
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

  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const animationDuration = 500;
  const totalSlides = movies.length;

  const goToIndex = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToIndex(prevIndex);
  };

  const handleNext = () => {
    if (isAnimating) return;
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    goToIndex(nextIndex);
  };

  const handleDragStart = (e) => {
    if (isAnimating) return;
    isDragging.current = true;
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dragEndX =
      e.type === "touchend" && e.changedTouches
        ? e.changedTouches[0].clientX
        : e.clientX;
    const diff = dragStartX.current - dragEndX;

    const swipeThreshold = 50;
    if (diff > swipeThreshold) {
      handleNext();
    } else if (diff < -swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="bg-black text-white p-6 md:p-10 select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Top Rated</h2>
        <div className="bg-gray-900 rounded-full px-3 py-1 flex items-center space-x-3">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className={`rounded-full p-2 md:p-3 text-sm md:text-base transition-transform duration-300 ${
              isAnimating
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gray-800 hover:bg-gray-700 text-white active:scale-90"
            }`}
            aria-label="Previous Movie"
          >
            <FaChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex space-x-1 items-center">
            {movies.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-red-600 scale-125"
                    : "bg-gray-600 scale-100"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className={`rounded-full p-2 md:p-3 text-sm md:text-base transition-transform duration-300 ${
              isAnimating
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gray-800 hover:bg-gray-700 text-white active:scale-90"
            }`}
            aria-label="Next Movie"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Movie Slide */}
      <div
        className="relative w-full max-w-full h-[750px] mx-auto rounded-lg overflow-hidden bg-black"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {/* Background Image */}
        <img
          key={movies[currentIndex].image}
          src={movies[currentIndex].image}
          alt={movies[currentIndex].title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isAnimating ? "opacity-60 scale-105" : "opacity-90 scale-100"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Slide Content */}
        <div
          className={`relative z-10 flex flex-col justify-end items-center h-full text-center px-6 sm:px-8 md:px-12 pb-12 md:pb-20 transition-opacity duration-500 ease-in-out ${
            isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 transition-all duration-500 ease-in-out">
            {movies[currentIndex].title}
          </h2>
          <p className="text-xs md:text-sm max-w-xl opacity-70 mb-6 transition-all duration-500 ease-in-out">
            {movies[currentIndex].description}
          </p>

          {/* Buttons */}
          <div className="flex space-x-3 items-center">
            <button className="bg-red-600 px-4 py-2 rounded flex items-center hover:bg-red-700 active:scale-95 transition-all duration-300">
              <svg className="w-4 h-4 mr-2 fill-white" viewBox="0 0 20 20">
                <path d="M4 3h1v14H4V3zm11 7l-6 4V6l6 4z" />
              </svg>
              Play Now
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 active:scale-90 transition-all duration-300">
              <FaPlus />
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 active:scale-90 transition-all duration-300">
              <FaThumbsUp />
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 active:scale-90 transition-all duration-300">
              <FaVolumeUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
