import React from "react";
import MovieBox from "../components/moviebox";
import MoviesGrid from "../components/MoviesGrid";
import FAQ from "../components/FAQ";
import Container from "../components/banner";
import CategorySlider from "../components/CategorySlider"; // ✅ Make sure this is imported

// Featured Movies
const Movies = [
  {
    title: "Stranger Think  ",
    description:
      "In a small town, a group of kids discovers a secret world filled with supernatural dangers, testing their courage, friendship, and the bonds that hold them together.",
    image: "/images/show1.png",
  },
  {
    title: "Money Heist",
    description:
      "A group of unlikely heroes comes together to pull off the greatest heist in history, risking everything for freedom and revenge, challenging the system that tried to break them.",
    image: "/images/show2.jpg",
  },
  {
    title: "The Witcher",
    description:
      "In a land torn by war and dark magic, a monster hunter struggles to find his place in a world where the lines between good and evil are blurred.",
    image: "/images/show3.jpg",
  },
];

// Popular Shows
const popularShows = [
  { title: "Captain Marvel", image: "/images/2.png" },
  { title: "Captain America", image: "/images/4.png" },
  { title: "Jai Ho Rambo", image: "/images/6.png" },
  { title: "Gold", image: "/images/7.png" },
  { title: "Avengers: Ultron", image: "/images/9.png" },
  { title: "Black Panther", image: "/images/9-2.jpg" },
  { title: "Spider-Man", image: "/images/9-4.jpg" },
];

// Trending Shows
const Toptrending = [
  {
    title: "Morbius",
    image: "/images/1.png",
    duration: "1h 30min",
    views: "2K",
  },
  {
    title: "Kisi Ka Bhai Kisi Ki Jaan",
    image: "/images/2.png",
    duration: "1h 57min",
    views: "1.5K",
  },
  {
    title: "Suraj Pe Mangal Bhari",
    image: "/images/3.png",
    duration: "2h 10min",
    views: "1.8K",
  },
  {
    title: "Pathaan",
    image: "/images/4.png",
    duration: "2h 20min",
    views: "3K",
  },
  {
    title: "Ant-Man",
    image: "/images/5.png",
    duration: "1h 42min",
    views: "5K",
  },
  {
    title: "Iron Man",
    image: "/images/6.png",
    duration: "2h 6min",
    views: "4.2K",
  },
  {
    title: "The Dark Knight",
    image: "/images/7.jpg",
    duration: "2h 32min",
    views: "6K",
  },
];

// New Releases
const newReleases = [
  {
    title: "Capton Marvel",
    image: "/images/8.png",
    releaseDate: "14 April 2026",
    progress: 0.5,
  },
  {
    title: "Pathan",
    image: "/images/9.png",
    releaseDate: "01 Sept 2025",
    progress: 0.3,
  },
];

// Top Rated Movies
const topRatedshows = [
  {
    title: "Kantara",
    image: "/images/9-1.jpg",
    duration: "1h 57min",
    views: "20K",
    rating: 5,
  },
  {
    title: "Pushpa 2",
    image: "/images/9-2.jpg",
    duration: "1h 30min",
    views: "20K",
    rating: 4,
  },
  {
    title: "Blade Runner",
    image: "/images/9-3.jpg",
    duration: "1h 42min",
    views: "20K",
    rating: 4,
  },
  {
    title: "Adipurush",
    image: "/images/9-4.jpg",
    duration: "2h 10min",
    views: "20K",
    rating: 3,
  },
];

// Categories
const categoriesData = [
  {
    name: "Action",
    images: ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"],
  },
  {
    name: "Adventure",
    images: ["/images/5.png", "/images/12.jpg", "/images/7.png", "/images/8.png"],
  },
  {
    name: "Comedy",
    images: ["/images/15.png", "/images/6.png", "/images/7.png", "/images/8.png"],
  },
  {
    name: "Drama",
    images: ["/images/9.png", "/images/13.jpg", "/images/9-1.png", "/images/9-2.png"],
  },
  {
    name: "Horror",
    images: ["/images/9-3.png", "/images/9-4.png", "/images/12.png", "/images/13.png"],
  },
  {
    name: "Sci-Fi",
    images: ["/images/homepic24.png", "/images/homepic25.png", "/images/homepic26.png", "/images/homepic27.png"],
  },
];

// horor zone
const hororzone = [
  { title: "Captain Marvel", image: "/images/4.png" },
  { title: "Captain America", image: "/images/5.png" },
  { title: "Jai Ho Rambo", image: "/images/6.png" },
  { title: "Gold", image: "/images/7.png" },
  { title: "Avengers: Ultron", image: "/images/8.png" },
  { title: "Black Panther", image: "/images/9.jpg" },
  { title: "Spider-Man", image: "/images/9-1.jpg" },
];

const TVSHOWSPAGE = () => {
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
        movies={popularShows}
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
        showProgress={false} // Enable progress bar if you want to show it
        showViewAllButton={false}
      />

      <MoviesGrid
        title="Most - Watch Shows"
        movies={topRatedshows}
        showViewAllButton={false}
      />

      <div className="mt-15 px-4 md:px-5 max-w-15xl mx-auto">
        <CategorySlider categories={categoriesData} />
      </div>

      <MoviesGrid
        title="Horor zone"
        movies={hororzone}
        showViewAllButton={false}
      />
      

    </div>
  );
};

export default TVSHOWSPAGE;
