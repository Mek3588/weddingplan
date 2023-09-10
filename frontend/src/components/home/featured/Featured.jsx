import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading title="Featured vendor Types" subtitle="Find All Type of Vendors." />
          {/* Wrap each FeaturedCard with a Link */}
          <Link to="/Product">
            <FeaturedCard />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Featured;
