import React from "react";

const Buttons = ({ name }) => {
  return (
    <div>
      <button className="px-5 m-2 mx-3 py-2 bg-gray-300 rounded-lg hover:bg-slate-200">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
