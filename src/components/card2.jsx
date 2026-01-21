import React from "react";
import { API_Img } from "../api/apiBrandSlice";
import { Link } from "react-router-dom";

const Card2 = ({ data }) => {
  return (
    <div className="flex gap-5 lg:gap-7 overflow-x-auto overflow-y-hiddden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] no-scroll">
      {data.map((e) => {
        return (
          <Link to={'/products'} className="w-full lg:w-50 lg:h-70 h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            <div className="max-w-10 p-1">
              <img
                width={40}
                height={40}
                src={`${API_Img}/${e.categoryImage}`}
                alt={e.categoryImage}
              />
            </div>
            {e.sum ? <h1 className="text-3xl font-bold">{e.sum}</h1> : null}
            <p className="font-medium text-lg">{e.categoryName}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Card2;
