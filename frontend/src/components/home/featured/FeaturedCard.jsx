import React from "react";
import h1Gif from "../hero/heroimg/h1.gif";
import h2Gif from "../hero/heroimg/h2.gif";
import h3Gif from "../hero/heroimg/h3.gif";
import h4Gif from "../hero/heroimg/h4.gif";
import h5Gif from "../hero/heroimg/h5.gif";

const FeaturedCard = () => {
  const gifs = [h1Gif, h2Gif, h3Gif, h4Gif, h5Gif]; // Imported GIFs in an array

  const featured = [
    {
      name: "Wedding Venues",
      total: "30 Venues",
    },
    {
      name: "Floral Design",
      total: "50 Designs",
    },
    {
      name: "Wedding Cakes",
      total: "20 Cakes",
    },
    {
      name: "Photography",
      total: "40 Photographers",
    },
    {
      name: "Full-Service Planning",
      total: "10 Packages",
    },
  ];

  return (
    <div className="md:flex md:justify-between md:space-x-4 mtop">
      {featured.map((item, index) => (
        <div className="bg-white md:w-1/5 p-4 rounded-lg shadow-md" key={index}>
          <img src={gifs[index]} alt={item.name} className="mx-auto mb-4" />
          <h4 className="text-center">{item.name}</h4>
          <label className="text-center">{item.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
