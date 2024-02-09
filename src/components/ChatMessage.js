import React from "react";
import { CHAT_USER_IMAGE } from "../utils/contants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-lg rounded-lg">
      <img
        src={CHAT_USER_IMAGE}
        className="w-8 h-8 rounded-xl"
        alt="CHAT_USER_IMAGE"
      />
      <span className="font-bold ml-1">{name}</span>
      <span className="ml-1">{message}</span>
    </div>
  );
};

export default ChatMessage;
