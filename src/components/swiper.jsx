import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import iphone from "../images/iphone.png";
import watch from "../images/watch.png";
import airpods from "../images/airpods.png";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

export default function AutoSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide style={{ background: "black" }}>
          <div className="w-full flex p-5 lg:p-7 items-center text-start flex-col lg:flex-row lg:justify-between">
            <aside className="flex flex-col pl-5 gap-5">
              <div className="text-white text-3xl flex items-center gap-2">
                <img
                  className="invert"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                  src="https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png"
                  alt="apple"
                />
                <span>iPhone 14 Series</span>
              </div>
              <h1 className="font-bold text-5xl lg:text-6xl text-white">
                Up to 10% off Voucher
              </h1>
              <button className="inline-flex items-center gap-3 text-white font-medium text-2xl border-b border-white w-fit">
                Shop Now <ArrowRight />
              </button>
            </aside>
            <img
              className="w-40 pt-5 lg:max-w-[40%] lg:p-5"
              src={iphone}
              alt="iPhone"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ background: "black" }}>
          <div className="w-full flex p-5 items-center text-start flex-col-reverse lg:flex-row lg:justify-between">
            <img
              className="w-44 pt-10 lg:max-w-[40%] lg:p-5"
              src={watch}
              alt="Apple Watch"
            />
            <aside className="flex flex-col pl-5 gap-5">
              <div className="text-white text-3xl flex items-center gap-2">
                <img
                  className="invert "
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                  src="https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png"
                  alt="apple"
                />
                <span>Apple Watch Ultra</span>
              </div>
              <h1 className="font-bold text-4xl lg:text-5xl text-white max-w-xl">
                Stay active, stay connected, stay in style.
              </h1>
              <button className="inline-flex items-center gap-3 text-white font-medium text-2xl border-b border-white w-fit">
                Explore Watches <ArrowRight />
              </button>
            </aside>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ background: "black" }}>
          <div className="w-full flex p-5 lg:p-7 items-center text-center flex-col lg:flex-row lg:justify-between lg:text-start">
            <aside className="flex flex-col lg:pl-5 gap-5">
              <div className="text-white text-3xl flex items-center gap-2 justify-center lg:justify-start">
                <img
                  className="invert"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                  src="https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png"
                  alt="apple"
                />
                <span>AirPods Pro</span>
              </div>
              <h1 className="font-bold text-4xl lg:text-5xl text-white max-w-xl">
                Feel the beat. Block the noise.
              </h1>
              <p className="text-white/80 text-lg max-w-md mx-auto lg:mx-0">
                Premium sound with active noise cancellation and all-day
                comfort.
              </p>
              <button className="inline-flex items-center gap-3 text-white font-medium text-2xl border-b border-white w-fit mx-auto lg:mx-0">
                Shop Audio <ArrowRight />
              </button>
            </aside>
            <img
              className="w-36 lg:max-w-[40%] pt-10 lg:p-5"
              src={airpods}
              alt="AirPods"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
