import React from "react";
import { Link } from "react-router-dom";
const VideoCard = ({ info }) => {
  if (!info) return <div>Loading...</div>;

  return (
    <>
      {info.map((el) => {
        return (
          <div key={el.id} className="ml-4 p-2 m-3 w-[315px] shadow-lg">
            <Link to={"/watch?v=" + el.id}>
              <img
                src={el?.snippet?.thumbnails?.medium?.url}
                alt="thumbnailsPNg"
                className="rounded-lg"
              />
              <ul>
                <li className="font-bold">{el?.snippet?.title}</li>
                <li>{el?.snippet?.channelTitle}</li>
                <li>{el?.statistics?.viewCount} views</li>
              </ul>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default VideoCard;
