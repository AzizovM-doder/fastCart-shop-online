import React from "react";

const Card2 = ({ data }) => {
  return (
    <div className="flex gap-5 w-full lg:justify-between lg:flex-row flex-col py-5 items-center">
      {data.map((e) => {
        return (
          <div className="w-full lg:w-50 lg:h-70 h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            {e.icon}
            {e.sum ? (<h1 className="text-3xl font-bold">{e.sum}</h1>) : null}
            <p className="font-medium text-lg">{e.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
