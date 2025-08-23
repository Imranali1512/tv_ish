import React, { useState } from 'react';

const videos = [
  { title: 'The Galactic Odyssey', date: '2 days ago', category: 'Movies', img: './images/1.png' },
  { title: 'Culinary Journeys: Flavors of Italy', date: '3 days ago', category: 'Shows', img: './images/2.png' },
  { title: 'Rap Anthems 2024', date: '4 days ago', category: 'Music', img: './images/3.png' },
  { title: 'Wilderness Chronicles: Amazon Expedition', date: '5 days ago', category: 'Movies', img: './images/4.png' },
  { title: 'Investing for Tomorrow', date: '6 days ago', category: 'Podcast', img: './images/5.png' },
  { title: 'Echoes of the Past: Roman Empire', date: '7 days ago', category: 'Movies', img: './images/6.png' },
  { title: 'Tech Trends Today', date: '8 days ago', category: 'Podcast', img: './images/7.png' },
  { title: 'Urban Explorers: Tokyo Nights', date: '9 days ago', category: 'Shows', img: './images/8.png' },
  { title: 'Mindful Living: Yoga Retreat', date: '10 days ago', category: 'Podcast', img: './images/8.png' },
  { title: 'Digital Marketing Mastery', date: '11 days ago', category: 'Podcast', img: './images/9.png' },
  { title: 'Artistic Expressions: Modern Art', date: '12 days ago', category: 'Shows', img: './images/9-2.png' },
  { title: 'Science Simplified: Quantum Physics', date: '13 days ago', category: 'Podcast', img: './images/9-1.png' },
];

const categories = ['All', 'Movies', 'Shows', 'Podcast', 'Music'];

const MyVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen text-white pt-10">
      {/* Only apply horizontal padding on lg (laptop+) screens */}
      <div className="max-w-7xl mx-auto px-0 sm:px-0 md:px-0 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Videos</h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 border-b border-gray-700 mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-2 text-sm px-3 transition duration-200 ${
                selectedCategory === cat
                  ? 'border-b-2 border-white font-semibold text-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video, index) => (
              <div key={index} className="bg-black rounded-md overflow-hidden w-full shadow-md">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h2 className="text-sm font-semibold">{video.title}</h2>
                  <p className="text-xs text-gray-400">Uploaded {video.date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No videos found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyVideos;
