import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllProductInCart,
  deleteProductInCart,
  getCart,
  putIncreaseCart,
  putReduceCart,
} from "../../api/cartAPI/cartAPI";
import { API_IMG } from "../../utils/url";
import { Link } from "react-router-dom";
import {  Trash2, ShoppingCart } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartSlice);

  const cartData = cart?.[0];

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  if (!cartData || !cartData.productsInCart?.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-6 border rounded-2xl p-15 py-40 shadow-sm">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <ShoppingCart size={40} className="dark:text-black opacity-70" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Your cart is empty</h1>
            <p className="text-gray-500 max-w-md">
              Looks like you haven’t added anything yet. Start browsing and
              drop some heat in the cart.
            </p>
          </div>

          <Link to="/products">
            <button className="px-6 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-black/90 transition">
              Browse products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    productsInCart = [],
    totalProducts,
    totalPrice,
  } = cartData;

  const handleIncrease = (id) => {
    dispatch(putIncreaseCart(id));
  };

  const handleDecrease = (id) => {
    dispatch(putReduceCart(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteProductInCart(id));
  };

  const handleClear = () => {
    dispatch(deleteAllProductInCart());
  };

  return (
    <div className="max-w-7xl lg:min-h-screen m-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {productsInCart.map((e) => (
            <div
              key={e.id}
              className="flex gap-4 border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
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
                      In stock: {e.product.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(e.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center border rounded-full overflow-hidden">
                    <button
                      onClick={() =>
                        e.quantity > 1
                          ? handleDecrease(e.id)
                          : handleDelete(e.id)
                      }
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

                  <div className="text-sm font-semibold">
                    ${e.product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="w-full lg:w-80 border rounded-xl p-5 bg-gray-50 space-y-4 h-fit">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Items</span>
            <span className="font-medium">{totalProducts}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          <button
            onClick={handleClear}
            className="w-full mt-4 py-2 text-sm rounded-md border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Clear cart
          </button>

          <Link to="/checkout">
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
