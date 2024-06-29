import React from "react";
import { FaHome } from "react-icons/fa";
import { TbHistoryToggle } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  //  if(!isMenuOp en) return null; // this is called early reutrn
  
  return !isMenuopen ? (
    <ul className="p-3">
      <li className=" font-bold text-2xl p-3 m-3">
        <Link to="/">
          <FaHome />
        </Link>
      </li>
      <li className=" font-bold text-2xl p-3 m-3">
        <Link to="/">
          <TbHistoryToggle />
        </Link>
      </li>
      <li className=" font-bold text-2xl p-3 m-3">
        <Link to="/">
          <MdWatchLater />
        </Link>
      </li>
    </ul>
  ) : (
    <div className="w-44 shadow-md p-2">
      <ul className="p-3">
        <li className="flex font-bold text-xl p-2">
          <FaHome />
          <Link to="/" className="ml-2">Home</Link>
        </li>
        <li className="flex font-bold text-xl p-2">
          <TbHistoryToggle />
          <Link to="" className="ml-2">History</Link>
        </li>
        <li className="flex font-bold text-xl p-2 ">
          <MdWatchLater />
          <Link to="" className="ml-2">Shorts</Link>
        </li>
      </ul>
      <hr className="h-[2px] bg-opacity-50 bg-black" />
      <h1 className="font-bold text-xl">Subscriptions</h1>
      <ul className="p-4">
        <li>
          <Link to="https://www.linkedin.com/in/akshaymarch7/?originalSubdomain=in">
            Akshay Saini🚀
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/ezsnippet/">ezsNippet</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/kirat-li/">Harkirat Singh</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/company/codewithharry/">
            Codewithharry
          </Link>
        </li>
      </ul>

      <hr className="h-[2px] bg-opacity-50 bg-black" />
      <h1 className="font-bold text-xl">You</h1>
      <ul className="p-4">
        <Link to="">
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
        </Link>
      </ul>
      <hr className="h-[2px] bg-opacity-50 bg-black" />
      <h1 className="font-bold text-xl">Explore</h1>
      <ul className="p-4">
        <Link to="">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
        </Link>
      </ul>
      <hr className="h-[2px] bg-opacity-50 bg-black" />
    </div>
  );
};

export default SideBar;
