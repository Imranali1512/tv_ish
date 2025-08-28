import React, { useRef, useState } from 'react';
import Select from 'react-select';

const UploadVideos = () => {
  const [visibility, setVisibility] = useState('public');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [trailerFile, setTrailerFile] = useState(null);
  const [title, setTitle] = useState('');

  // Refs to trigger hidden file inputs
  const videoInputRef = useRef();
  const thumbnailInputRef = useRef();
  const trailerInputRef = useRef();

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === 'video') {
      setVideoFile(file);// autofill title without extension
    } else if (type === 'thumbnail') {
      setThumbnailFile(file);
    } else if (type === 'trailer') {
      setTrailerFile(file);
    }
  };

  const categoryOptions = [
    { value: 'movies', label: 'Movies' },
    { value: 'shows', label: 'Shows' },
    { value: 'podcast', label: 'Podcast' },
    { value: 'snips', label: 'Snips' },
    { value: 'music', label: 'Music' },
    { value: 'education', label: 'Education' },
    { value: 'sports', label: 'Sports' },
    { value: 'ai', label: 'AI' },
  ];

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: '#1A1A1A',
      borderColor: '#525252',
      color: 'white',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#1A1A1A',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#DC2626' : '#1A1A1A',
      color: state.isFocused ? 'white' : '#ccc',
      cursor: 'pointer',
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white pt-12 lg:pl-50 pr-4 py-8">
      <div className="max-w-4xl space-y-8 mx-auto px-4">

        {/* Heading */}
        <section className="text-left">
          <h2 className="text-xl text-red-600 font-bold">Upload videos</h2>
          <p className="text-sm text-gray-400 mt-1">Drag and drop video files to upload</p>
        </section>

        {/* File Upload */}
        <section className="border-2 border-dotted border-gray-600 rounded-md p-8 bg-[#222222] flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-center">Select Videos</h3>
          <p className="text-sm text-gray-400 text-center">Or drag and drop files here</p>
          <button
            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] px-6 py-3 rounded text-sm border border-gray-700"
            onClick={() => videoInputRef.current.click()}
          >
            Select Videos
          </button>
          {videoFile && <p className="text-sm text-gray-300">Selected: {videoFile.name}</p>}
          <input
            type="file"
            accept="video/*"
            ref={videoInputRef}
            onChange={(e) => handleFileChange(e, 'video')}
            className="hidden"
          />
        </section>

        {/* Title */}
        <section>
          <label className="block mb-2 text-sm font-medium">Title (required)</label>
          <input
            type="text"
            placeholder="Add a title that describes your video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
        </section>

        {/* Category */}
        <section>
          <label className="block mb-2 text-sm font-medium">Category</label>
          <Select
            options={categoryOptions}
            styles={customSelectStyles}
            placeholder="Select a category"
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </section>

        {/* Description */}
        <section>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            rows="4"
            className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
        </section>

        {/* Thumbnail Upload */}
        <section className="border-2 border-dotted border-gray-600 rounded-md p-8 bg-[#222222] flex flex-col items-center space-y-2">
          <h3 className="font-semibold text-center">Upload thumbnail</h3>
          <p className="text-sm text-gray-400 text-center">Select an image to use as your video thumbnail</p>
          <button
            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] px-6 py-3 rounded text-sm border border-gray-700"
            onClick={() => thumbnailInputRef.current.click()}
          >
            Select image
          </button>
          {thumbnailFile && <p className="text-sm text-gray-300">Selected: {thumbnailFile.name}</p>}
          <input
            type="file"
            accept="image/*"
            ref={thumbnailInputRef}
            onChange={(e) => handleFileChange(e, 'thumbnail')}
            className="hidden"
          />
        </section>

        {/* Trailer Upload */}
        <section className="border-2 border-dotted border-gray-600 rounded-md p-8 bg-[#222222] flex flex-col items-center space-y-2">
          <h3 className="font-semibold text-center">Upload trailer</h3>
          <p className="text-sm text-gray-400 text-center">Select a short video clip to use as your video trailer</p>
          <button
            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] px-6 py-3 rounded text-sm border border-gray-700"
            onClick={() => trailerInputRef.current.click()}
          >
            Select video
          </button>
          {trailerFile && <p className="text-sm text-gray-300">Selected: {trailerFile.name}</p>}
          <input
            type="file"
            accept="video/*"
            ref={trailerInputRef}
            onChange={(e) => handleFileChange(e, 'trailer')}
            className="hidden"
          />
        </section>

        {/* Visibility */}
        <section>
          <h3 className="mb-4 font-semibold">Visibility</h3>
          <div className="bg-[#1A1A1A] border border-gray-700 rounded p-4 space-y-4">
            {['public', 'unlisted', 'private'].map((option) => (
              <label key={option} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value={option}
                  checked={visibility === option}
                  onChange={() => setVisibility(option)}
                  className="mt-1 accent-red-600"
                />
                <span>
                  <p className="font-medium capitalize">{option}</p>
                  <p className="text-sm text-gray-400">
                    {option === 'public'
                      ? 'Everyone can watch your video'
                      : option === 'unlisted'
                      ? 'Anyone with the video link can watch your video'
                      : 'Only you can watch your video'}
                  </p>
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Save Button */}
        <section className="text-right">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded">
            Save
          </button>
        </section>
      </div>
    </div>
  );
};

export default UploadVideos;
