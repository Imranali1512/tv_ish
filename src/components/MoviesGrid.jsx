import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";

const MoviesGrid = ({
  title = "Popular Movies",
  movies = [],
  showProgress = false,
  showViewAllButton = true, // controlled by parent
}) => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  const moviesPerSlide = 5;
  const totalDots = Math.ceil(movies.length / moviesPerSlide);
  const scrollAmount = 300;

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollBy = direction === "left" ? -scrollAmount : scrollAmount;
    scrollRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });

    setActiveDot((prev) => {
      if (direction === "left") return prev > 0 ? prev - 1 : 0;
      else return prev < totalDots - 1 ? prev + 1 : totalDots - 1;
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newDot = Math.round(scrollLeft / scrollAmount);
    setActiveDot(newDot);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type === "touchstart" ? e.touches[0].pageX : e.pageX;
    scrollStartX.current = scrollRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === "touchmove" ? e.touches[0].pageX : e.pageX;
    const deltaX = dragStartX.current - currentX;
    scrollRef.current.scrollLeft = scrollStartX.current + deltaX;
  };

  const handleDragEnd = () => setIsDragging(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating || 0);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-sm ${i < fullStars ? "text-red-600" : "text-gray-500"}`}>
          {i < fullStars ? "★" : "☆"}
        </span>
      );
    }

    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <div className="bg-black text-white p-6 md:p-10 select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="bg-gray-900 rounded-full px-3 py-1 flex items-center space-x-3">
          <button
            onClick={() => scroll("left")}
            disabled={activeDot === 0}
            className={`rounded-full p-2 md:p-3 transition duration-300 ${
              activeDot === 0
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gray-800 hover:bg-gray-700 text-white cursor-pointer active:scale-90"
            }`}
            aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalDots }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeDot ? "bg-red-600 scale-125" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={activeDot === totalDots - 1}
            className={`rounded-full p-2 md:p-3 transition duration-300 ${
              activeDot === totalDots - 1
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gray-800 hover:bg-gray-700 text-white cursor-pointer active:scale-90"
            }`}
            aria-label="Scroll Right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="pl-4">
        <div
          ref={scrollRef}
          className={`flex space-x-4 overflow-x-auto scrollbar-hide cursor-${
            isDragging ? "grabbing" : "grab"
          }`}
          onScroll={handleScroll}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 md:w-48 lg:w-52 bg-[#0f172a] rounded-lg overflow-hidden hover:scale-105 hover:-translate-y-1 transform transition duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />

              {showProgress && movie.progress !== undefined && (
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700">
                  <div
                    className="h-full bg-red-600 transition-all"
                    style={{ width: `${movie.progress * 100}%` }}
                  />
                </div>
              )}

              <div className="p-3">
                <h3 className="text-white text-sm font-semibold mb-2">{movie.title}</h3>

                {movie.releaseDate && (
                  <div className="text-xs text-gray-300 bg-[#1E293B] rounded-full px-3 py-1 inline-block mb-2">
                    Released at {movie.releaseDate}
                  </div>
                )}

                {(movie.duration || movie.rating || movie.views) && (
                  <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                    {movie.duration && (
                      <div className="flex items-center gap-1 bg-[#1E293B] rounded-full px-2 py-1">
                        <PiClockFill size={14} />
                        <span>{movie.duration}</span>
                      </div>
                    )}

                    {movie.rating && (
                      <div className="flex items-center bg-[#1E293B] rounded-full px-2 py-1">
                        {renderStars(movie.rating)}
                      </div>
                    )}

                    {movie.views && (
                      <div className="flex items-center gap-1 bg-[#1E293B] rounded-full px-2 py-1">
                        <FaEye size={14} />
                        <span>{movie.views}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      {showViewAllButton && (
        <div className="mt-6 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded inline-flex items-center transition focus:ring-2 focus:ring-red-400 focus:ring-offset-2 active:scale-95">
            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 20 20">
              <path d="M4 3h1v14H4V3zm11 7l-6 4V6l6 4z" />
            </svg>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;
