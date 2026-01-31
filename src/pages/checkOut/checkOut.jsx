import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BadgeDollarSignIcon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../api/cartAPI/cartAPI";
import { API_IMG } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";

const CheckOut = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cartSlice);
  const cartData = cart?.[0];
  const token = "8028679469:AAEPMDeBumGJjy_z8Hvfd5zIvUZ5xbGuMCk";
  const chatId = "8030302693";
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const products = cartData?.productsInCart || [];
  const total = cartData?.totalPrice || 0;
  const totalProducts = cartData?.totalProducts || 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const itemsText = products
      .map(
        (p) =>
          `• ${p.product.productName} x${p.quantity} = $${
            p.product.price * p.quantity
          }`,
      )
      .join("\n");
    try {
      const message = `
 Новая заявка:
 Имя: ${(firstName, lastName)}
 address: ${address}
 Телефон: ${phone}
 city : ${city}
 email: ${email}
 itemsText : ${itemsText}
      `;
      await axios.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          message,
        )}`,
        {
          chat_id: chatId,
          text: message,
        },
      );

      toast.success("Checkout proceed!");
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error("Something went wrong, please try later :(");
    }
  };

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 lg:px-6 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Check Out</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <form
        onSubmit={onSubmit}
        className="max-w-7xl mx-auto px-4 lg:px-6 py-10 grid gap-8 lg:grid-cols-[3fr_2fr]"
      >
        <aside className=" border border-slate-100 shadow-sm rounded-2xl p-6 space-y-4">
          <h1 className="text-2xl font-semibold">Billing Details</h1>

          <Input name="firstName" placeholder="First name" required />
          <Input name="lastName" placeholder="Last name" required />
          <Input name="address" placeholder="Street address" required />
          <Input name="city" placeholder="City" required />
          <Input name="phone" placeholder="Phone" required />
          <Input name="email" placeholder="Email" required />

          <div className="flex items-center gap-3">
            <Checkbox id="save" defaultChecked />
            <Label htmlFor="save" className="text-sm text-slate-600">
              Save info for next time
            </Label>
          </div>
        </aside>

        <aside className="border border-slate-100 shadow-sm rounded-2xl p-6 space-y-6 h-fit">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <span className="text-xs text-slate-500">
              {totalProducts} items
            </span>
          </div>

          {!products.length && (
            <div className="flex flex-col items-center gap-4 py-10 text-center border rounded-xl bg-slate-50">
              <ShoppingCart className="w-10 h-10 opacity-60" />
              <p className="text-sm text-slate-500">Your cart is empty</p>
            </div>
          )}

          <div className="space-y-4">
            {products.map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border flex items-center justify-center overflow-hidden">
                    {e.product.image && (
                      <img
                        src={`${API_IMG}/${e.product.image}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {e.product.productName}
                    </p>
                    <p className="text-xs text-slate-500">Qty: {e.quantity}</p>
                  </div>
                </div>

                <p className="text-sm font-semibold">
                  ${e.product.price * e.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Shipping</span>
              <span className="text-emerald-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <RadioGroup defaultValue="cash" className="space-y-3">
            <div className="flex justify-between border p-3 rounded-xl">
              <div className="flex gap-3 items-center">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">Bank</Label>
              </div>
              <BadgeDollarSignIcon className="w-5 h-5" />
            </div>

            <div className="flex gap-3 items-center border p-3 rounded-xl">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">Cash on delivery</Label>
            </div>
          </RadioGroup>

          <div className="flex gap-3">
            <Input placeholder="Coupon code" />
            <Button type="button">Apply</Button>
          </div>

          <Button type="submit" className="w-full py-6 text-base font-semibold">
            Place Order
          </Button>
        </aside>
      </form>
    </main>
  );
};

export default CheckOut;
