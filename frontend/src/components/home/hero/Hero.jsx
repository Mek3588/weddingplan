import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import your images
import image1 from "../hero/rotateimg/wedding1.jpg";
import image2 from "../hero/rotateimg/wedding3.jpg";
import image3 from "../hero/rotateimg/weding2.jpg";

const imageStyle = {
  maxWidth: "100%", // Set the maximum width to 100% to fit within the container
  maxHeight: "550px", // Set the maximum height as desired
};

const Hero = () => {
  return (
    <section className="hero">
      <Carousel
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img
            src={image1}
            alt="Image 1"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Image 2"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Image 3"
            style={imageStyle}
          />
        </div>
      </Carousel>

      {/* Rest of your content */}
    </section>
  );
};

export default Hero;
