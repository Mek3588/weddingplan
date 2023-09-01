import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  const handleAddCartProduct = () => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "";

  return (
    <div
      className={`w-full max-w-[280px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform ${
        hovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-60 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {name}
              </h3>
              <p className="text-gray-600 text-center capitalize">{category}</p>
              <p className="text-xl font-bold text-red-500 mt-2 text-center">
                {formattedPrice && `₹${formattedPrice}`}
              </p>
            </div>
          </Link>
          <button
            className={`bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-b-lg transform ${
              hovered ? "translate-y-0" : "translate-y-full opacity-0"
            } transition-transform duration-300 ease-in-out`}
            onClick={handleAddCartProduct}
          >
            Add to Cart
          </button>
        </>
      ) : (
        <div className="h-60 flex items-center justify-center bg-gray-100">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
