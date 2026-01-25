import React from "react";
import { API_Img } from "../api/apiBrandSlice";
import { Link } from "react-router-dom";

const Card2 = ({ data = [] }) => {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <div className="grid gap-5 lg:grid-cols-6">
      {hasData ? (
        data.map((e) => (
          <Link
            key={e.id}
            to={"/products"}
            className="w-full hover:*:invert lg:w-50 lg:h-70 h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] justify-center items-center gap-5 p-15"

          >
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
        ))
      ) : (
        <div className="col-span-6 flex flex-col items-center justify-center py-10 text-center text-gray-500">
          <p className="text-xl font-semibold">No categories found</p>
          <p className="text-sm">Try again later or refresh the page.</p>
        </div>
      )}
    </div>
  );
};

export default Card2;
