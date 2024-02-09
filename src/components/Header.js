import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { IMAGE_USER, YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // make an api call after every key press but if the difference between 2 api calls is < 200ms than declined the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(searchQuery);
    // console.log(json[1]);
    setSuggestions(json[1]);
    // update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    //
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className=" h-12 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
          alt="Hambeger Image"
        />
        <a href="/">
          <img
            onClick={(e) => e.preventDefault()}
            className="h-12 ml-3"
            src="https://2pink.org/images/logo_viewtube.png"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="col-span-10 m-2">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-800 w-1/2 rounded-l-2xl py-1 text-center"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border rounded-r-2xl border-gray-800  py-1 px-2">
            Search
          </button>
        </div>
        {/* Here I am doing the destructuring that if the showsuggestion is true show the suggestion otherwise dont show suggestion */}
        {showsuggestions && (
          <div className="fixed bg-white mt-1 px-2 py-2 w-[34rem] rounded-xl shadow-lg border border-gray-200">
            <ul className="cursor-default">
              {suggestions.map((e) => (
                <li key={e} className="py-1 hover:bg-gray-100">
                  🔍{e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 cursor-pointer">
        <img className="h-12" src={IMAGE_USER} alt="user icon" />
      </div>
    </div>
  );
};

export default Header;
