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
    </main>
  );
};

export default Products;
