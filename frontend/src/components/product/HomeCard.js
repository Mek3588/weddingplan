import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      {name ? (
        <Link
          to={`/menu/${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="h-72 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4 p-4">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
              {name}
            </h3>
            <p className="text-gray-600 text-center capitalize mb-2">
              {category}
            </p>
            <p className="text-2xl font-bold text-red-500 text-center">
              {formattedPrice && `birr ${formattedPrice}`}
            </p>
          </div>
        </Link>
      ) : (
        <div className="h-72 flex items-center justify-center bg-gray-100">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
