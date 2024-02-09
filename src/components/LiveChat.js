import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/randomName";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName() + "🙏",
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="border border-black ml-2 w-[25rem] bg-slate-100 rounded-lg p-2 h-[500px] overflow-y-scroll flex flex-col-reverse">
        {
          // Don't use index as the key
          chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="border border-slate-200 w-full p-2 mt-1 ml-1 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Yash",
              message: liveMessage,
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
          className="w-72 pl-2"
        />
        <button className="bg-green-500  :hover rounded-lg px-5 py-1 ml-7 hover:bg-green-300">
          ⩥
        </button>
      </form>
    </>
  );
};

export default LiveChat;
