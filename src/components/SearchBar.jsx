import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  // Save recent searches to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add new search to recent searches
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== query.toLowerCase());
      return [query, ...filtered].slice(0, 5); // max 5 recent items
    });
    setQuery("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Recent Searches:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recentSearches.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-blue-600"
                onClick={() => setQuery(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
