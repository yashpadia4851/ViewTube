import React from "react";

const VedioCards = ({ info }) => {

  const {
    snippet: { channelTitle, thumbnails, title },
    statistics,
  } = info;
  return (
    <div className="flex select-none flex-col justify-between h-full">
      <div>
        <img
          alt="thumbnail"
          className="rounded-lg w-full"
          src={thumbnails.medium.url}
        />
        <ul className="font-semibold text-sm truncate py-2">
          <li>{title}</li>
        </ul>
      </div>

      <div className="text-gray-800 text-sm font-medium flex items-center gap-1">
        <img
          alt="thumbnail"
          className="h-6 w-6 rounded-full"
          src={thumbnails.medium.url}
        />
        <div>
          <p className="text-slate-400 ">{channelTitle}</p>
          <div className=" text-gray-600 text-xs font-medium">
            {(statistics.viewCount / 1000).toFixed()}K Views
          </div>
        </div>
      </div>
    </div>
  );
};

export const withHighLikes = (VedioCards) => {
  return ({ info }) => {
    return (
      <>
        <label className="select-none absolute p-1 z-0 text-sm text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-1 text-center me-2">
          High ❤️
        </label>
        <VedioCards info={info} />
      </>
    );
  };
};
export default VedioCards;
