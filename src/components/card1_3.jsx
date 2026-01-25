import React from "react";
import MainBtn from "./mainBtn";
import { Checkbox, Rating } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import W from "./w";
import { API_Img } from "../api/apiBrandSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";
import { addToWishlist } from "../store/reducers/wishlistSlice";

const Card1_3 = ({ data, s, slc }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state) => state.wishlist?.items || state.wishlistSlice?.items || []
  );

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {data?.slice(s || 0, slc || data.length).map((e) => {
        const checked = wishlist.some((elem) => elem.id === e.id);

        return (
          <div
            key={e.id}
            className="group relative flex flex-col min-w-full lg:min-w-72 p-3 lg:p-0 items-start gap-3 transition-all duration-300"
          >
            <div className="relative bg-gray-300 p-5 flex flex-col w-full lg:w-72 h-72 items-center justify-between gap-5 rounded-sm overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:z-10">
              <div className="flex justify-between w-full">
                {e.hasDiscount ? (
                  <W text={e.discountPrice} />
                ) : (
                  <div className="opacity-0">
                    <W text={0} />
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <Checkbox
                    icon={<FavoriteBorder style={{ color: "white" }} />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={checked}
                    onClick={() => dispatch(addToWishlist(e))}
                    sx={{ padding: 0 }}
                  />
                  <Link to={`/details/${e.id}`}>
                    <Checkbox
                      icon={<Eye style={{ color: "white" }} />}
                      checkedIcon={<Eye style={{ color: "blue" }} />}
                      sx={{ padding: 0 }}
                    />
                  </Link>
                  <div className="lg:hidden">
                    <Checkbox
                      icon={<ShoppingCart style={{ color: "white" }} />}
                      checkedIcon={<ShoppingCart style={{ color: "blue" }} />}
                      sx={{ padding: 0 }}
                    />
                  </div>
                </div>
              </div>

              <img width={180} src={`${API_Img}/${e.image}`} alt={e.name} />

              <button
                onClick={() => dispatch(addToCart(e))}
                className="absolute bottom-0 left-0 w-full py-3 flex items-center justify-center bg-black text-white opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              >
                <ShoppingCart />
                <p className="px-3">Add To Cart</p>
              </button>
            </div>

            <h1 className="font-medium text-lg">{e.productName}</h1>
            <h1 className="text-red-600 font-bold">
              ${e.price}
              <span className="text-gray-500 ml-3 line-through">
                ${e.price + e.discountPrice}
              </span>
            </h1>
            <div className="flex items-center gap-3">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <p className="text-gray-500">({e.quantity})</p>
              <div
                className="w-5 h-5 rounded-full"
                style={{ background: `${e.color}` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card1_3;
