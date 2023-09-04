import React from "react";
import Heading from "../../common/Heading";
import backgroundImage from "../../images/background2.webp";
import "./hero.css";

const Hero = () => {
  const heroStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "90vh",
    width: "100%",
  };

  return (
    <section className="hero" style={heroStyles}>
      <div className="container">
        <Heading
          title="Your Dream Wedding Awaits"
          subtitle="Create your perfect day with our expert wedding planning services."
        />

        <form className="flex">
          <div className="box">
            <span>Location</span>
            <input type="text" placeholder="Wedding Venue" />
          </div>
          <div className="box">
            <span>Theme</span>
            <input type="text" placeholder="Wedding Theme" />
          </div>
          <div className="box">
            <span>Budget</span>
            <input type="text" placeholder="Budget Range" />
          </div>
          <div className="box">
            <h4>Customize Every Detail</h4>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
