import { Circle } from "lucide-react";
import React, { useEffect } from "react";
import AutoSwiper from "../../components/swiper";
import Card1 from "../../components/card1";
import jbl from "../../images/jbl.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MainBtn from "../../components/mainBtn";
import { Link, useNavigate } from "react-router-dom";
import Card2 from "../../components/card2";
import { useDispatch, useSelector } from "react-redux";
import { API_Img, getBrands } from "../../api/apiBrandSlice.js";
import { getCategory } from "../../api/apiCategory.js";
import { getProduct } from "../../api/apiProductSlice.js";
const Home = () => {
  const { category } = useSelector((state) => state.categorySlice);
  const { product } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct());
  },[]);
  return (
    <main>
      <header>
        <section className="max-w-7xl m-auto lg:p-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
          <aside className="flex flex-wrap lg:w-1/6 gap-2 p-5 lg:p-0 lg:gap-5 lg:flex-nowrap lg:flex-col">
            {category?.map((e) => {
              return (
                <NavigationMenu key={e.id}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <div className="max-w-10 p-1">
                          <img
                            width={40}
                            height={40}
                            src={`${API_Img}/${e.categoryImage}`}
                            alt={e.categoryImage}
                          />
                        </div>
                        {e.categoryName}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {e.subCategories.map((el) => {
                          return (
                            <NavigationMenuLink
                              onClick={() => navigate("/products")}
                              key={el.id}
                            >
                              {el.subCategoryName}
                            </NavigationMenuLink>
                          );
                        })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
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
            <Card1 slc={4} data={product} />
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
            <Card2 data={category} />
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
            <Card1 slc={4} data={product?.toReversed()} />
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
              <button className="bg-[#00FF66]  py-3 px-7 rounded-sm font-medium">
                Buy Now!
              </button>
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
            <Card1 data={product} />
          </div>

          <Link className="flex my-15 justify-center" to={"products"}>
            <MainBtn text={"View All Products"} />
          </Link>
        </section>
      </main>
    </main>
  );
};

export default Home;
