import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Successful Wedding Stories' subtitle='Explore our portfolio of successfully completed weddings. Discover the creative and memorable events we have planned and executed for our delighted clients.' />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
