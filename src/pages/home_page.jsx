import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MoviesGrid from "../components/MoviesGrid";
import MovieBox from "../components/moviebox";
import FAQ from "../components/FAQ";  // Import FAQ component
import Container from "../components/banner"; // Import Container for Banner

const HomePage = () => {
  const backgroundImages = [
    "homepic1.png", "homepic2.png", "homepic3.png", "homepic4.png", "homepic5.png",
    "homepic6.png", "homepic7.png", "homepic8.png", "homepic9.png", "homepic10.png",
    "homepic11.png", "homepic12.png", "homepic13.png", "homepic14.png", "homepic15.png",
    "homepic16.png", "homepic17.png", "homepic18.png", "homepic19.png", "homepic20.png",
    "homepic21.png", "homepic22.png", "homepic23.png", "homepic24.png", "homepic25.png",
    "homepic26.png", "homepic27.png", "homepic28.png", "homepic29.png", "homepic30.png",
    "homepic31.png", "homepic32.png", "homepic33.png", "homepic34.png", "homepic35.png",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedImages = isMobile ? backgroundImages.slice(0, 12) : backgroundImages;

  const popularMovies = [
    { title: "Captain Marvel", image: "/images/captonmarval.png" },
    { title: "Captain America", image: "/images/captain america.png" },
    { title: "Jai Ho Rambo", image: "/images/rambo.png" },
    { title: "Gold", image: "/images/gold.png" },
    { title: "Avengers: Ultron", image: "/images/captain america.png" },
    { title: "Black Panther", image: "/images/12.jpg" },
    { title: "Spider-Man", image: "/images/13.jpg" },
  ];

  const continueWatchingList = [
    { title: "Black Panther", image: "/images/12.jpg", progress: 0.7 },
    { title: "Archer", image: "/images/gold.png", progress: 0.3 },
    { title: "Central Intelligence", image: "/images/homepic8.png", progress: 0.5 },
    { title: "Joker", image: "/images/13.jpg", progress: 0.9 },
    { title: "Scream", image: "/images/captonmarval.png", progress: 0.25 },
    { title: "Iron Man", image: "/images/homepic11.png", progress: 0.6 },
    { title: "Batman", image: "/images/homepic20.png", progress: 0.2 },
    { title: "Deadpool", image: "/images/rambo.png", progress: 0.8 },
  ];

  const popularShows = [
    { title: "Stranger Things", image: "/images/13.jpg" },
    { title: "The Witcher", image: "/images/login_img13.png" },
    { title: "Loki", image: "/images/login_img15.png" },
    { title: "Money Heist", image: "/images/12.jpg" },
    { title: "Breaking Bad", image: "/images/login_img4.png" },
    { title: "Narcos", image: "/images/homepic9.png" },
    { title: "Narcos", image: "/images/homepic5.png" },
  ];

  const getInOnTheAction = [
    { title: "Stranger Things", image: "/images/13.jpg" },
    { title: "The Witcher", image: "/images/login_img13.png" },
    { title: "Loki", image: "/images/login_img15.png" },
    { title: "Money Heist", image: "/images/12.jpg" },
    { title: "Breaking Bad", image: "/images/login_img4.png" },
    { title: "Narcos", image: "/images/homepic9.png" },
    { title: "Narcos", image: "/images/homepic5.png" },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative select-none">

      {/* Background Image Grid */}
      <div
        className={`grid gap-0 px-1 pt-2 ${
          isMobile
            ? "grid-cols-4 grid-rows-3"
            : "grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
        }`}
      >
        {displayedImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-[18px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.3, scale: 1, transition: { duration: 1 } }}
            whileHover={{ scale: 1.05, opacity: 0.5, transition: { duration: 0.3 } }}
          >
            <img
              src={`/images/${img}`}
              alt={`Background ${idx + 1}`}
              className="w-full h-[200px] object-cover rounded-[18px]"
              onError={(e) => (e.target.style.display = "none")}
            />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative px-4 sm:px-10 md:px-16 max-w-6xl mx-auto text-center z-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">
          The Best Streaming Experience
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          Enjoy seamless streaming with movies, shows, exclusive podcasts,
          music, and original content – anytime, anywhere.
        </p>

        <button className="bg-red-600 px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-red-700 transition font-semibold">
          ▶️ Start Watching Now
        </button>
      </motion.div>

      {/* Popular Movies */}
      <MoviesGrid title="Popular Movies" movies={popularMovies} />

      {/* Movie Banner Section */}
      <div className="mt-16 px-0 md:px-10 max-w-15xl mx-auto">
        <MovieBox />
      </div>

      {/* Continue Watching Section */}
      <MoviesGrid title="Continue Watching" movies={continueWatchingList} showProgress />

      {/* Popular Shows Section */}
      <MoviesGrid title="Popular Shows" movies={popularShows} />

      {/* Get In on the Action Section */}
      <MoviesGrid title="Get In on the Action" movies={getInOnTheAction} />

      {/* FAQ Section */}
      <div className="mt-20 px-4 md:px-10 max-w-6xl mx-auto">
        <FAQ />
      </div>

      {/* Banner Section */}
      <div className="mt-20 px-4 md:px-10 max-w-6xl mx-auto">
        <Container /> {/* Corrected here: use Container component */}
      </div>

    </div>
  );
};

export default HomePage;
