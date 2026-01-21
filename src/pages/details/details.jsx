import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Rating from "@mui/material/Rating";
import ps1 from "../../images/ps1.png";
import ps2 from "../../images/ps2.png";
import ps3 from "../../images/ps3.png";
import ps4 from "../../images/ps4.png";
import ps5 from "../../images/ps5.png";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Heart, PlusIcon } from "lucide-react";
const Details = () => {
  return (
    <main>
      <header>
        <section className="max-w-7xl m-auto p-5'">
          <Breadcrumb className="lg:-mr-10">
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
                <BreadcrumbPage>Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="max-w-7xl flex flex-col lg:flex-row gap-5 lg:justify-between m-auto p-5">
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            <div className="flex w-full lg:gap-3 justify-between lg:flex-col lg:h-full">
              <img className="lg:w-43" width={80} src={ps2} alt="joystick" />
              <img className="lg:w-43" width={80} src={ps1} alt="joystick" />
              <img className="lg:w-43" width={80} src={ps3} alt="joystick" />
              <img className="lg:w-43" width={80} src={ps4} alt="joystick" />
            </div>
            <img src={ps5} className="w-full lg:w-auto lg:h-full" alt="" />
          </div>
          <aside className="lg:max-w-1/3 flex flex-col gap-5">
            <h1 className="font-medium text-lg">Havic HV G-92 Gamepad</h1>
            <Rating value={2} />
            <h1 className="text-2xl font-bold">$192.00</h1>
            <p className="text-gray-500">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr />
            <div className="flex justify-between">
              <p>Size:</p>
              <ButtonGroup>
                <Button variant="outline">Small</Button>
                <Button variant="outline">Button</Button>
                <Button variant="outline">Group</Button>
              </ButtonGroup>
            </div>
                <Button variant="destructive">BUY NOW</Button>
                <Button>
                  <Heart/>
                </Button>

          </aside>
        </section>
      </header>
      <main></main>
    </main>
  );
};

export default Details;
