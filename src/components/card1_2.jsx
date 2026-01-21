import React from "react";
import MainBtn from "./mainBtn";
import { Checkbox, Rating } from "@mui/material";
import { Trash2, Eye, ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Card1_2 = ({ data }) => {
  return (
    <div className="gap-5 lg:gap-7 grid lg:grid-cols-4">
      {data.map((e, i) => (
        <div
          key={i}
          className="flex hover:scale-105 flex-col min-w-full lg:min-w-72 p-3 lg:p-0 items-start gap-3"
        >
          <div className="rounded-sm flex flex-col w-full lg:w-72 h-80 lg:h-65 lg:mb-10">
            <div className="bg-gray-200 p-5 flex flex-col w-full items-center justify-between gap-5 h-full">

              <div className="flex justify-between w-full">
                {e.scidka ? (
                  <MainBtn text={e.skidka} />
                ) : (
                  <div className="opacity-0">
                    <MainBtn text={"-??%"} />
                  </div>
                )}
                <Checkbox
                  icon={<Trash2 style={{ color: "red" }} />}
                  checkedIcon={<Trash2 style={{ color: "white" }} />}
                  sx={{
                    padding: 0,
                    borderRadius: "4px",
                    padding : '10px',
                    "&.Mui-checked": {
                      backgroundColor: "#DB4444",
                      color: "white",
                    },
                    "&:hover": {
                      backgroundColor: "#ff6b6b30",
                    },
                  }}
                />
                <Link to={'/details'}>
                <Checkbox
                  icon={<Eye style={{ color: "white" }} />}
                  checkedIcon={<Eye style={{ color: "blue" }} />}
                  sx={{
                    padding: 0,
                  }}
                  />
                  </Link>
              </div>
              <img
                src={e.img}
                alt={e.name}
                className="object-contain w-full h-42"
              />

            </div>
            <button className="flex items-center py-3 justify-center gap-3 text-white bg-black">
              <ShoppingCartIcon />
              <p>Add To Cart</p>
            </button>
          </div>
          <h1 className="font-medium text-lg">{e.name}</h1>
          <h1 className="text-red-600 font-bold">
            ${e.price}{" "}
            <span className="text-gray-500 ml-3 line-through">${e.price + 29}</span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Card1_2;
