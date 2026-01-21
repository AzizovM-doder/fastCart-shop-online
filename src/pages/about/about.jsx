import React from "react";
import client from "../../images/client.png";
import pers1 from "../../images/pers1.png";
import pers2 from "../../images/pers2.png";
import pers3 from "../../images/pers3.png";
import Card3 from "../../components/card3";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const About = () => {
  return (
    <main>
      <header>
        
        <section className="max-w-7xl m-auto p-5">
          <Breadcrumb className="-mr-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="max-w-7xl m-auto p-5 flex flex-col items-center lg:flex-row gap-5">
          <aside className="lg:max-w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </aside>
          <img className="w-full lg:w-1/2" src={client} alt="" />
        </section>
      </header>
      <main>
        <section className="max-w-7xl m-auto flex p-5 gap-5 flex-col items-center lg:flex-row">
          <div className="w-full  h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <path
                d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M44.7217 55.0001V45.0001C44.7217 44.116 44.3705 43.2682 43.7454 42.6431C43.1202 42.0179 42.2724 41.6667 41.3883 41.6667H38.055C37.171 41.6667 36.3231 42.0179 35.698 42.6431C35.0729 43.2682 34.7217 44.116 34.7217 45.0001V55.0001"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-miterlimit="16"
              />
            </svg>
            <h1 className="text-3xl font-bold">10.5k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="w-full  h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <path
                d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M44.7217 55.0001V45.0001C44.7217 44.116 44.3705 43.2682 43.7454 42.6431C43.1202 42.0179 42.2724 41.6667 41.3883 41.6667H38.055C37.171 41.6667 36.3231 42.0179 35.698 42.6431C35.0729 43.2682 34.7217 44.116 34.7217 45.0001V55.0001"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-miterlimit="16"
              />
            </svg>
            <h1 className="text-3xl font-bold">33k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="w-full  h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <path
                d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M44.7217 55.0001V45.0001C44.7217 44.116 44.3705 43.2682 43.7454 42.6431C43.1202 42.0179 42.2724 41.6667 41.3883 41.6667H38.055C37.171 41.6667 36.3231 42.0179 35.698 42.6431C35.0729 43.2682 34.7217 44.116 34.7217 45.0001V55.0001"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-miterlimit="16"
              />
            </svg>
            <h1 className="text-3xl font-bold">22.4k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="w-full  h-70 flex flex-col active:scale-95 active:bg-gray-500 active:*:text-yellow-400 rounded-sm border-2 hover:scale-105 hover:bg-[#DB4444] hover:text-white  justify-center items-center gap-5 p-15">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <path
                d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M44.7217 55.0001V45.0001C44.7217 44.116 44.3705 43.2682 43.7454 42.6431C43.1202 42.0179 42.2724 41.6667 41.3883 41.6667H38.055C37.171 41.6667 36.3231 42.0179 35.698 42.6431C35.0729 43.2682 34.7217 44.116 34.7217 45.0001V55.0001"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-miterlimit="16"
              />
            </svg>
            <h1 className="text-3xl font-bold">45k</h1>
            <p>Sallers active our site</p>
          </div>
        </section>
        <section className="max-w-7xl m-auto flex p-5 gap-5 flex-col items-center lg:flex-row lg:justify-between">
          <Card3
            data={[
              {
                img: pers1,
                name: "Tom Cruise",
                job: "Founder & Chairman",
              },
              {
                img: pers2,
                name: "Emma Watson",
                job: "Managing Director",
              },
              {
                img: pers3,
                name: "Will Smith",
                job: "Product Designer",
              },
            ]}
          />
        </section>

        <section className="max-w-5xl p-5 flex flex-col m-auto items-center lg:flex-row gap-10 lg:justify-between py-20">
          <div className="flex flex-col hover:scale-105 gap-3 items-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <g clip-path="url(#clip0_29420_747)">
                <path
                  d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.8182H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8184 35.4546H28.485"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 39.0909H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_29420_747">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20 20)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-bold">FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col gap-3 hover:scale-105 items-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <g clip-path="url(#clip0_29420_747)">
                <path
                  d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.8182H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8184 35.4546H28.485"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 39.0909H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_29420_747">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20 20)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-bold">FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col gap-3 hover:scale-105 items-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40" cy="40" r="29" fill="black" />
              <g clip-path="url(#clip0_29420_747)">
                <path
                  d="M31.6668 51.6667C33.5078 51.6667 35.0002 50.1743 35.0002 48.3333C35.0002 46.4924 33.5078 45 31.6668 45C29.8259 45 28.3335 46.4924 28.3335 48.3333C28.3335 50.1743 29.8259 51.6667 31.6668 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.3335 48.3335H27.0002C25.8956 48.3335 25.0002 47.4381 25.0002 46.3335V41.6668M23.3335 28.3335H39.6668C40.7714 28.3335 41.6668 29.2289 41.6668 30.3335V48.3335M35.0002 48.3335H45.0002M51.6668 48.3335H53.0002C54.1047 48.3335 55.0002 47.4381 55.0002 46.3335V38.3335M55.0002 38.3335H41.6668M55.0002 38.3335L50.5828 30.9712C50.2213 30.3688 49.5703 30.0002 48.8678 30.0002H41.6668"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 31.8182H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8184 35.4546H28.485"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 39.0909H31.6667"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_29420_747">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20 20)"
                  />
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

export default About;
