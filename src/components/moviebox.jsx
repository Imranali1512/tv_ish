import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaThumbsUp,
  FaVolumeUp,
} from "react-icons/fa";

const MovieBox = () => {
  return (
    <div className="bg-black text-white py-0 px-0 ">
      {/* Heading (same as Popular Movies) */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6"></h2>

      {/* Main Box - Full width and height 750px */}
      <div className="relative w-full max-w-full h-[750px] mx-auto rounded-lg overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="/images/Container.png"
          alt="Avengers : Endgame"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end items-center h-full text-center text-white px-6 sm:px-8 md:px-12 pb-12 md:pb-20 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 max-w-full">
            Avengers : Endgame
          </h2>
          <p className="text-xs md:text-sm max-w-xl opacity-70 mb-6">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no
            matter who they face... Avenge the fallen.
          </p>

          {/* Buttons */}
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

        {/* Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300 text-white">
          <FaArrowLeft />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300 text-white">
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-1 rounded bg-red-600"></div>
          <div className="w-2 h-1 rounded bg-gray-600"></div>
          <div className="w-2 h-1 rounded bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
