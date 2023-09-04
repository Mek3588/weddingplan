import React from "react";
import Heading from "../../common/Heading";
import "./style.css";
import locationImage1 from "./locationimg/l1.jpg";
import locationImage2 from "./locationimg/l2.jpg";
import locationImage3 from "./locationimg/l3.jpg";
import locationImage4 from "./locationimg/l4kur.jpg";
import locationImage5 from "./locationimg/l5 kuriftu-resort-adama.jpg";
import locationImage6 from "./locationimg/l6g.jpg";

const Location = () => {
  const location = [
    {
      id: 1,
      name: "Hilton, Addis abeba",
      Offices: "07 Offices",
      cover: locationImage1,
    },
    {
      id: 2,
      name: "Haile Resort, Arba Minch",
      Offices: "07 Offices",
      cover: locationImage2,
    },
    {
      id: 3,
      name: "Sheraton Addis, Addis abeba",
      Offices: "07 Offices",
      cover: locationImage3,
    },
    {
      id: 4,
      name: "Kuriftu, Bahir Dar",
      Offices: "07 Offices",
      cover: locationImage4,
    },
    {
      id: 5,
      name: "KURIFTU RESORT & SPA, ADAMA",
      Offices: "07 Offices",
      cover: locationImage5,
    },
    {
      id: 6,
      name: "Hills Resort, Gondar",
      Offices: "07 Offices",
      cover: locationImage6,
    },
  ];

  return (
    <section className="location py-10">
      <div className="container">
        <Heading
          title="Discover Wedding Destinations"
          subtitle="Find the ideal wedding destinations to create your perfect day. Explore our diverse range of locations for your dream wedding."
          className="text-center text-lg" // Adjust text size for larger screens
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mtop">
          {location.map((item, index) => (
            <div className="box relative" key={index}>
              <img src={item.cover} alt={item.name} className="w-full h-auto" />
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center bg-opacity-80 bg-gray-800 text-white transition-opacity opacity-0 hover:opacity-100">
                <h5 className="text-xl mb-2">{item.name}</h5>
                <p className="text-sm">
                  <label>{item.Offices}</label>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
