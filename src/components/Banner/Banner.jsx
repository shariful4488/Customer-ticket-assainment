import React from "react";
import imgLeft from "../../assets/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* In-Progress Card */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 flex items-center justify-between rounded-2xl p-6 shadow-lg min-h-[200px]">
        <img className="h-32 md:h-40" src={imgLeft} alt="In-Progress" />
        <div className="flex-1 flex flex-col items-center justify-center text-xl md:text-2xl font-bold text-center text-white">
          <p className="hidden md:block">In-Progress</p>
          <p className="md:hidden">InProgress</p>
          <p>{inProgress}</p>
        </div>
        <img className="h-32 md:h-40 scale-x-[-1]" src={imgLeft} alt="In-Progress" />
      </div>

      {/* Resolved Card */}
      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-between rounded-2xl p-6 shadow-lg min-h-[200px]">
        <img className="h-32 md:h-40" src={imgLeft} alt="Resolved" />
        <div className="flex-1 flex flex-col items-center justify-center text-xl md:text-2xl font-bold text-center text-white">
          <p>Resolved</p>
          <p>{resolved}</p>
        </div>
        <img className="h-32 md:h-40 scale-x-[-1]" src={imgLeft} alt="Resolved" />
      </div>
    </div>
  );
};

export default Banner;
