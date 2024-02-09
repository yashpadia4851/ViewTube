import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, Setvideos] = useState([]);
  useEffect(() => {
    getVedios();
  }, []);

  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    Setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      <VideoCard info={videos} />
    </div>
  );
};

export default VideoContainer;
