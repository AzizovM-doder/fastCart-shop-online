import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  deleteAllProductInCart,
  deleteProductInCart,
  getCart,
  putIncreaseCart,
  putReduceCart,
} from "../../api/cartAPI/cartAPI";
import { API_IMG } from "../../utils/url";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { cart } = useSelector((store) => store.cartSlice);

  const cartData = cart?.[0];

  useEffect(() => {
    dispatch(getCart())
      .unwrap()
      .catch(() =>
        enqueueSnackbar("Failed to load cart", { variant: "error" }),
      );
  }, []);

  if (!cartData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  const {
    productsInCart = [],
    totalProducts,
    totalPrice,
    totalDiscountPrice,
  } = cartData;

  const handleIncrease = async (id) => {
    try {
      await dispatch(putIncreaseCart(id)).unwrap();
      enqueueSnackbar("Increased quantity", { variant: "success" });
    } catch {
      enqueueSnackbar("Couldn't increase", { variant: "error" });
    }
  };

  const handleDecrease = async (id) => {
    try {
      await dispatch(putReduceCart(id)).unwrap();
      enqueueSnackbar("Decreased quantity", { variant: "info" });
    } catch {
      enqueueSnackbar("Couldn't decrease", { variant: "error" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProductInCart(id)).unwrap();
      enqueueSnackbar("Item removed", { variant: "warning" });
    } catch {
      enqueueSnackbar("Couldn't remove item", { variant: "error" });
    }
  };

  const handleClear = async (id) => {
    try {
      await dispatch(deleteAllProductInCart(id)).unwrap();
      enqueueSnackbar("Cart cleared", { variant: "warning" });
    } catch {
      enqueueSnackbar("Couldn't clear cart", { variant: "error" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {productsInCart.map((e) => (
            <div
              key={e.id}
              className="flex gap-4 border rounded-xl p-4 bg-white shadow-sm"
            >
              {e.product.image ? (
                <img
                  className="w-24 h-24 rounded-md object-cover bg-gray-100"
                  src={`${API_IMG}/${e.product.image}`}
                  alt={e.product.productName}
                />
              ) : (
                <div className="w-24 h-24 rounded-md bg-gray-100" />
              )}

              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-medium text-lg">
                      {e.product.productName}
                    </h2>
                    <p className="text-xs text-gray-500">
                      Product ID: {e.product.id}
                    </p>
                    <p className="text-xs text-gray-500">
                      Left in stock: {e.product.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    <Trash2 />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center border rounded-full overflow-hidden">
                    <button
                      onClick={() => handleDecrease(e.id)}
                      className="px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-sm font-medium">
                      {e.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(e.id)}
                      className="px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="w-full lg:w-80 border rounded-xl p-5 bg-gray-50 space-y-4">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Items</span>
            <span className="font-medium">{totalProducts}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total price</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          <button
            onClick={() => handleClear(cartData.id)}
            className="w-full mt-4 py-2 text-sm rounded-md border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Clear cart
          </button>

          <Link to={"/checkout"}>
            <button className="w-full mt-2 py-2 text-sm rounded-md bg-black text-white hover:bg-black/90 transition">
              Checkout
            </button>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
