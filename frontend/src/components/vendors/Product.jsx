import React, { useRef } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../product/CardFeature";
import HomeCard from "../product/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../product/FilterProduct";
import AllProduct from "../product/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductList = productData.slice(1, 5);
  const weddingServices = productData.filter(
    (el) => el.category === "wedding_service"
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Wedding Planner</p>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Plan Your Dream Wedding with{" "}
            <span className="text-red-600">Our Expert Team</span>
          </h2>
          <p className="py-3 text-base">
            Make your special day truly unforgettable with our top-notch wedding planning services. Our experienced team will ensure your wedding is a day to remember.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Get Planning
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductList[0]
            ? homeProductList.map((el) => (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              ))
            : loadingArray.map((_, index) => (
                <HomeCard key={index + "loading"} loading={"Loading..."} />
              ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Wedding Services
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {weddingServices[0]
            ? weddingServices.map((el) => (
                <CardFeature
                  key={el._id + "wedding-service"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              ))
            : loadingArrayFeature.map((_, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Explore More"} />
    </div>
  );
};

export default Home;
