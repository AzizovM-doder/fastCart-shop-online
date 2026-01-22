import React, { useEffect } from "react";

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
import Card1_3 from "../../components/card1_3";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../api/apiCategory";
import { API_Img, getBrands } from "../../api/apiBrandSlice";
import { getProduct } from "../../api/apiProductSlice";
const Products = () => {
  const { category } = useSelector((state) => state.categorySlice);
  const { product, data } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct());
  }, []);

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
          <div className="lg:w-1/4">
            <Accordion
              className="lg:w-full"
              type="single"
              collapsible
              defaultValue="category"
            >
              <AccordionItem value="category">
                <AccordionTrigger className="text-2xl">
                  Category
                </AccordionTrigger>

                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category?.map((elem) => (
                      <AccordionItem key={elem?.id} value={"" + elem?.id}>
                        <AccordionTrigger>
                          <div className="max-w-10 flex items-center gap-5 p-1">
                            <img
                              width={40}
                              height={40}
                              src={`${API_Img}/${elem.categoryImage}`}
                              alt={elem?.categoryImage}
                              />
                              {console.log(elem)}
                            {elem?.categoryName}
                          </div>
                        </AccordionTrigger>

                        <AccordionContent>
                          <div className="flex flex-col pl-10 gap-1">
                            {elem.subCategories?.map((el) => (
                              <div key={el.id}>{el.subCategoryName}</div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div>
              <Accordion type="single" collapsible defaultValue="brands">
                <AccordionItem value="brands">
                  <AccordionTrigger className="text-2xl">
                    Brands
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      {data.brands?.map((e) => {
                        return (
                          <label
                            key={e?.id}
                            className="flex items-center gap-2"
                          >
                            <Checkbox />
                            <p className="pl-3 font-medium">{e?.brandName}</p>
                          </label>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <aside>
            <div>
              <Card1_3 data={product} />
            </div>
          </aside>
        </section>
      </main>
    </main>
  );
};

export default Products;
