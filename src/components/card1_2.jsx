import React from "react";
import MainBtn from "./mainBtn";
import { Checkbox, Rating } from "@mui/material";
import { Trash2, Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import W from "./w";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";

const Card1_2 = ({ data = [] }) => {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
      {data.map((item, i) => (
        <div
          key={i}
          className="group relative flex flex-col items-start p-3 lg:p-0 transition-all duration-300"
        >
          <div className="relative rounded-sm flex flex-col w-full lg:w-72 h-80 lg:h-72 overflow-hidden bg-transparent transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:z-10">
            {/* gray box body */}
            <div className="relative bg-gray-200 flex flex-col w-full h-full p-5 items-center justify-between gap-5">
              {/* top row */}
              <div className="flex justify-between w-full">
                <W text="-40%" />

                <div className="flex flex-col items-center">
                  <Checkbox
                    size="small"
                    icon={<Trash2 />}
                    checkedIcon={<Trash2 />}
                  />
                  <Link to="/details">
                    <Checkbox
                      size="small"
                      icon={<Eye />}
                      checkedIcon={<Eye />}
                    />
                  </Link>
                </div>
              </div>

              {/* image */}
              <img
                src={item.img}
                alt={item.name}
                className="object-contain w-full h-36"
              />

              <button
              onClick={() => dispatch(addToCart())}
                className="
          absolute bottom-0 left-0 w-full h-12
          flex items-center justify-center gap-2
          bg-black text-white
          opacity-0 translate-y-3
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-y-0
        "
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>

          {/* name + price */}
          <h1 className="font-medium text-lg mt-2">{item.name}</h1>
          <h2 className="text-red-600 font-bold">
            ${item.price}
            <span className="text-gray-500 line-through ml-2">
              ${item.price + 29}
            </span>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Card1_2;
