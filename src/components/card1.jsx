import React from "react";
import MainBtn from "./mainBtn";
import { Checkbox, Rating } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import W from "./w";

const Card1 = ({ data }) => {
  return (
    <div className="flex gap-5 lg:gap-7 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] no-scroll">
      {data.map((e, i) => (
        <div
          key={i}
          className="group relative flex flex-col min-w-full lg:min-w-72 p-3 lg:p-0 items-start gap-3 transition-all duration-300"
        >
          <div className="relative bg-gray-300 p-5 flex flex-col w-full lg:w-72 h-72 items-center justify-between gap-5 rounded-sm overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:z-10">
            <div className="flex justify-between w-full">
              <W text="-40%" />
              <div className="flex flex-col gap-1">
                <Checkbox
                  icon={<FavoriteBorder style={{ color: "white" }} />}
                  checkedIcon={<Favorite style={{ color: "red" }} />}
                  sx={{ padding: 0 }}
                />
                <Link to="/details">
                  <Checkbox
                    icon={<Eye style={{ color: "white" }} />}
                    checkedIcon={<Eye style={{ color: "blue" }} />}
                    sx={{ padding: 0 }}
                  />
                </Link>
              </div>
            </div>

            <img width={180} src={e.img} alt={e.name} />

            <button className="absolute bottom-0 left-0 w-full py-3 flex items-center justify-center bg-black text-white opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <ShoppingCart/> 
              <p className="px-3">

              Add To Cart
              </p>
            </button>
          </div>

          <h1 className="font-medium text-lg">{e.name}</h1>
          <h1 className="text-red-600 font-bold">
            ${e.price}
            <span className="text-gray-500 ml-3 line-through">${e.price + 29}</span>
          </h1>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      ))}
    </div>
  );
};

export default Card1;
