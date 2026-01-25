import Card1 from "../../components/card1";
import image5 from "../../images/coat.png";
import image6 from "../../images/bag.png";
import image7 from "../../images/cpu.png";
import image8 from "../../images/shit.png";
import { Link } from "react-router-dom";
import Card1_2 from "../../components/card1_2";
import { useSelector } from "react-redux";
const Wishlist = () => {
  const items = useSelector((state) => state.wishlistSlice.items || []);

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
            <Card1_2
              data={[
                {
                  name: "The north coat",
                  img: image5,
                  price: 260,
                },
                {
                  name: "Gucci duffle bag",
                  img: image6,
                  price: 960,
                },
                {
                  name: "RGB liquid CPU Cooler",
                  img: image7,
                  price: 160,
                },
                {
                  name: "Small BookSelf",
                  img: image8,
                  price: 360,
                },
              ]}
            />
          </div>
        </section>
      </main>
    </main>
  );
};

export default Wishlist;
