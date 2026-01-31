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
    <main>
      <header className="border-b from-gray-50 to-white">
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
            <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Elite Market • Premium online marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Built for people who shop smart and live fast.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Elite Market is a modern marketplace focused on curated brands,
              trusted vendors, and a smooth experience from checkout to
              delivery. We keep it simple: quality products, fair pricing, and
              fast support.
            </p>

            <div className="rounded-2xl border p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">Project credit</p>
                  <p className="text-lg font-semibold">
                    Made by Azizov Muhammadumar
                  </p>
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
            <div className="absolute -inset-6 rounded-[2rem] from-[#DB4444]/20 via-transparent to-black/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border shadow-lg">
              <img
                className="w-full h-80 sm:h-95 object-fit"
                src={client}
                alt="Elite Market"
              />
              <div className="p-6 border-t">
                <p className="text-sm text-gray-600">
                  Curated categories, verified sellers, and a premium shopping
                  flow designed to feel effortless.
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
              className="group rounded-2xl border  p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
        <div className="rounded-[2rem] border from-white to-gray-50 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold">
              What makes Elite Market different
            </h2>
            <p className="text-gray-600 max-w-3xl">
              We’re not trying to be everything. We’re focused on a clean
              catalog, strong vendor standards, and a premium buying experience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.text}
                </p>
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
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
                name: "Cristiano Ronaldo",
                job: "Forward",
                linkedin: "https://www.linkedin.com/in/cristiano-ronaldo",
                insta: "https://www.instagram.com/cristiano",
                facebook: "https://www.facebook.com/Cristiano",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
                name: "Lionel Messi",
                job: "Forward",
                linkedin: "https://www.linkedin.com/in/lionel-messi",
                insta: "https://www.instagram.com/leomessi",
                facebook: "https://www.facebook.com/leomessi",
              },
              {
                img: "data:image/jpeg;base64,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",
                name: "Neymar Jr",
                job: "Forward",
                linkedin: "https://www.linkedin.com/in/neymarjr",
                insta: "https://www.instagram.com/neymarjr",
                facebook: "https://www.facebook.com/neymarjr",
              },
            ]}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl borde p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-14 w-14 rounded-2xl bg-black dark:bg-white dark:text-blackw text-white flex items-center justify-center">
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
              <div className="mt-6 h-1 w-full bg-gray-100" />
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
