  import React, { useEffect, useState } from "react";
  import ChatMessage from "./ChatMessage";
  import { useDispatch, useSelector } from "react-redux";
  import { addMessage } from "../utils/chatSlice";
  import {
    displayImage,
    generateRandomMessage,
    generateRandomName,
  } from "../utils/helper";

  const LiveChat = ({ user }) => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
      const interval = setInterval(() => {
        //Api Polling
        dispatch(
          addMessage({
            name: generateRandomName(),
            message: generateRandomMessage(23),
            photo: displayImage(),
          })
        );
      }, 2000);

      return () => clearInterval(interval);
    }, [dispatch]);
    
    return (
      <div className=" mb-4 bg-[#0F0F0F] text-black  flex flex-col items-center shadow-lg rounded-lg">
        <div className="w-full shadow-lg rounded-lg  overflow-y-scroll h-[500px]  flex flex-col-reverse">
          {ChatMessages.map((cm, i) => (
            <ChatMessage
              key={i}
              name={cm.name}
              user={user}
              photo={cm.photo}
              text={cm.message}
            />
          ))}
        </div>
        <form
          className="border border-slate-200 bg-[#0F0F0F] w-full p-2 mt-1 ml-1 rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
            //   console.log(liveMessage);
            dispatch(
              addMessage({
                name: "Yash",
                message: liveMessage,
                photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tQiSZeNcvD884Qij29t6RrBkpW8e-rwRbg&s",
                
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
            type="text"
            placeholder="Send Messages"
            className="w-72 pl-3"
          />
          <button className="bg-green-500  :hover rounded-lg px-5 py-1 ml-7 hover:bg-green-300">
            ⩥
          </button>
        </form>
      </div>
    );
  };

  export default LiveChat;
