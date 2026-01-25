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
const Contact = () => {
  return (
    <main className="p-5 min-h-screen w-full">
      <section className="max-w-7xl m-auto p-5">
        <Breadcrumb className="-mr-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="max-w-7xl m-auto p-5 flex flex-col lg:flex-row gap-5">
        <aside className="shadow-sm p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="flex items-center gap-5 font-bold text-2xl">
              <Phone
                height={50}
                width={50}
                className="bg-red-500 p-3 text-white rounded-full"
              />
              Call To Us
            </h1>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <hr />
          <div className="flex flex-col gap-5">
            <h1 className="flex items-center gap-5 font-bold text-2xl">
              <Mail
                height={50}
                width={50}
                className="bg-red-500 p-3 text-white rounded-full"
              />
              Write To US
            </h1>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </aside>
        <aside className="shadow-sm p-5 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <input
              type="text"
              placeholder="Name"
              className="py-3 px-5 border-2 rounded-sm max-w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-3 px-5 max-w-full border-2 rounded-sm"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="py-3 px-5 max-w-full border-2 rounded-sm"
            />
          </div>
          <textarea
            className="border-2 rounde-sm min-w-full min-h-50 p-3"
            placeholder="Your Massage"
          ></textarea>
          <MainBtn text={"Send Massage"} />
        </aside>
      </section>
    </main>
  );
};

export default Contact;
