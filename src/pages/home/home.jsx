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
import Card2 from "../../components/card2";
const Home = () => {
  return (
    <main>
      <header>
        <section className="max-w-7xl m-auto lg:p-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
          <aside className="flex flex-wrap gap-2 p-5 lg:p-0 lg:gap-5 lg:flex-nowrap lg:flex-col">
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Woman’s Fashion <ArrowRight />
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Men’s Fashion <ArrowRight />
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Electronics
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Home & Lifestyle
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Medicine
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Sports & Outdoor
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Baby’s & Toys
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Groceries & Pets
            </p>
            <p className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Health & Beauty
            </p>
          </aside>
          <hr className="h-full w-3" />
          <AutoSwiper />
        </section>
      </header>
      <main>
        <section className="max-w-7xl m-auto p-5">
          <p className="text-[#DB4444] text-lg font-medium">
            <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
            Today's
          </p>
          <div className="flex items-center justify-between py-5">
            <h1 className="font-bold text-5xl">Flash Sales</h1>
          </div>
          <div>
            <Card1
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

          <Link className="flex my-15 justify-center" to={"products"}>
            <MainBtn text={"View All Products"} />
          </Link>
        </section>
        <section className="max-w-7xl m-auto p-5 py-10">
          <p className="text-[#DB4444] text-lg font-medium">
            <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
            Categories
          </p>
          <div className="flex items-center justify-between py-5">
            <h1 className="font-bold text-5xl">Browse By Category</h1>
          </div>
          <div>
            <Card2
              data={[
                {
                  icon: <Smartphone width={50} height={50} />,
                  name: "Phones",
                },
                {
                  icon: <Laptop width={50} height={50} />,
                  name: "Computers",
                },
                {
                  icon: <Watch width={50} height={50} />,
                  name: "Watch",
                },
                {
                  icon: <Camera width={50} height={50} />,
                  name: "Camera",
                },
                {
                  icon: <Headphones width={50} height={50} />,
                  name: "Head Phones",
                },
                {
                  icon: <GamepadIcon width={50} height={50} />,
                  name: "Gaming",
                },
              ]}
            />
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <p className="text-[#DB4444] text-lg font-medium">
            <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
            This Month
          </p>
          <div className="flex lg:items-center flex-col lg:flex-row  gap-5 lg:justify-between py-5">
            <h1 className="font-bold text-5xl">Best Selling Products</h1>

            <Link to={"products"}>
              <MainBtn text={"View All"} />
            </Link>
          </div>
          <div>
            <Card1
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
                {
                  name: "S-Series Comfort Chair ",
                  img: image4,
                  price: 375,
                },
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
              ]}
            />
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5 lg:p-10 lg:rounded-lg bg-black my-10">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
            <aside className="flex flex-col gap-5 items-start justify-center">
              <p className="text-[#00FF66] font-semibold">Categories</p>
              <h1 className="text-white text-6xl font-bold">
                Enhance Your Music Experience
              </h1>
              <div className="flex gap-5 *:text-white">
                <Circle height={50} width={50} />
                <Circle height={50} width={50} />
                <Circle height={50} width={50} />
                <Circle height={50} width={50} />
              </div>
              <button className="bg-[#00FF66]  py-3 px-7 rounded-sm font-medium">Buy Now!</button>
            </aside>

            <img className="w-full lg:w-1/2" src={jbl} alt="" />
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <p className="text-[#DB4444] text-lg font-medium">
            <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
            Our Products
          </p>
          <div className="flex items-center justify-between py-5">
            <h1 className="font-bold text-5xl">Explore Our Products</h1>
          </div>
          <div>
            <Card1
              data={[
                {
                  name: "Breed Dry Dog Food",
                  img: image9,
                  price: 100,
                },
                {
                  name: "CANON EOS DSLR Camera",
                  img: image10,
                  price: 360,
                },
                {
                  name: "ASUS FHD Gaming Laptop",
                  img: image11,
                  price: 700,
                },
                {
                  name: "Curology Product Set ",
                  img: image12,
                  price: 575,
                },
              ]}
            />
            <div className="py-10"></div>
            <Card1 data={[
              
                {
                  name: "Kids Electric Car",
                  img: image13,
                  price: 960,
                },
                {
                  name: "Jr. Zoom Soccer Cleats",
                  img: image14,
                  price: 1160,
                },
                {
                  name: "GP11 Shooter USB Gamepad",
                  img: image15,
                  price: 660,
                },
                {
                  name: "Quilted Satin Jacket",
                  img: image16,
                  price: 660,
                },
            ]}/>
          </div>

          <Link className="flex my-15 justify-center" to={"products"}>
            <MainBtn text={"View All Products"} />
          </Link>
        </section>
        <section className="max-w-5xl m-auto p-5 flex flex-col items-center lg:flex-row justify-between">
          <div className="flex flex-col gap-3 items-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
<circle cx="40" cy="40" r="29" fill="black"/>
<g clip-path="url(#clip0_29420_747)">
<path d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 31.8182H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8184 35.4546H28.485" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 39.0909H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_29420_747">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
<h1 className="font-bold">FREE AND FAST DELIVERY</h1>
<p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
<circle cx="40" cy="40" r="29" fill="black"/>
<g clip-path="url(#clip0_29420_747)">
<path d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 31.8182H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8184 35.4546H28.485" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 39.0909H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_29420_747">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
<h1 className="font-bold">FREE AND FAST DELIVERY</h1>
<p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
<circle cx="40" cy="40" r="29" fill="black"/>
<g clip-path="url(#clip0_29420_747)">
<path d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 31.8182H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8184 35.4546H28.485" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 39.0909H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_29420_747">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
<h1 className="font-bold">FREE AND FAST DELIVERY</h1>
<p>Free delivery for all orders over $140</p>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Home;
