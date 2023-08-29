import React from "react";
import r1 from "./recentimg/r1.jpg";
import r2 from "./recentimg/r2.jpg";
import r3 from "./recentimg/r3.jpg";
import r4 from "./recentimg/r4.jpg";
import r5 from "./recentimg/r5.jpg";
import r6 from "./recentimg/r6.jpg";

const RecentCard = () => {
  const list = [
    {
      id: 1,
      cover: r1,
      name: "Elegant Garden Wedding",
      location: "The Garden Venue, Canada",
      category: "Real Wedding",
      price: "1,100,000 birr", 
      type: "Outdoor Ceremony",
    },
    {
      id: 2,
      cover: r2,
      name: "Romantic Beach Elopement",
      location: "Sunset Beach, NewYork",
      category: "Elopement",
      price: "1,250,000 birr", 
      type: "Beach Elopement",
    },
    {
      id: 3,
      cover: r3,
      name: "Charming Barn Wedding",
      location: "Hyatt Regency, Addis Abeba",
      category: "Real Wedding",
      price: "650,000 birr", 
      type: "Rustic Celebration",
    },
    {
      id: 4,
      cover: r4,
      name: "Luxurious Mansion Wedding",
      location: "Ethiopian Skylight Hotel, Addis Abeba",
      category: "Real Wedding",
      price: "300,000 birr", 
      type: "Indoor Ceremony",
    },
    {
      id: 5,
      cover: r5,
      name: "Whimsical Garden Party",
      location: "Sheraton Hotels, Addis Abeba",
      category: "Styled Shoot",
      price: "25,000 birr", 
      type: "Garden Celebration",
    },
    {
      id: 6,
      cover: r6,
      name: "Intimate Vineyard Elopement",
      location: " Haile Resort, Hawassa",
      category: "Elopement",
      price: "500,000 birr", 
      type: "Vineyard Elopement",
    },
  ];

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "Real Wedding"
                          ? "#25b5791a"
                          : "#ff98001a",
                      color:
                        category === "Real Wedding" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">Budget</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
