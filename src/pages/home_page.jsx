import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MoviesGrid from "../components/MoviesGrid";
import MovieBox from "../components/moviebox";
import FAQ from "../components/FAQ";
import Container from "../components/banner";
import CategorySlider from "../components/CategorySlider";

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
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // Mobile: less than 640px
      setIsTablet(width >= 640 && width < 1024); // Tablet: 640px to 1023px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedImages = isMobile || isTablet
    ? backgroundImages.slice(0, 12)
    : backgroundImages;

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

  const getInOnTheAction = [...popularShows];

  const popularPodcasts = [
    { title: "The Daily Boost", image: "/images/pod1.png" },
    { title: "TED Talks Daily", image: "/images/pod2.png" },
    { title: "Joe Rogan Experience", image: "/images/pod3.png" },
    { title: "Crime Junkie", image: "/images/pod4.png" },
    { title: "Stuff You Should Know", image: "/images/pod5.png" },
    { title: "SmartLess", image: "/images/pod6.png" },
    { title: "Science Vs", image: "/images/pod7.png" },
  ];

  const categoriesData = [
    {
      name: "Action",
      images: ["/images/rambo.png", "/images/captain america.png", "/images/gold.png", "/images/homepic4.png"]
    },
    {
      name: "Adventure",
      images: ["/images/homepic5.png", "/images/12.jpg", "/images/homepic7.png", "/images/homepic8.png"]
    },
    {
      name: "Comedy",
      images: ["/images/login_img15.png", "/images/login_img13.png", "/images/homepic9.png", "/images/homepic10.png"]
    },
    {
      name: "Drama",
      images: ["/images/homepic11.png", "/images/13.jpg", "/images/homepic12.png", "/images/homepic13.png"]
    },
    {
      name: "Horror",
      images: ["/images/homepic20.png", "/images/homepic21.png", "/images/homepic22.png", "/images/homepic23.png"]
    },
    {
      name: "Sci-Fi",
      images: ["/images/homepic24.png", "/images/homepic25.png", "/images/homepic26.png", "/images/homepic27.png"]
    },
  ];

  const LoveThese = [
    { title: "The Daily Boost", image: "/images/12.jpg" },
    { title: "TED Talks Daily", image: "/images/13.jpg" },
    { title: "Joe Rogan Experience", image: "/images/14.jpg" },
    { title: "Crime Junkie", image: "/images/homepic15.png" },
    { title: "Stuff You Should Know", image: "/images/homepic27.png" },
    { title: "SmartLess", image: "/images/homeoic27.png" },
    { title: "Science Vs", image: "/images/homepic7.png" },
  ];

  const Snips = [
    { title: "The Daily Boost", image: "/images/snip1.png" },
    { title: "TED Talks Daily", image: "/images/snip3.png" },
    { title: "Joe Rogan Experience", image: "/images/snip4.png" },
    { title: "Crime Junkie", image: "/images/snip5.png" },
    { title: "Stuff You Should Know", image: "/images/snip7.png" },
    { title: "SmartLess", image: "/images/snip2.png" },
    { title: "Science Vs", image: "/images/snip6.png" },
  ];

  const music = [
    { title: "The Daily Boost", image: "/images/16.jpg" },
    { title: "TED Talks Daily", image: "/images/17.jpg" },
    { title: "Joe Rogan Experience", image: "/images/18.jpg" },
    { title: "Crime Junkie", image: "/images/19.jpg" },
    { title: "Stuff You Should Know", image: "/images/20.jpg" },
    { title: "SmartLess", image: "/images/21.jpg" },
    { title: "Science Vs", image: "/images/snip6.png" },
  ];

  const featuredMovies = [
    {
      title: "Avengers : Endgame",
      description:
        "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and restore balance to the universe.",
      image: "/images/Container.png",
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into a CEO’s mind.",
      image: "/images/14.jpg",
    },
    {
      title: "Interstellar",
      description:
        "A group of explorers travel through a wormhole in space to ensure humanity's survival.",
      image: "/images/15.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative select-none">
      {/* Background Grid */}
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

      {/* Other Grids */}
      <MoviesGrid title="Popular Movies" movies={popularMovies} />

      {/* Hero Section */}
      <div className="mt-16 px-0 md:px-10 max-w-15xl mx-auto">
        <MovieBox
          heading="Top Rated"
          movies={featuredMovies}
          showArrows={true}
          showTrailerButton={false}
        />
      </div>

      <MoviesGrid title="Continue Watching" movies={continueWatchingList} showProgress />
      <MoviesGrid title="Popular Shows" movies={popularShows} />
      <MoviesGrid title="Get In on the Action" movies={getInOnTheAction} />
      <MoviesGrid
        title="Popular Podcasts"
        movies={popularPodcasts.map((p) => ({ ...p, customClass: "rounded-[15px]" }))}
      />
      <div className="mt-15 px-4 md:px-5 max-w-15xl mx-auto">
        <CategorySlider categories={categoriesData} />
      </div>
      <MoviesGrid
        title="We Think You'll Love These"
        movies={LoveThese.map((m) => ({ ...m, customClass: "rounded-[15px]" }))}
      />
      <MoviesGrid
        title="Popular Snips"
        movies={Snips.map((m) => ({ ...m, customClass: "rounded-[15px]" }))}
      />
      <MoviesGrid
        title="Popular Music"
        movies={music.map((m) => ({ ...m, customClass: "rounded-[15px]" }))}
      />

      <div className="mt-10 px-4 md:px-10 max-w-10xl mx-auto">
        <FAQ />
      </div>
      <div className="mt-10 px-4 md:px-50 max-w-6xl mx-auto pb-10">
        <Container />
      </div>
    </div>
  );
};

export default HomePage;
