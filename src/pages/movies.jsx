import React from "react";
import MovieBox from "../components/moviebox";
import MoviesGrid from "../components/MoviesGrid";

// Featured Movies
const Movies = [
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

// Popular Movies
const popularMovies = [
  { title: "Captain Marvel", image: "/images/captonmarval.png" },
  { title: "Captain America", image: "/images/captain america.png" },
  { title: "Jai Ho Rambo", image: "/images/rambo.png" },
  { title: "Gold", image: "/images/gold.png" },
  { title: "Avengers: Ultron", image: "/images/captain america.png" },
  { title: "Black Panther", image: "/images/12.jpg" },
  { title: "Spider-Man", image: "/images/13.jpg" },
];

// Trending Movies
const Toptrending = [
  {
    title: "Morbius",
    image: "/images/Image (42).png",
    duration: "1h 30min",
    views: "2K",
  },
  {
    title: "Kisi Ka Bhai Kisi Ki Jaan",
    image: "/images/Image (43).png",
    duration: "1h 57min",
    views: "1.5K",
  },
  {
    title: "Suraj Pe Mangal Bhari",
    image: "/images/Image (44).png",
    duration: "2h 10min",
    views: "1.8K",
  },
  {
    title: "Pathaan",
    image: "/images/Image (45).png",
    duration: "2h 20min",
    views: "3K",
  },
  {
    title: "Ant-Man",
    image: "/images/Image (46).png",
    duration: "1h 42min",
    views: "5K",
  },
  {
    title: "Iron Man",
    image: "/images/ironman.jpg",
    duration: "2h 6min",
    views: "4.2K",
  },
  {
    title: "The Dark Knight",
    image: "/images/darkknight.jpg",
    duration: "2h 32min",
    views: "6K",
  },
];


// New Releases (with progress + releaseDate)
const newReleases = [
  {
    title: "Capton Marvel",
    image: "/images/captonmarval.png", // Update to your actual image path
    releaseDate: "14 April 2026",
    duration: "",
    views: "",
    progress: 0.5,
  },
  {
    title: "Pathan",
    image: "/images//Image (45).png", // example movie
    releaseDate: "01 Sept 2025",
    duration: "",
    views: "",
    progress: 0.3,
  },

];

const topRatedMovies = [
  {
    title: "Kantara",
    image: "/images/kantara.jpg",
    duration: "1h 57min",
    views: "20K",
    rating: 5,
  },
  {
    title: "Pushpa 2",
    image: "/images/pushpa2.jpg",
    duration: "1h 30min",
    views: "20K",
    rating: 4,
  },
  {
    title: "Blade Runner",
    image: "/images/blade.jpg",
    duration: "1h 42min",
    views: "20K",
    rating: 4,
  },
  {
    title: "Adipurush",
    image: "/images/adipurush.jpg",
    duration: "2h 10min",
    views: "20K",
    rating: 3,
  },
];



const MoviesPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <section className="px-4 md:px-10">
        <MovieBox
          movies={Movies}
          heading=""
          showArrows={false}
          showViewAllButton={false}
        />
      </section>

      <MoviesGrid
        title="Our Choice"
        movies={popularMovies}
        showViewAllButton={false}
      />

      <MoviesGrid
        title="Trending Now"
        movies={Toptrending}
        showProgress={false}
        showViewAllButton={false}
      />

      <MoviesGrid
        title="New Releases"
        movies={newReleases}
        showProgress={false}
        showViewAllButton={false} // 👈 View All button hidden here
      />

      <MoviesGrid 
      title="Most - Watch Movies" 
      movies={topRatedMovies} 
      showViewAllButton={false} />


    </div>
  );
};

export default MoviesPage;
