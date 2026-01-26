import Card1 from "../../components/card1";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../api/apiProductSlice";
const Wishlist = () => {
  const items = useSelector((state) => state.wishlistSlice.items || []);
  const {product} = useSelector((state) => state.productSlice)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProduct())
  },[])

  return (
    <main>
      <main>
        <section className="max-w-7xl m-auto p-5">
          <div className="text-xl flex py-5 flex-col lg:flex-row gap-5 lg:justify-between lg:items-center font-medium">
            <p>Wishlist</p>
            <button className="border-2 py-3 px-10 rounded-lg">
              Move All To Bag
            </button>
          </div>
          <div>
            <Card1 data={items} />
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <div className="text-xl flex py-5 flex-col lg:flex-row gap-5 lg:justify-between lg:items-center font-medium">
            <p className="text-[#DB4444] text-lg py-5 font-medium">
              <span className="p-3 mr-3 bg-[#DB4444] rounded-sm"></span>
              Just For You
            </p>
            <Link to={"/products"}>
              <button className="border-2 py-3 px-10 rounded-lg">
                See All
              </button>
            </Link>
          </div>
          <div>
            <Card1
              data={product?.toReversed()}
              slc={4}
            />
          </div>
        </section>
      </main>
    </main>
  );
};

export default Wishlist;
