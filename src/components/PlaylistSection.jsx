import React from "react";
import { FaLock, FaEye } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";

const PlaylistSection = ({ playlists }) => {
  return (
    <div className="bg-[#1a1a1a] text-white p-6 rounded-md space-y-6">
      <h2 className="text-sm font-semibold text-gray-300 uppercase mb-4">
        My Playlist
      </h2>

      <div className="flex space-x-6 overflow-x-auto">
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-md overflow-hidden w-60 flex-shrink-0"
          >
            <div className="relative h-36 w-full">
              <img
                src={playlist.thumbnail}
                alt={playlist.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-xs rounded text-white">
                {playlist.videoCount}
              </div>
              <div className="absolute bottom-2 right-2 text-white">
                <MdPlaylistPlay size={24} />
              </div>
            </div>
            <div className="p-3 space-y-1">
              <h3 className="text-sm font-semibold">{playlist.name}</h3>
              <p className="text-xs text-gray-400">{playlist.description}</p>
              <div className="flex items-center text-xs mt-2 space-x-1 text-gray-300">
                {playlist.privacy === "public" ? (
                  <>
                    <FaEye className="text-green-500" />
                    <span className="text-green-500">Public</span>
                  </>
                ) : (
                  <>
                    <FaLock className="text-gray-400" />
                    <span className="text-gray-400">Private</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;
