import React, { useState, useEffect, useRef } from 'react';

const LeftArrow = ({ disabled }) => (
  <svg
    className={`w-10 h-10 text-red-600 hover:text-red-400 transition-colors ${
      disabled ? 'opacity-40 cursor-not-allowed hover:text-red-600' : 'cursor-pointer'
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const RightArrow = ({ disabled }) => (
  <svg
    className={`w-10 h-10 text-red-600 hover:text-red-400 transition-colors ${
      disabled ? 'opacity-40 cursor-not-allowed hover:text-red-600' : 'cursor-pointer'
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TopPodcaster = ({ podcasters, title, description }) => {
  const [followStates, setFollowStates] = useState(
    podcasters.reduce((acc, pod) => {
      acc[pod.id] = pod.followed;
      return acc;
    }, {})
  );

  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cardRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }

      setCurrentIndex(0);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 16); // gap-4 = 16px
    }
  }, [cardsToShow, podcasters]);

  const maxIndex = Math.max(podcasters.length - cardsToShow, 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const toggleFollow = (id) => {
    setFollowStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0 && currentIndex < maxIndex) {
        handleNext(); // Swipe Left
      } else if (delta < 0 && currentIndex > 0) {
        handlePrev(); // Swipe Right
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="bg-gray-900 w-full max-w-7xl rounded-lg shadow-xl flex flex-col lg:flex-row gap-10 p-6 lg:p-10 relative opacity-0 animate-fadeIn">
        
        {/* Podcaster Cards */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {podcasters.map(({ id, name, category, podcasts, followers, image }, index) => {
              const followed = followStates[id];
              return (
                <div
                  key={id}
                  ref={index === 0 ? cardRef : null}
                  className="bg-gray-700 flex-shrink-0 w-[90%] sm:w-[45%] lg:w-56 flex flex-col items-center p-5 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-48 h-48 object-cover mb-4 rounded-md bg-white"
                  />
                  <div className="w-full text-left">
                    <h3 className="text-gray-900 text-sm font-semibold bg-gray-300 px-1 py-0.5 rounded">
                      {name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {category} <span className="mx-1">•</span> {podcasts} Podcast
                    </p>
                    <p className="text-xs text-gray-400">{followers} Followers</p>
                  </div>
                  <button
                    onClick={() => toggleFollow(id)}
                    className={`mt-5 w-full py-2 text-xs font-semibold uppercase rounded-md transition-colors duration-500 ${
                      followed
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    {followed ? 'FOLLOWED' : 'FOLLOW'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Info */}
        <div className="text-white flex flex-col justify-between max-w-full lg:max-w-xs">
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>

          {/* Arrows */}
          <div className="mt-6 lg:mt-0 flex gap-6 justify-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full shadow-lg bg-gray-800 hover:bg-red-700 transition-colors animate-bounce-slow"
              aria-label="Previous creators"
            >
              <LeftArrow disabled={currentIndex === 0} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full shadow-lg bg-gray-800 hover:bg-red-700 transition-colors animate-bounce-slow delay-150"
              aria-label="Next creators"
            >
              <RightArrow disabled={currentIndex === maxIndex} />
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.5s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
};

export default TopPodcaster;
