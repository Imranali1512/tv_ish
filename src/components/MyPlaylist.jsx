//Fail code 
// remove before finalizoation



import React from 'react';
import { FaLock, FaGlobe } from 'react-icons/fa';

const MyPlaylist = ({ playlists = [] }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-md w-full">
      <h2 className="uppercase text-sm font-semibold mb-6">My Playlist</h2>

      <div className="flex gap-6 overflow-x-auto">
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg flex-shrink-0 w-48"
          >
            {/* Thumbnail with number overlay */}
            <div className="relative">
              <img
                src={playlist.thumbnail}
                alt={playlist.name}
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2 bg-gray-900 bg-opacity-70 text-xs px-2 py-0.5 rounded">
                {playlist.number}
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold mb-1">{playlist.name}</h3>
              <p className="text-xs text-gray-400 mb-3">{playlist.description}</p>

              {/* Visibility */}
              <div className="flex items-center gap-2 text-xs">
                {playlist.visibility === 'Public' ? (
                  <>
                    <FaGlobe className="text-green-500" />
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

export default MyPlaylist;
