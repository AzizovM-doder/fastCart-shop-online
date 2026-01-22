import {
  ArrowRight,
  Camera,
  Circle,
  GamepadIcon,
  Headphones,
  Laptop,
  Smartphone,
  Watch,
} from "lucide-react";
import React, { useEffect } from "react";
import AutoSwiper from "../../components/swiper";
import Card1 from "../../components/card1";
import image from "../../images/joystick.png";
import image2 from "../../images/keyboard.png";
import image3 from "../../images/monitor.png";
import image4 from "../../images/chair.png";
import image5 from "../../images/coat.png";
import image6 from "../../images/bag.png";
import image7 from "../../images/cpu.png";
import image8 from "../../images/shit.png";
import jbl from "../../images/jbl.png";
import image9 from "../../images/dawg.png";
import image10 from "../../images/canon.png";
import image11 from "../../images/laptop.png";
import image12 from "../../images/curology.png";
import image13 from "../../images/kidCar.png";
import image14 from "../../images/boot.png";
import image15 from "../../images/joystick2.png";
import image16 from "../../images/jacket.png";
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
<<<<<<< HEAD
import { API_Img, getBrands } from "../../api/apiBrandSlice.js";
import { getCategory } from "../../api/apiCategory.js";
import { getProduct } from "../../api/apiProductSlice.js";
const Home = () => {
  const { category } = useSelector((state) => state.categorySlice);
  const { product } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProduct())
  });
=======
import {getBrands} from '../../api/apiBrandSlice.js'
const Home = () => {
  const {data} = useSelector((state) => state.brandSlice)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getBrands())
  },)
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7
  return (
    <main>
      <header>
        <section className="max-w-7xl m-auto lg:p-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
<<<<<<< HEAD
          <aside className="flex flex-wrap lg:w-1/6 gap-2 p-5 lg:p-0 lg:gap-5 lg:flex-nowrap lg:flex-col">
            {category?.map((e) => {
              return (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <div className="max-w-10 p-1">
                          <img width={40} height={40} src={`${API_Img}/${e.categoryImage}`} alt={e.categoryImage} />
                        </div>
                        {e.categoryName}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {e.subCategories.map((el) =>{
                          return (

                            <NavigationMenuLink onClick={() => navigate('/products') } key={el.id}>{el.subCategoryName}</NavigationMenuLink>
                          )
                        })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
=======
          <aside className="flex flex-wrap gap-2 p-5 lg:p-0 lg:gap-5 lg:flex-nowrap lg:flex-col">
            {data?.map((e) =>{   
              return (

                <Link to={'/products'} className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              {e.brandName} <ArrowRight />
            </Link>
            )   
            })}
            {/* <Link to={'/products'} className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Woman’s Fashion <ArrowRight />
            </Link>
            <Link to={'/products'}  className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Men’s Fashion <ArrowRight />
            </Link>
            <Link to={'/products'} className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Electronics
            </Link>
            <Link to={'/products'}  className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Home & Lifestyle
            </Link>
            <Link to={'/products'} className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Medicine
            </Link>
            <Link to={'/products'} className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Sports & Outdoor
            </Link>
            <Link to={'/products'}  className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Baby’s & Toys
            </Link>
            <Link to={'/products'}  className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Groceries & Pets
            </Link>
            <Link to={'/products'}  className="flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-sm lg:bg-[#00000000] lg:p-0">
              Health & Beauty
            </Link> */}
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7
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
            <Card1
              data={product}
            />
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
            <Card2
              data={category}
            />
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
            <Card1

              s={5}
              data={product}
            />
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
            <Card1
              data={product}
              slc={5}
            />
            <div className="py-10"></div>
            <Card1
              data={product}
              s={4}
              slc={9}
            />
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
