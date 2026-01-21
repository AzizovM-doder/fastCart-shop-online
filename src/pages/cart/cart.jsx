import React from "react";
import monitor from "../../images/monitor.png";
import joystick from "../../images/joystick.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MainBtn from "../../components/mainBtn";

const Cart = () => {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-7xl px-5  py-5 lg:py-10">
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

        <section className="w-full overflow-x-auto">
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
              <tr className="shadow rounded-sm">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img width={54} src={monitor} alt="" />
                    <p className="text-lg">LCD Monitor</p>
                  </div>
                </td>
                <td className="p-4 text-lg font-bold">$650</td>
                <td className="p-4 text-lg">1</td>
                <td className="p-4 text-lg font-bold">$650</td>
              </tr>
              <tr className="shadow rounded-sm">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img width={54} src={joystick} alt="" />
                    <p className="text-lg">H1 Gamepad</p>
                  </div>
                </td>
                <td className="p-4 text-lg font-bold">$650</td>
                <td className="p-4 text-lg">1</td>
                <td className="p-4 text-lg font-bold">$650</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <button className="px-10 py-4 border-2 font-medium rounded-sm">
            Return To Shop
          </button>
          <div className="flex flex-col gap-5 lg:flex-row">
            <button className="px-10 py-4 border-2 font-medium rounded-sm">
              Update Cart
            </button>
            <button className="px-10 py-4 border-2 border-[#DB4444] text-[#DB4444] font-medium rounded-sm">
              Remove all
            </button>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-5 lg:gap-40 lg:flex-row lg:items-start">
          <aside className="flex flex-col gap-5 lg:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="py-3 px-5 border-2 rounded-sm w-full lg:min-w-100"
            />
            <button className="px-10 py-4 border-2 border-[#DB4444] text-[#DB4444] font-medium rounded-sm">
              Apply
            </button>
          </aside>
          <aside className="flex flex-col border-black w-full p-5 gap-5 rounded-sm border-2">
            <h1 className="text-2xl font-medium">Cart Total</h1>
            <div className="flex w-full font-medium text-lg justify-between">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex w-full font-medium text-lg justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="border border-black"/>
            <div className="flex w-full font-bold text-xl justify-between">
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <MainBtn text={'Procees to checkout'}/>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Cart;
