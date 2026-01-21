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
import { Checkbox } from "@/components/ui/checkbox";
import joystick from "../../images/joystick.png";
import monitor from "../../images/monitor.png";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BadgeDollarSignIcon } from "lucide-react";
const CheckOut = () => {
  return (
    <main>
      <section className="max-w-7xl m-auto p-5">
        <Breadcrumb className="-mr-10">
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
      <section className="max-w-7xl flex flex-col gap-5 lg:flex-row lg:justify-between m-auto p-5">
        <aside className="lg:w-150">
          <h1 className="text-4xl font-medium py-5">Billing Details</h1>
          <div className="shadow-sm w-full p-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
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
              <input
                type="text"
                placeholder="Street address"
                className="py-3 px-5 w-full border-2 rounded-sm"
              />
              <input
                type="text"
                placeholder="Apartment, floor, etc. (optional)"
                className="py-3 px-5 border-2 rounded-sm w-full"
              />
              <input
                type="text"
                placeholder="Town/City"
                className="py-3 px-5 border-2 rounded-sm w-full"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="py-3 px-5 w-full border-2 rounded-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                className="py-3 px-5 w-full border-2 rounded-sm"
              />
              <div className="flex gap-3 lg:justify-between">
                <Checkbox
                  id="terms-checkbox"
                  defaultChecked
                  name="terms-checkbox"
                />
                <Label htmlFor="terms-checkbox">
                  Save this information for faster check-out next time
                </Label>
              </div>
            </div>
          </div>
        </aside>
        <aside className="lg:w-100">
          <div className="w-full p-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="font-medium flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img width={34} src={joystick} alt="m" />
                  <p>H1 Joystick</p>
                </div>
                <p>$649</p>
              </div>
              <div className="font-medium flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img width={34} src={monitor} alt="m" />
                  <p>H1 Gamepad</p>
                </div>
                <p>$1159</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex font-bold text-xl justify-between items-center">
                <p>Total:</p>
                <p>$1750</p>
              </div>
              <RadioGroup defaultValue="option-two">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">

                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Bank</Label>
                  </div>
                  <div>
                    <BadgeDollarSignIcon/>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Cash on delivery</Label>
                </div>
              </RadioGroup>
              <div className="shadow p-5 gap-5 flex flex-col lg:flex-row rounded-2xl">
                
              <input
                type="text"
                placeholder="Coupon Code"
                className="py-3 px-5 w-full border-2 rounded-sm"
              />
              <MainBtn text={'Apply'}/>
              </div>
              <MainBtn text={'Place Order'}/>

            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CheckOut;
