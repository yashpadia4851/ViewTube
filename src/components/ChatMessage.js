import React from "react";

const ChatMessage = ({ name, text, user, photo }) => {
  return (
    <div className="flex items-center gap-x-3 p-2 bg-[#0F0F0F]">
      <div className="h-10 w-10">
        <img
          className="w-full h-full object-center rounded-full"
          alt="commentProfile"
          src={photo}
        />
      </div>
      <div className="flex gap-3 items-center">
        <span
          className={
            name === user?.name
              ? "text-blue-600 font-bold"
              : "text-white font-semibold " + " text-base pr-3"
          }
        >
          {name}
        </span>
        <span
          className={
            name === user?.name
              ? "text-blue-600 font-bold"
              : "text-white font-semibold " + " text-sm "
          }
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
