import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCartIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../api/apiProductSlice";
import { API_IMG } from "../../utils/url";
import { Checkbox } from "@mui/material";
import { addToWishlist } from "../../store/reducers/wishlistSlice";
import { postToCart } from "../../api/cartAPI/cartAPI";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.productSlice);

  const images = user?.images || [];
  const [activeIndex, setActiveIndex] = useState(images.at(-1));
  const wishlist = useSelector(
    (state) => state.wishlist?.items || state.wishlistSlice?.items || [],
  );
  const checked = wishlist.some((elem) => elem.id === user?.id);
  useEffect(() => {
    if (id) dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (images.length) {
      setActiveIndex(images.length - 1);
    }
  }, [images.length]);

  const activeImage = images[activeIndex]?.images;

  return (
    <main className="min-h-110 py-10 from-slate-50 to-white">
      <section className="max-w-6xl mx-auto px-4 lg:px-6 pt-8 lg:pt-12 pb-16 space-y-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Details</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {user?.productName || "Loading..."}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div className="grid gap-4 lg:grid-cols-[96px_minmax(0,1fr)] items-start">
            <div className="flex lg:flex-col gap-3 lg:h-105 overflow-x-auto lg:overflow-y-auto pr-1 -ml-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`shrink-0 rounded-xl border bg-white p-1.5 flex items-center justify-center transition-all ${
                    idx === activeIndex
                      ? "border-red-500 ring-2 ring-red-200"
                      : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <img
                    className="w-16 h-16 object-contain"
                    src={`${API_IMG}/${img.images}`}
                    alt={user?.productName || "product image"}
                  />
                </button>
              ))}
            </div>

            <div className="w-full h-full rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-6 lg:p-10">
              {activeImage ? (
                <img
                  src={`${API_IMG}/${activeImage}`}
                  className="w-full max-h-105 object-contain"
                  alt={user?.productName || "product"}
                />
              ) : (
                <div className="w-full h-65 flex items-center justify-center text-slate-400 text-sm">
                  No image available
                </div>
              )}
            </div>
          </div>

          <aside className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 flex justify-between h-full flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-red-500">
                  Product
                </p>
                <h1 className="font-semibold text-xl lg:text-2xl text-slate-900">
                  {user?.productName || "Loading product..."}
                </h1>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Rating value={4} precision={0.5} readOnly size="small" />
                  <span>({user?.quantity || 0} in stock)</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-slate-500">Color</span>
                <div
                  className="w-6 h-6 rounded-full border border-slate-200 shadow-inner"
                  style={{
                    background: user?.color || "#111827",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl font-bold text-emerald-500">
                  ${user?.price}
                </h2>
                {user?.hasDiscount ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-sm line-through text-slate-400">
                      ${user?.discountPrice + user.price}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 border border-red-100">
                      -
                      {Math.round(
                        ((user.discountPrice || 0) /
                          (user.price + (user.discountPrice || 0))) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                ) : null}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                {user?.description ||
                  "No description provided for this product yet."}
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-4">
              <div className="flex gap-3 pt-2">
                <Button
                onClick={dispatch(postToCart(id))}
                  className="flex-1 py-3 flex justify-center gap-3"
                  variant="destructive"
                  size="lg"
                >
                  <ShoppingCartIcon />
                  Add To Cart
                </Button>
                  {" "}
                  <Checkbox
                    icon={<FavoriteBorder style={{ color: "black" }} />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={checked}
                    onClick={() => dispatch(addToWishlist(user))}
                  />
              </div>
            </div>

            <div className="mt-2 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-slate-200" />
                <div>
                  <p className="font-medium text-slate-700">Free Shipping</p>
                  <p>On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-slate-200" />
                <div>
                  <p className="font-medium text-slate-700">Secure Payment</p>
                  <p>100% protected checkout</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Details;
