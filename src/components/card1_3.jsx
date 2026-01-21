import React from "react";
import MainBtn from "./mainBtn";
import { Checkbox, Rating } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Card1_3 = ({ data }) => {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {data.map((e, i) => (
        <div key={i} className="flex flex-col min-w-full lg:min-w-72 p-3 lg:p-0 items-start gap-3">
          <div className="bg-gray-300 p-5 flex flex-col w-full  lg:w-72 h-72 items-center justify-between gap-5 rounded-sm">
            <div className="flex justify-between w-full">
              <MainBtn text="-40%" />
              <div className="flex flex-col gap-1">
                <Checkbox
                  icon={<FavoriteBorder style={{ color: "white" }} />}
                  checkedIcon={<Favorite style={{ color: "red" }} />}
                  sx={{
                    padding: 0,
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
            </div>

            <img width={180} src={e.img} alt={e.name} />
          </div>
          <h1 className="font-medium text-lg">{e.name}</h1>
          <h1 className="text-red-600 font-bold">
            ${e.price}{" "}
            <span className="text-gray-500 ml-3 line-through">${e.price + 29}</span>
          </h1>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      ))}
    </div>
  );
};

export default Card1_3;
