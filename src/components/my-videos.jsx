import React, { useState } from 'react';

const initialVideos = [
  {
    title: 'The Galactic Odyssey',
    description: 'A thrilling space exploration journey.',
    date: '2021-03-01',
    category: 'Movies',
    img: './images/1.png',
    duration: '1:20',
    visibility: 'Private',
    restrictions: 'None',
    views: 42,
    comments: 0,
    likes: 7,
    dislikes: 0,
  },
  {
    title: 'Culinary Journeys: Flavors of Italy',
    description: 'Explore the taste of Italy with us.',
    date: '2021-03-02',
    category: 'Shows',
    img: './images/2.png',
    duration: '4:30',
    visibility: 'Public',
    restrictions: 'None',
    views: 120,
    comments: 4,
    likes: 30,
    dislikes: 2,
  },
  {
    title: 'Wilderness Chronicles: Amazon Expedition',
    description: 'Discover the secrets of the Amazon rainforest.',
    date: '2021-03-03',
    category: 'Movies',
    img: './images/3.png',
    duration: '2:10',
    visibility: 'Private',
    restrictions: 'None',
    views: 87,
    comments: 2,
    likes: 12,
    dislikes: 1,
  },
];

const categories = ['All', 'Movies', 'Shows', 'Podcast', 'Music'];

const MyVideos = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [selectedCategory, setSelectedCategory] = useState('Movies');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    visibility: 'All',
    minViews: '',
  });

  const [selectedVideos, setSelectedVideos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // For editing video inline
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  // For comment toggle per video
  const [commentOpenIndex, setCommentOpenIndex] = useState(null);

  // For more options dropdown toggle
  const [moreOptionsIndex, setMoreOptionsIndex] = useState(null);

  // Filter logic
  const applyFilters = (video) => {
    const matchesCategory =
      selectedCategory === 'All' || video.category === selectedCategory;
    const matchesVisibility =
      filters.visibility === 'All' || video.visibility === filters.visibility;
    const matchesMinViews =
      filters.minViews === '' || video.views >= parseInt(filters.minViews);
    return matchesCategory && matchesVisibility && matchesMinViews;
  };

  const filteredVideos = videos.filter(applyFilters);

  // Select all and single select logic
  const isAllSelected =
    filteredVideos.length > 0 &&
    selectedVideos.length === filteredVideos.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedVideos([]);
    } else {
      setSelectedVideos(filteredVideos.map((_, idx) => idx));
    }
  };

  const toggleSingleSelect = (index) => {
    setSelectedVideos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleFilters = () => setShowFilters(!showFilters);

  // Delete selected videos
  const handleDelete = () => {
    const newVideos = videos.filter(
      (_, idx) => !selectedVideos.includes(idx)
    );
    setVideos(newVideos);
    setSelectedVideos([]);
  };

  // Edit button click - open inline edit form
  const onEditClick = (index) => {
    setEditingIndex(index);
    setEditForm({
      title: filteredVideos[index].title,
      description: filteredVideos[index].description,
    });
    setMoreOptionsIndex(null);
    setCommentOpenIndex(null);
  };

  const saveEdit = (index) => {
    // Update videos state - map over original videos and update the one matching filteredVideos[index]
    const videoToUpdate = filteredVideos[index];
    const vidIndexInOriginal = videos.findIndex(
      (v) => v.title === videoToUpdate.title && v.date === videoToUpdate.date
    );
    if (vidIndexInOriginal !== -1) {
      const updatedVideos = [...videos];
      updatedVideos[vidIndexInOriginal] = {
        ...updatedVideos[vidIndexInOriginal],
        title: editForm.title,
        description: editForm.description,
      };
      setVideos(updatedVideos);
    }
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  // Comment button click - toggle comment box
  const onCommentClick = (index) => {
    if (commentOpenIndex === index) setCommentOpenIndex(null);
    else setCommentOpenIndex(index);
    setEditingIndex(null);
    setMoreOptionsIndex(null);
  };

  // More options toggle
  const onMoreOptionsClick = (index) => {
    if (moreOptionsIndex === index) setMoreOptionsIndex(null);
    else setMoreOptionsIndex(index);
    setEditingIndex(null);
    setCommentOpenIndex(null);
  };

  // More options actions (Delete, Share, Report)
  const handleMoreOptionAction = (action, video, idx) => {
    if (action === 'delete') {
      // Delete that video
      const videoToDelete = filteredVideos[idx];
      const originalIndex = videos.findIndex(
        (v) => v.title === videoToDelete.title && v.date === videoToDelete.date
      );
      if (originalIndex !== -1) {
        const updatedVideos = [...videos];
        updatedVideos.splice(originalIndex, 1);
        setVideos(updatedVideos);
      }
    } else if (action === 'share') {
      alert(`Share link for: ${video.title}`);
    } else if (action === 'report') {
      alert(`Reported: ${video.title}`);
    }
    setMoreOptionsIndex(null);
  };

  return (
    <div className="bg-black min-h-screen text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Videos</h1>

          {selectedVideos.length > 0 && (
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete {selectedVideos.length} Selected
            </button>
          )}
        </div>

        {/* Tabs + Filters */}
        <div className="flex justify-between items-center mb-4">
          {/* Category Tabs */}
          <div className="flex space-x-4 border-b border-gray-700 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedVideos([]);
                }}
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

          {/* Filters Button */}
          <div className="relative">
            <button
              onClick={toggleFilters}
              className="text-sm px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md border border-gray-600"
            >
              Filters
            </button>

            {showFilters && (
              <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-gray-700 rounded-md shadow-lg p-4 z-10">
                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">
                    Visibility
                  </label>
                  <select
                    value={filters.visibility}
                    onChange={(e) =>
                      setFilters({ ...filters, visibility: e.target.value })
                    }
                    className="w-full bg-zinc-800 text-white p-2 rounded border border-gray-600"
                  >
                    <option value="All">All</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">
                    Minimum Views
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    value={filters.minViews}
                    onChange={(e) =>
                      setFilters({ ...filters, minViews: e.target.value })
                    }
                    className="w-full bg-zinc-800 text-white p-2 rounded border border-gray-600"
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() =>
                      setFilters({ visibility: 'All', minViews: '' })
                    }
                    className="text-xs text-gray-400 hover:underline"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-500"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-zinc-800 text-gray-400 uppercase border-b border-gray-700">
              <tr>
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                    aria-label="Select all videos"
                  />
                </th>
                <th className="px-4 py-2">Video</th>
                <th className="px-4 py-2">Visibility</th>
                <th className="px-4 py-2">Restrictions</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Views</th>
                <th className="px-4 py-2">Comments</th>
                <th className="px-4 py-2">Likes (vs dislikes)</th>
              </tr>
            </thead>
            <tbody>
              {filteredVideos.map((video, index) => {
                const likeRatio =
                  video.likes + video.dislikes > 0
                    ? Math.round(
                        (video.likes / (video.likes + video.dislikes)) * 100
                      )
                    : 0;

                return (
                  <React.Fragment key={index}>
                    <tr
                      className="border-b border-gray-800 hover:bg-zinc-800 transition"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedVideos.includes(index)}
                          onChange={() => toggleSingleSelect(index)}
                          aria-label={`Select video: ${video.title}`}
                        />
                      </td>

                      <td className="px-4 py-3 min-w-[300px]">
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-28 h-16 flex-shrink-0">
                              <img
                                src={video.img}
                                alt={video.title}
                                className="w-full h-full object-cover rounded-md"
                              />
                              {video.duration && (
                                <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-xs px-1 py-px rounded">
                                  {video.duration}
                                </span>
                              )}
                            </div>

                            <div className="flex flex-col">
                              {editingIndex === index ? (
                                <>
                                  <input
                                    className="bg-zinc-800 rounded px-2 py-1 text-white text-sm mb-1"
                                    value={editForm.title}
                                    onChange={(e) =>
                                      setEditForm({
                                        ...editForm,
                                        title: e.target.value,
                                      })
                                    }
                                  />
                                  <textarea
                                    className="bg-zinc-800 rounded px-2 py-1 text-white text-xs resize-none"
                                    rows={2}
                                    value={editForm.description}
                                    onChange={(e) =>
                                      setEditForm({
                                        ...editForm,
                                        description: e.target.value,
                                      })
                                    }
                                  />
                                  <div className="flex space-x-2 mt-1">
                                    <button
                                      onClick={() => saveEdit(index)}
                                      className="bg-green-600 px-2 py-1 rounded text-xs hover:bg-green-700"
                                    >
                                      Save
                                    </button>
                                    <button
                                      onClick={cancelEdit}
                                      className="bg-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-700"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="font-semibold truncate max-w-[200px]">
                                    {video.title}
                                  </div>
                                  <div className="text-xs text-gray-400 truncate max-w-[200px]">
                                    {video.description}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Hover actions */}
                            {hoveredIndex === index && editingIndex !== index && (
                              <div className="flex space-x-4 ml-4">
                                <button
                                  onClick={() => onEditClick(index)}
                                  className="text-gray-400 hover:text-white flex items-center space-x-1 text-xs"
                                  title="Edit"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11 5h6m-6 4h6m-6 4h6m-6 4h6m-6 4h6"
                                    />
                                  </svg>
                                  <span>Edit</span>
                                </button>

                                <button
                                  onClick={() => onCommentClick(index)}
                                  className="text-gray-400 hover:text-white flex items-center space-x-1 text-xs"
                                  title="Comments"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v7a2 2 0 002 2h2m10-11V5a3 3 0 00-3-3H10a3 3 0 00-3 3v2m10 0H7"
                                    />
                                  </svg>
                                  <span>Comments</span>
                                </button>

                                <div className="relative">
                                  <button
                                    onClick={() => onMoreOptionsClick(index)}
                                    className="text-gray-400 hover:text-white flex items-center space-x-1 text-xs"
                                    title="More options"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  </button>

                                  {moreOptionsIndex === index && (
                                    <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-gray-700 rounded-md shadow-lg z-20">
                                      <button
                                        onClick={() =>
                                          handleMoreOptionAction(
                                            'delete',
                                            video,
                                            index
                                          )
                                        }
                                        className="w-full text-left px-4 py-2 hover:bg-red-600"
                                      >
                                        Delete
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleMoreOptionAction(
                                            'share',
                                            video,
                                            index
                                          )
                                        }
                                        className="w-full text-left px-4 py-2 hover:bg-gray-700"
                                      >
                                        Share
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleMoreOptionAction(
                                            'report',
                                            video,
                                            index
                                          )
                                        }
                                        className="w-full text-left px-4 py-2 hover:bg-gray-700"
                                      >
                                        Report
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Comments section */}
                        {commentOpenIndex === index && (
                          <div className="mt-2 bg-zinc-800 p-3 rounded text-xs text-gray-300 max-w-md">
                            <p>No comments available yet.</p>
                          </div>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-1">
                          {video.visibility === 'Private' && (
                            <span title="Private">🔒</span>
                          )}
                          {video.visibility === 'Public' && (
                            <span title="Public">🔓</span>
                          )}
                          <span>{video.visibility}</span>
                        </div>
                      </td>

                      <td className="px-4 py-3">{video.restrictions}</td>
                      <td className="px-4 py-3">
                        {new Date(video.date).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                        <div className="text-xs text-gray-400">Uploaded</div>
                      </td>
                      <td className="px-4 py-3">{video.views}</td>
                      <td className="px-4 py-3">{video.comments}</td>

                      <td className="px-4 py-3 w-[200px]">
                        <div className="text-sm">{likeRatio}%</div>
                        <div className="w-full bg-gray-700 h-1 rounded mt-1 mb-1">
                          <div
                            className="bg-white h-1 rounded"
                            style={{ width: `${likeRatio}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {video.likes} {video.likes === 1 ? 'like' : 'likes'}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="text-xs text-gray-500 mt-6">
          Showing {filteredVideos.length} of {videos.length} videos
        </div>

        {/* Optional: Selected videos count */}
        {selectedVideos.length > 0 && (
          <div className="text-xs text-gray-400 mt-2">
            Selected {selectedVideos.length} video
            {selectedVideos.length > 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVideos;
