import React from "react";
import client from "../../../public/fastCartLogo.png";
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

const stats = [
  { value: "12.8k+", label: "Active vendors on Elite Market" },
  { value: "1.2M+", label: "Products across categories" },
  { value: "4.6M+", label: "Monthly shoppers served" },
  { value: "99.1%", label: "Order success rate" },
];

const values = [
  {
    title: "Premium experience",
    text: "A clean, fast marketplace built for people who care about quality and time.",
  },
  {
    title: "Trusted sellers",
    text: "Vendors are reviewed and monitored to keep standards consistent.",
  },
  {
    title: "Secure payments",
    text: "Modern payment flow with safety-first practices and clear refunds.",
  },
  {
    title: "Fast delivery",
    text: "Reliable shipping options with tracking and quick support when needed.",
  },
];

const perks = [
  { title: "FAST DELIVERY", text: "Free delivery for orders over $140" },
  { title: "24/7 SUPPORT", text: "We’re here whenever you need help" },
  { title: "MONEY BACK", text: "Simple returns with clear policies" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b bg-gradient-to-b from-gray-50 to-white">
        <section className="max-w-7xl mx-auto px-5 pt-6">
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

        <section className="max-w-7xl mx-auto px-5 py-10 lg:py-14 grid gap-10 lg:grid-cols-2 items-center">
          <aside className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Elite Market • Premium online marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Built for people who shop smart and live fast.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Elite Market is a modern marketplace focused on curated brands,
              trusted vendors, and a smooth experience from checkout to delivery.
              We keep it simple: quality products, fair pricing, and fast support.
            </p>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">Project credit</p>
                  <p className="text-lg font-semibold">Made by Azizov Muhammadumar</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-700 border">
                    Elite standards
                  </span>
                  <span className="text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-700 border">
                    Real performance
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#DB4444]/20 via-transparent to-black/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border bg-white shadow-lg">
              <img
                className="w-full h-[320px] sm:h-[380px] object-cover"
                src={client}
                alt="Elite Market"
              />
              <div className="p-6 border-t">
                <p className="text-sm text-gray-600">
                  Curated categories, verified sellers, and a premium shopping flow
                  designed to feel effortless.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold">{s.value}</h2>
                  <p className="mt-2 text-sm text-gray-600">{s.label}</p>
                </div>
                <div className="h-10 w-10 rounded-xl border bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-[#DB4444] group-hover:text-white transition">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 7H17V14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-5 h-1 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-[#DB4444] transition-all group-hover:w-[85%]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-12">
        <div className="rounded-[2rem] border bg-gradient-to-b from-white to-gray-50 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold">What makes Elite Market different</h2>
            <p className="text-gray-600 max-w-3xl">
              We’re not trying to be everything. We’re focused on a clean catalog,
              strong vendor standards, and a premium buying experience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-xl bg-gray-100 border flex items-center justify-center text-gray-800">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L19 6V12C19 16.4183 15.866 20.4196 12 22C8.13401 20.4196 5 16.4183 5 12V6L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold">Leadership</h2>
            <p className="mt-2 text-gray-600">
              A team focused on design, performance, and customer trust.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Card3
            data={[
              { img: pers1, name: "Tom Cruise", job: "Founder & Chairman" },
              { img: pers2, name: "Emma Watson", job: "Managing Director" },
              { img: pers3, name: "Will Smith", job: "Product Designer" },
            ]}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-14 w-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7L9 18L4 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-extrabold tracking-wide">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.text}</p>
              <div className="mt-6 h-[2px] w-full bg-gray-100" />
              <p className="mt-4 text-xs text-gray-500">
                Elite Market • Premium service standard
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
