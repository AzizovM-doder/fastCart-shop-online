import { Mail, Phone } from "lucide-react";
import React from "react";
import MainBtn from "../../components/mainBtn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const Account = () => {
  return (
    <main className="lg:max-w-7xl m-auto">
<Breadcrumb className="-mr-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Account</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <section className="lg:max-w-7xl lg:m-auto p-5 flex w-full *:w-full flex-col lg:flex-row gap-15">
      <aside className="flex flex-col items-start gap-5 ">
        <ul className="*:pl-3">
          <h1 className="font-bold -ml-3 text-lg">Manage My Account</h1>
          <li>My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>
        <ul className="*:pl-3"l>
          <h1 className="font-bold -ml-3 text-lg">My Orders</h1>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
        <h1 className="font-bold  text-lg">My WishList</h1>
      </aside>
      <aside className="shadow-sm w-full lg:w-220 p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#DB4444] text-xl font-bold">Profile</h1>
          <div className="flex flex-col lg:flex-row gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="py-3 px-5 border-2 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-3 px-5 w-full border-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="py-3 px-5 border-2 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Street address"
              className="py-3 px-5 w-full border-2 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col py-5 gap-5">
          <h1 className="text-xl font-bold">Password Changes</h1>
          <div className="flex flex-col lg:flex-row gap-5">
            <input
              type="password"
              placeholder="Current passwod"
              className="py-3 px-5 border-2 rounded-sm w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <input
              type="password"
              placeholder="New passwod"
              className="py-3 px-5 border-2 rounded-sm w-full"
            />
            <input
              type="password"
              placeholder="Confirm new passwod"
              className="py-3 px-5 w-full border-2 rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <MainBtn text={"Send Massage"} />
        </div>
      </aside>
    </section>
    </main>
  );
};

export default Account;
