import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import image from "../../images/joystick.png";
import image2 from "../../images/keyboard.png";
import image3 from "../../images/monitor.png";
import image4 from "../../images/chair.png";
import image5 from "../../images/coat.png";
import image6 from "../../images/bag.png";
import image7 from "../../images/cpu.png";
import image8 from "../../images/shit.png";
import jbl from "../../images/jbl.png";
import image9 from "../../images/dawg.png";
import image10 from "../../images/canon.png";
import image11 from "../../images/laptop.png";
import image12 from "../../images/curology.png";
import image13 from "../../images/kidCar.png";
import image14 from "../../images/boot.png";
import image15 from "../../images/joystick2.png";
import image16 from "../../images/jacket.png";
import Card1_3 from "../../components/card1_3";
const Products = () => {
  return (
    <main>
      <header>
        <section className="max-w-7xl m-auto p-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
          <Breadcrumb className="lg:-mr-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Select>
            <SelectTrigger className="lg:w-100">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="opt1">Opt1</SelectItem>
              <SelectItem value="opt2">Opt2</SelectItem>
              <SelectItem value="opt3">Opt3</SelectItem>
            </SelectContent>
          </Select>
        </section>
      </header>
      <main>
        <section className="max-w-7xl flex flex-col lg:flex-row gap-5 m-auto p-5">
          <Accordion className='lg:w-1/4' type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>All products</AccordionContent>
              <AccordionContent>Electronics</AccordionContent>
              <AccordionContent>Home & Lifestyle</AccordionContent>
              <AccordionContent>Medicine</AccordionContent>
              <AccordionContent>Sports & Outdoor</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Brands</AccordionTrigger>
              <AccordionContent>
                <Checkbox /> Samsung
              </AccordionContent>
              <AccordionContent>
                <Checkbox /> Apple
              </AccordionContent>
              <AccordionContent>
                <Checkbox /> Huawei
              </AccordionContent>
              <AccordionContent>
                <Checkbox /> Pocco
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <aside>
            <div>
              <Card1_3
                data={[
                  {
                    name: "HAVIT HV-G92 Gamepad",
                    img: image,
                    price: 120,
                  },
                  {
                    name: "AK-900 Wired Keyboard",
                    img: image2,
                    price: 960,
                  },
                  {
                    name: "IPS LCD Gaming Monitor",
                    img: image3,
                    price: 370,
                  },
                  {
                    name: "S-Series Comfort Chair ",
                    img: image4,
                    price: 375,
                  },
                  {
                    name: "The north coat",
                    img: image5,
                    price: 260,
                  },
                  {
                    name: "Gucci duffle bag",
                    img: image6,
                    price: 960,
                  },
                  {
                    name: "RGB liquid CPU Cooler",
                    img: image7,
                    price: 160,
                  },
                  {
                    name: "Small BookSelf",
                    img: image8,
                    price: 360,
                  },
                ]}
              />
            </div>
          </aside>
        </section>
      </main>
    </main>
  );
};

export default Products;
