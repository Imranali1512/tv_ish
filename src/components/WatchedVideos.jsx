import React from "react";

const WatchedVideos = ({ videos }) => {
  return (
    <div>
      {/* Header with "View All" button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">MY LAST ACTIVITY</h2>
        <button className="text-sm text-blue-400 hover:underline">
          View All
        </button>
      </div>

      {/* Videos list */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-52 bg-gray-900 rounded-lg shadow-md overflow-hidden flex-shrink-0"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-32 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-2">
              <h3 className="text-sm truncate">{video.title}</h3>
              <p className="text-xs text-gray-400">by {video.nickname}</p>
              <p className="text-xs text-gray-500">{video.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchedVideos;
