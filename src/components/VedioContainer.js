import React from "react";
import VedioCards, { withHighLikes } from "./VedioCards";
import GetCardVedios from "../hooks/GetCardVedios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const VedioContainer = () => {
  const HighLikesCard = withHighLikes(VedioCards);
  const videos = GetCardVedios();
  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center flex-wrap max-w-screen-2xl">
        {videos?.map((video) => {
          return (
            <Link
              className=" hover:shadow-[0_0_5px_0_gray] w-64 h-64 m-2 p-2 mr-2 shadow-lg rounded-lg"
              to={"/watch?v=" + video.id}
              key={video.id}
            >
              {video?.statistics?.likeCount > 20000 ? (
                <HighLikesCard info={video} />
              ) : (
                <VedioCards info={video} />
              )}
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default VedioContainer;
