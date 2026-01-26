import React, { useEffect, useState } from "react";

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
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import { ButtonGroup } from "../../components/ui/button-group";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { SearchIcon } from "lucide-react";
import { Slider } from "../../components/ui/slider";
const Products = () => {
  const { category } = useSelector((state) => state.categorySlice);
  const { product } = useSelector((state) => state.productSlice);
  const { brand } = useSelector((state) => state.brandSlice);
  const [params, setParams] = useState({
    productName: null,
    minPrice: 0,
    maxPrice: 1500,
    brandId: null,
    colorId: null,
    categoryId: null,
    subCategoryId: null,
    pageNumber: null,
    pageSize: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrands());
    dispatch(getProduct(params));
  }, [params, dispatch]);

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
          <ButtonGroup>
            <Input
              onChange={(e) =>
                setParams({ ...params, productName: e.target.value })
              }
              className="w-60"
              placeholder="What are you looking for?"
            />
            <Button variant="outline" aria-label="Search">
              <SearchIcon />
            </Button>
          </ButtonGroup>
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
                            {elem?.categoryName}
                          </div>
                        </AccordionTrigger>

                        <AccordionContent>
                          <RadioGroup
                            defaultValue=""
                            className="flex flex-col pl-10 gap-1"
                          >
                            {elem.subCategories?.map((el) => (
                              <div className="flex items-center gap-3">
                                <RadioGroupItem
                                  onClick={() =>
                                    setParams({
                                      ...params,
                                      subCategoryId: el.id,
                                    })
                                  }
                                  value={`option-${el.id}`}
                                  id="option-one"
                                />
                                <Label htmlFor="option-one">
                                  {el?.subCategoryName}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
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
                      {brand?.data?.map((e) => {
                        return (
                          <label
                            key={e?.id}
                            className="flex items-center gap-2"
                          >
                            <Checkbox
                              checked={params.brandId == e?.id}
                              onCheckedChange={() =>
                                setParams({ ...params, brandId: e?.id })
                              }
                            />
                            <p className="pl-3 font-medium">{e?.brandName}</p>
                          </label>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="pr-15 py-5">
              <Slider
                defaultValue={[params.minPrice, params.maxPrice]}
                max={1500}
                step={5}
                className="mx-auto w-full max-w-xs"
                onValueChange={(e) => {
                  setParams({
                    ...params,
                    maxPrice: e[1],
                    minPrice: e[0],
                  });
                }}
              />
              <div className="text-sm font-bold flex justify-between items-center py-5">
                <p>Min Price : {params.minPrice}</p>
                <p>Max Price : {params.maxPrice}</p>
              </div>
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
