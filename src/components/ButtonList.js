import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const listOfName = [
    "AskhaySir",
    "All",
    "Gaming",
    "News",
    "Mixes",
    "Comedy",
    "Coding",
    "lives",
    "Music",
    "Thapa",
    "Motivaton",
    "Javascipt",
  ];

  return (
    <div className="w-full flex flex-nowrap">
      {listOfName.map((Names) => (
        <Buttons key={Names} name={Names} />
      ))}
    </div>
  );
};

export default ButtonList;
