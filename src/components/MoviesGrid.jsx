import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoviesGrid = ({ title = "Popular Movies", movies = [], showProgress = false }) => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const moviesPerSlide = 5;
  const totalDots = Math.ceil(movies.length / moviesPerSlide);
  const scrollAmount = 300;

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setActiveDot((prev) => (prev === 0 ? 0 : prev - 1));
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setActiveDot((prev) => (prev === totalDots - 1 ? totalDots - 1 : prev + 1));
    }
  };

  return (
    <div className="bg-black text-white p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>

        {/* Arrows + Dots */}
        <div className="bg-gray-900 rounded-full px-3 py-1 flex items-center space-x-3">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-800 rounded-full hover:bg-gray-700 p-1 md:p-2 text-sm md:text-base"
          >
            <FaChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex space-x-1 items-center">
            {Array.from({ length: totalDots }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeDot ? "bg-red-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="bg-gray-800 rounded-full hover:bg-gray-700 p-1 md:p-2 text-sm md:text-base"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Movie Cards */}
      <div className="pl-4">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-hidden select-none"
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 w-48 md:w-52 lg:w-56 relative">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg object-cover w-full h-72"
                />

                {/* Progress Bar Overlay (bottom of image) */}
                {showProgress && movie.progress !== undefined && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 rounded-b-lg overflow-hidden">
                    <div
                      className="h-full bg-red-600"
                      style={{ width: `${movie.progress * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 20 20">
            <path d="M4 3h1v14H4V3zm11 7l-6 4V6l6 4z" />
          </svg>
          View All
        </button>
      </div>
    </div>
  );
};

export default MoviesGrid;
