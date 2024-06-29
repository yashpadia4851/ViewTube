import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { WATCH_VIDEO_API } from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import CommentsConatiner from "./CommentsConatiner";
import SuggestVideos from "./SuggestVideos";
import { useVideosApi } from "../hooks/GetSuggestionVideo";
import LiveChat from "./LiveChat";
import { differenceInDays } from "date-fns";


const WatchPage = () => {
  const suggestionVideos = useVideosApi();
  const [searchParams] = useSearchParams();

  const [isLike, setIsLike] = useState("");
  const [watchViedeos, SetWatchVideos] = useState(null);
  const [isSubscribe, setIsSubscribe] = useState(false);
  // console.log(searchParams);
  const param = searchParams.get("v");

  //  Sidebar should closed
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    
    const getWatchVedios = async () => {
      const data = await fetch(WATCH_VIDEO_API + param);
      const json = await data.json();
      // console.log(json.items[0]);
      SetWatchVideos(json.items[0]);
    };

    getWatchVedios();
    setIsSubscribe(false);
    setIsLike("");
    window.scrollTo(0,0);
  }, [param ]);

  if (!watchViedeos) return <div>Nothing can get Details</div>;
  // When the user get click so the vedio in big screen and this api is for clicked data and video

  // console.log(watchViedeos?.snippet?.title);

  const { title, channelTitle, thumbnails } = watchViedeos?.snippet;
const { likeCount, viewCount } = watchViedeos?.statistics;


// This code is for the how many days ago ---------------------------------------------->
const publishedat = watchViedeos?.snippet?.publishedAt;
// console.log(publishedat);
const publishedAt = new Date(publishedat);

const now = new Date();
const daysAgo = differenceInDays(now, publishedAt);

// Ensure positive value for daysAgo (avoid negative for future dates)
const absoluteDaysAgo = Math.abs(daysAgo);

const daysAgoText = absoluteDaysAgo === 1
  ? '1 day ago'
  : `${absoluteDaysAgo} days ago`;
// --------------------------------------------------------------------------------------->



  return (
    <div className="w-screen h-full px-3 py-2">
      {watchViedeos && (
        <div className="flex felx-wrap flex-nowrap ">
          <div className="w-full ">
            <iframe
              className="w-full aspect-video rounded-2xl"
              src={"https://www.youtube.com/embed/" + param + "?autoplay=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              autoPlay
            ></iframe>
            <div className="font-semibold my-2 p-4 rounded-2xl bg-[#272727]">
              <h1 className="text-xl mb-4">{title}</h1>


              <div className="flex gap-2 pr-10 justify-center items-center">
                <img
                  className="rounded-full h-9 w-9"
                  alt="channel"
                  src={thumbnails.default.url}
                />
                <div className="flex gap-2 items-center w-fit">
                  <span className="">{channelTitle}</span>
                  <div className="flex ml-3">
                    <p className="ml-3">{daysAgoText}</p>

                  </div>
                </div>
                <button
                  onClick={() => setIsSubscribe(!isSubscribe)}
                  className="py-2 h-fit mx-4 px-4 bg-gray-800 text-sm text-white rounded-full"
                >
                  {isSubscribe ? (
                    <span className="flex items-center gap-3">
                      Subscribed{" "}
                      <img
                        className="h-4 w-4 rounded-full bg-transparent"
                        alt="verify"
                        src="https://img.freepik.com/premium-vector/vector-illustration-heart-symbol-red-color-isolated-white-background_842925-86.jpg"
                      />
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
                <div className="text-lg flex gap-2 ml-auto items-center w-fit">
                  <div className="flex gap-2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 p-2 rounded-lg   items-center">
                    <FaUsersViewfinder size={20} />
                    {(viewCount / 1000).toFixed()} K views
                  </div>
                  <div className="flex items-center gap-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 p-2 rounded-lg">
                    <span
                      onClick={() => {
                        if (isLike === "dislike" || isLike === "") {
                          setIsLike("like");
                        } else if (isLike === "like") {
                          setIsLike("");
                        }
                      }}
                      className="cursor-pointer flex gap-2 text-sm items-center border-r-2 border-white pr-3"
                    >
                      {isLike === "like" ? (
                        <BiSolidLike size={20} />
                      ) : (
                        <BiLike size={20} />
                      )}{" "}
                      {(likeCount / 1000).toFixed()}K
                    </span>
                    <span
                      className="cursor-pointer flex items-center gap-1 text-sm"
                      onClick={() => {
                        if (isLike === "like" || isLike === "") {
                          setIsLike("dislike");
                        } else if (isLike === "dislike") {
                          setIsLike("");
                        }
                      }}
                    >
                      {isLike === "dislike" ? (
                        <>
                          <BiSolidDislike size={20} /> 1
                        </>
                      ) : (
                        <BiDislike size={20} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <CommentsConatiner videoId={param} />
          </div>

          <div className="lg:basis-1/2 px-2 flex flex-col">
            <LiveChat />
            <div className="flex flex-col shadow-lg">
              {suggestionVideos.map((video) => (
                <Link
                  to={"/watch?v=" + video.id}
                  className="my-2 p-1 w-full"
                  key={video.id}
                >
                  <SuggestVideos info={video} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
