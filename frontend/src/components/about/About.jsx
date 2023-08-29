import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";


const About = () => {
  return (
    <section className="about">
      <Back name="About Us" title="About Us - Learn Our Story" cover={img} />
      <div className="container flex mtop">
        <div className="left row">
          <Heading title="Our Wedding Journey" subtitle="Discover Our Love Story and Planning Process" />

          <p>
            Welcome to our wedding planning journey! We're passionate about creating unforgettable moments that celebrate your love. From the dreamy proposal to the magical day, we're here to make your wedding a cherished memory.
          </p>
          <p>
            With creativity and attention to detail, we bring your vision to life. Our team is dedicated to crafting an experience that reflects your unique love story. Let us handle the logistics while you enjoy every moment.
          </p>
          <button className="btn2">Learn More About Us</button>
        </div>
        <div className="right row">
          <img src="../common/header/logo.png" alt="Wedding Planner" />
        </div>
      </div>
    </section>
  );
};

export default About;
