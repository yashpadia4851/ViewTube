import React from "react";
const FakeCard = () => {
  return (
    <div className="h-fit w-80 shadow-2xl rounded-lg">
      <div className="h-48 bg-[#9CA3AF] m-2 rounded-lg p-1">
        <div className="h-28 rounded-lg bg-gray-300 m-2"></div>
        <div className="h-4 rounded-lg bg-gray-300 m-2 "></div>
        <div className="h-3 w-32 rounded-2xl bg-gray-300 m-2 "></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-wrap">
        {[...Array(30)].map((x, i) => (
          <FakeCard key={i + 1} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
