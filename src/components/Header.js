import React, { useEffect, useState } from "react";
import { USERICON, VIEWTUBELOGO, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery !== "") {
        setIsLoading(true); // Set loading state to true
        try {
          const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
          const data = await response.json();
          if (data.length > 1) { // Check if suggestions exist in data
            setSuggestions(data[1].slice(0, Math.floor(data[1].length / 2))); // Slice first half of suggestions
          } else {
            setSuggestions([]); // Set suggestions to empty array if no data
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error); // Handle errors
        } finally {
          setIsLoading(false); // Set loading state to false after fetching/error
        }
      }
    };

    fetchSuggestions();

    // Cleanup function to avoid memory leaks
    return () => {};
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenubar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      {/* logo section */}
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="h-9 w-12 cursor-pointer"
          onClick={() => toggleMenubar()}
        />  
        <img
          src={VIEWTUBELOGO}
          className="h-12 cursor-pointer ml-3 rounded-xl"
          alt="Viewtube logo"
        />
      </div>

      {/* Search and Button Section */}
      <div className="col-span-10">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="border border-gray-800 w-1/2 rounded-l-2xl py-1 text-center bg-[#121212] "
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-800 rounded-r-2xl py-1 text-center px-2 bg-[#222222]">
          Search
        </button>
        {showSuggestions && (
          <div className="absolute z-20 bg-[#222222] text-white mt-1 px-2 py-2 w-[35rem] rounded-xl shadow-lg border border-gray-200">
            <ul className="cursor-default">
              {isLoading ? (
                <p>Loading suggestions...</p>
              ) : suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <li key={suggestion} className="py-1 hover:bg-[#383838]">
                   🔍 {suggestion}
                  </li>
                ))
              ) : (
                <p className="text-red-600">If you enable the CORS extension in your browser, it will work....</p>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon Section */}
      <div className="col-span-1 bg-[#121212]">
        <img src={USERICON} alt="User Icon" className="h-10 rounded-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
