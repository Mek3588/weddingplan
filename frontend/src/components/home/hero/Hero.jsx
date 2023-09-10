import React from "react";
import "./hero.css";

// Import your images
import image1 from "../hero/rotateimg/wedding1.jpg";
import image2 from "../hero/rotateimg/wedding3.jpg";
import image3 from "../hero/rotateimg/weding2.jpg";

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden">
      <div className="slider absolute top-0 left-0 w-full h-full flex space-x-4 transition-transform duration-1000 ease-in-out">
        <div className="slide w-full h-full bg-cover bg-center rotate-image" style={{ backgroundImage: `url(${image1})` }}></div>
        <div className="slide w-full h-full bg-cover bg-center rotate-image" style={{ backgroundImage: `url(${image2})` }}></div>
        <div className="slide w-full h-full bg-cover bg-center rotate-image" style={{ backgroundImage: `url(${image3})` }}></div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Your Dream Wedding Awaits
        </h1>
        <p className="text-lg text-pink-500 opacity-90 font-semibold leading-6 mb-8">
          Create your perfect day with our expert wedding planning services.
        </p>

        {/* Search Form */}
        <form className="flex space-x-4 bg-gray-200 rounded-lg shadow-md p-4 mt-8">
          <div className="flex-1">
            <label className="block text-gray-800">Location</label>
            <input
              type="text"
              placeholder="Wedding Venue"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-800">Budget</label>
            <input
              type="text"
              placeholder="Budget Range"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mt-2">Customize Every Detail</h4>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
