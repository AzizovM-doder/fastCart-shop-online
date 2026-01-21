import {
  ArrowRight,
  Camera,
  Circle,
  Computer,
  GamepadIcon,
  Headphones,
  Laptop,
  LucideComputer,
  Smartphone,
  Watch,
} from "lucide-react";
import React from "react";
import AutoSwiper from "../../components/swiper";
import Card1 from "../../components/card1";
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

import MainBtn from "../../components/mainBtn";
import { Link } from "react-router-dom";
import Card1_2 from "../../components/card1_2";
const Wishlist = () => {
  return (
    <main>
      <main>
        <section className="max-w-7xl m-auto p-5">
          <div className="text-xl flex py-5 flex-col lg:flex-row gap-5 lg:justify-between lg:items-center font-medium">
            <p>Wishlist</p>
            <button className="border-2 py-3 px-10 rounded-lg">
              Move All To Bag
            </button>
          </div>
          <div>
            <Card1_2
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
              ]}
            />
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <div className="text-xl flex py-5 flex-col lg:flex-row gap-5 lg:justify-between lg:items-center font-medium">

          <p className="text-[#DB4444] text-lg py-5 font-medium">
            <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
            Just For You
          </p>
          <Link to={'/products'}>
            <button className="border-2 py-3 px-10 rounded-lg">
             See All
            </button>
          </Link>
          </div>
          <div>
            <Card1_2
              data={[
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
        </section>
      </main>
    </main>
  );
};

export default Wishlist;
