import React, { useState } from 'react';
import Profile from './Profile';
import Listing from './Listing';

const UploadVideos = () => {
  const [mainVideo, setMainVideo] = useState(null);
  const [audioLanguage, setAudioLanguage] = useState('');
  const [captionSource, setCaptionSource] = useState('');
  const [captionFile, setCaptionFile] = useState(null);
  const [additionalLanguageFile, setAdditionalLanguageFile] = useState(null);
  const [trailerFile, setTrailerFile] = useState(null);

  const [activeTab, setActiveTab] = useState('Video');

  const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Hindi',
    'Arabic',
    'Chinese',
  ];

  const handleMainVideoChange = (e) => {
    setMainVideo(e.target.files[0]);
  };

  const handleRemoveVideo = () => {
    setMainVideo(null);
  };

  const handleCaptionFileChange = (e) => {
    setCaptionFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log({
      mainVideo,
      audioLanguage,
      captionSource,
      captionFile,
      additionalLanguageFile,
      trailerFile,
    });

    alert('Form submitted! (Check console for details)');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Video':
        return (
          <div>
            {/* Video Upload Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Upload Video</h3>
              <p className="text-sm text-gray-400 mb-4">This is the primary video asset for your title.</p>

              {mainVideo ? (
                <div className="border border-dashed border-gray-500 p-4 mb-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-200">
                      <p className="font-semibold">Main Video</p>
                      <p className="text-xs">{mainVideo.name}</p>
                    </div>
                    <p className="text-sm text-gray-400">Uploaded</p>
                  </div>
                  <button
                    onClick={handleRemoveVideo}
                    className="mt-4 text-blue-400 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleMainVideoChange}
                  className="mb-4"
                />
              )}

              {/* Audio Language */}
              <div>
                <label className="text-sm text-gray-300">Audio Language</label>
                <select
                  value={audioLanguage}
                  onChange={(e) => setAudioLanguage(e.target.value)}
                  className="w-full mt-2 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-sm text-white"
                >
                  <option value="">Select Language</option>
                  {languageOptions.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Caption Upload */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Upload Captions</h3>
              <p className="text-sm text-gray-400 mb-4">
                Purchase or upload captions in as many languages as you’d like. We only require English captions.
              </p>

              <div className="flex justify-between items-center mb-4 gap-4">
                <div className="w-full">
                  <label className="text-sm text-gray-300">English Captions</label>
                  <select
                    value={captionSource}
                    onChange={(e) => {
                      setCaptionSource(e.target.value);
                      setCaptionFile(null);
                    }}
                    className="w-full mt-2 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-sm text-white"
                  >
                    <option value="">Select Captions</option>
                    <option value="upload">Upload Your Own</option>
                  </select>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-6">
                  Create Captions
                </button>
              </div>

              {captionSource === 'upload' && (
                <div className="mb-4">
                  <label className="text-sm text-gray-300">Upload Caption File (.srt, .vtt)</label>
                  <input
                    type="file"
                    accept=".srt,.vtt"
                    onChange={handleCaptionFileChange}
                    className="w-full mt-2 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-sm text-white"
                  />
                  {captionFile && (
                    <p className="mt-2 text-sm text-green-400">Uploaded: {captionFile.name}</p>
                  )}
                </div>
              )}
            </div>

            {/* Additional Languages */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Additional Languages</h3>
              <input
                type="file"
                accept=".srt,.vtt"
                onChange={(e) => setAdditionalLanguageFile(e.target.files[0])}
                className="w-full mt-2 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-sm text-white"
              />
            </div>

            {/* Upload Trailer */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Upload Trailer</h3>
              <p className="text-sm text-gray-400 mb-4">This will be the primary trailer asset channels will use.</p>
              <div className="border border-dashed border-gray-500 p-4 rounded-md bg-gray-900 text-gray-400">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setTrailerFile(e.target.files[0])}
                  className="w-full text-white"
                />
              </div>
            </div>
          </div>
        );
      case 'Profile':
        return <Profile />;
      case 'Listing':
        return <Listing />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header and Navigation Menu */}
        <div className="sticky top-0 bg-black z-50">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-white">🎬 New Title</h1>
            <button
              onClick={handleSubmit}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium"
            >
              Submit
            </button>
          </div>

          {/* Navigation Menu (Cleaned) */}
          <nav className="mb-8 border-b border-gray-700">
            <ul className="flex space-x-6 text-sm font-medium">
              {['Video', 'Profile', 'Listing'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 ${
                      activeTab === tab
                        ? 'text-white border-b-2 border-blue-500'
                        : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-500 transition'
                    }`}
                  >
                    {tab === 'Profile' ? 'Video Info' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Render Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default UploadVideos;
