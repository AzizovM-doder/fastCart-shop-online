import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MainBtn from "../../components/mainBtn";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../../store/reducers/cartSlice"; // adjust path
import { API_Img } from "../../api/apiBrandSlice";
import { ImageMinus } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cartSlice.items || []);

  const subtotal = items.reduce((sum, item) => {
    const price = item.productPrice || item.price || 0;
    const qty = item.qty || 1;
    return sum + price * qty;
  }, 0);

  const formatPrice = (v) => `$${Number(v).toFixed(2)}`;

  return (
    <main className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 py-5 lg:py-10">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
 
        {items.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-lg font-medium mb-4">Your cart is empty.</p>
            <Link to="/">
              <button className="px-6 py-3 border-2 font-medium rounded-sm">
                Return To Shop
              </button>
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <> 
            <section className="hidden md:block w-full overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-4">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 min-w-[16rem] text-left text-lg text-gray-500 font-medium">
                      Product
                    </th>
                    <th className="p-4 min-w-28 text-left text-lg text-gray-500 font-medium">
                      Price
                    </th>
                    <th className="p-4 min-w-28 text-left text-lg text-gray-500 font-medium">
                      Quantity
                    </th>
                    <th className="p-4 min-w-28 text-left text-lg text-gray-500 font-medium">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    const name =
                      item.productName || item.name || item.title || "Product";
                    const imgSrc = API_Img + '/' + item.image
                    const price = item.productPrice || item.price || 0;
                    const qty = item.qty || 1;
                    const rowTotal = price * qty;

                    return (
                      <tr key={item.id} className="shadow rounded-sm bg-white">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            {imgSrc && (
                              <img width={54} src={imgSrc} alt={name} />
                            )}
                            <p className="text-lg">{name}</p>
                          </div>
                        </td>
                        <td className="p-4 text-lg font-bold">
                          {formatPrice(price)}
                        </td>
                        <td className="p-4 text-lg">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => dispatch(decreaseQty(item.id))}
                              className="px-2 py-1 border rounded-sm"
                            >
                              -
                            </button>
                            <span className="px-3 min-w-6 text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => dispatch(increaseQty(item.id))}
                              className="px-2 py-1 border rounded-sm"
                            >
                              +
                            </button>
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="px-2 py-1 border rounded-sm text-red-500"
                            >
                              ✕
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-lg font-bold">
                          {formatPrice(rowTotal)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>


            <section className="md:hidden space-y-4">
              {items.map((item) => {
                const name =
                  item.productName || item.name || item.title || "Product";
                const imgSrc = API_Img + '/' + item.image
                const price = item.productPrice || item.price || 0;
                const qty = item.qty || 1;
                const rowTotal = price * qty;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 rounded-md border bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {imgSrc && (
                        <img width={54} src={imgSrc} alt={name} />
                      )}
                      <div>
                        <p className="text-base font-medium">{name}</p>
                        <p className="text-sm text-gray-500">
                          {formatPrice(price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          className="px-2 py-1 border rounded-sm"
                        >
                          -
                        </button>
                        <span className="px-3 min-w-6 text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="px-2 py-1 border rounded-sm"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="px-2 py-1 border rounded-sm text-red-500 text-sm"
                      >
                        ✕ Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-base font-semibold mt-2">
                      <span>Subtotal</span>
                      <span>{formatPrice(rowTotal)}</span>
                    </div>
                  </div>
                );
              })}
            </section>
 
            <section className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <Link to="/">
                <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 font-medium rounded-sm">
                  Return To Shop
                </button>
              </Link>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 font-medium rounded-sm">
                  Update Cart
                </button>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-[#DB4444] text-[#DB4444] font-medium rounded-sm"
                >
                  Remove all
                </button>
              </div>
            </section>
 
            <section className="mt-8 flex flex-col gap-6 lg:gap-10 lg:flex-row lg:items-start">
  
              <aside className="flex w-full flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="py-3 px-4 sm:px-5 border-2 rounded-sm w-full sm:flex-1"
                />
                <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-[#DB4444] text-[#DB4444] font-medium rounded-sm">
                  Apply
                </button>
              </aside>
 
              <aside className="w-full lg:max-w-sm p-5 gap-4 rounded-sm border-2 border-black flex flex-col">
                <h1 className="text-xl sm:text-2xl font-medium">Cart Total</h1>

                <div className="flex w-full font-medium text-base sm:text-lg justify-between">
                  <p>Subtotal:</p>
                  <p>{formatPrice(subtotal)}</p>
                </div>

                <div className="flex w-full font-medium text-base sm:text-lg justify-between">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>

                <hr className="border border-black" />

                <div className="flex w-full font-bold text-lg sm:text-xl justify-between">
                  <p>Total:</p>
                  <p>{formatPrice(subtotal)}</p>
                </div>

                <Link to="/checkOut" className="mt-2">
                  <MainBtn text={"Proceed to checkout"} />
                </Link>
              </aside>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
