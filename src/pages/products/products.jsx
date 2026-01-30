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
import { SearchIcon, PackageX, RotateCcw } from "lucide-react";
import { Slider } from "../../components/ui/slider";

const Products = () => {
  const { category } = useSelector((state) => state.categorySlice);
  const { product } = useSelector((state) => state.productSlice);
  const { brand } = useSelector((state) => state.brandSlice);

  const defaultParams = {
    productName: null,
    minPrice: 0,
    maxPrice: 1500,
    brandId: null,
    colorId: null,
    categoryId: null,
    subCategoryId: null,
    pageNumber: null,
    pageSize: null,
  };

  const [params, setParams] = useState(defaultParams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrands());
    dispatch(getProduct(params));
  }, [params, dispatch]);

  const hasProducts =
    (Array.isArray(product) && product.length > 0) ||
    (Array.isArray(product?.data) && product.data.length > 0);

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
                setParams((prev) => ({
                  ...prev,
                  productName: e.target.value.toLowerCase().trim(),
                  pageNumber: 1,
                }))
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
          <div className="lg:w-1/4 flex flex-col gap-3">
            <Button
              variant="outline"
              onClick={() => setParams(defaultParams)}
              className="w-full"
            >
              Reset Filters
            </Button>

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
                              <div
                                className="flex items-center gap-3"
                                key={el.id}
                              >
                                <RadioGroupItem
                                  onClick={() =>
                                    setParams((prev) => ({
                                      ...prev,
                                      categoryId: elem.id,
                                      subCategoryId: el.id,
                                      pageNumber: 1,
                                    }))
                                  }
                                  value={`option-${el.id}`}
                                  id={`sub-${el.id}`}
                                />
                                <Label htmlFor={`sub-${el.id}`}>
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

            <Accordion type="single" collapsible defaultValue="brands">
              <AccordionItem value="brands">
                <AccordionTrigger className="text-2xl">
                  Brands
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {brand?.data?.map((e) => {
                      return (
                        <label key={e?.id} className="flex items-center gap-2">
                          <Checkbox
                            checked={params.brandId === e?.id}
                            onCheckedChange={(checked) =>
                              setParams((prev) => ({
                                ...prev,
                                brandId: checked ? e?.id : null,
                                pageNumber: 1,
                              }))
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

            <div className="pr-15 py-5">
              <Slider
                value={[params.minPrice, params.maxPrice]}
                max={1500}
                step={5}
                className="mx-auto w-full max-w-xs"
                onValueChange={(value) => {
                  setParams((prev) => ({
                    ...prev,
                    minPrice: value[0],
                    maxPrice: value[1],
                    pageNumber: 1,
                  }));
                }}
              />
              <div className="text-sm font-bold flex justify-between items-center py-5">
                <p>Min Price : {params.minPrice}</p>
                <p>Max Price : {params.maxPrice}</p>
              </div>
            </div>
          </div>

          <aside className="flex-1 flex items-start justify-center">
            {hasProducts ? (
              <Card1_3 data={product} />
            ) : (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed bg-muted/40 px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <PackageX className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">
                    No products found in this page
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Try changing your search or resetting the filters to see
                    more items.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setParams(defaultParams)}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset filters
                </Button>
              </div>
            )}
          </aside>
        </section>
      </main>
    </main>
  );
};

export default Products;
