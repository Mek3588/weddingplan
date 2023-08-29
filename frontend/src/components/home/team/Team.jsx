import React, { useState } from "react";
import Heading from "../../common/Heading";
import locationImage1 from "./teampic/team-1.jpg";
import locationImage2 from "./teampic/team-2.jpg";
import locationImage3 from "./teampic/team-3.jpg";
import locationImage4 from "./teampic/team-4.jpg";
import locationImage5 from "./teampic/team-5.jpg";
import locationImage6 from "./teampic/team-6.jpg";

const Team = () => {
  const team = [
    {
      list: "50",
      cover: locationImage1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
    {
      list: "70",
      cover: locationImage2,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
    {
      list: "80",
      cover: locationImage3,
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
    {
      list: "51",
      cover: locationImage4,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
    {
      list: "42",
      cover: locationImage5,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
    {
      list: "38",
      cover: locationImage6,
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com" },
        { icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
      ],
      phone: "123-456-7890",
    },
  ];
  

  const [activePhoneIndex, setActivePhoneIndex] = useState(-1);

  const togglePhoneDisplay = (index) => {
    if (index === activePhoneIndex) {
      setActivePhoneIndex(-1);
    } else {
      setActivePhoneIndex(index);
    }
  };

  return (
    <section className='team bg-gray-100'>
      <div className='container py-16'>
        <Heading
          title='Meet Our Expert Team'
          subtitle='Get to know the talented individuals who will make your dream wedding a reality.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {team.map((val, index) => (
            <div
              className='box bg-white border rounded-lg p-6 transition duration-300 transform hover:shadow-lg hover:scale-105'
              key={index}
            >
              <button className='btn3 mb-4 text-gray-500'>{val.list} Listings</button>
              <div className='details text-center'>
                <div className='img relative mx-auto w-24 h-24 mb-4'>
                  <img src={val.cover} alt='' className='rounded-full' />
                  <i className='fa-solid fa-circle-check text-blue-500 absolute top-0 right-0'></i>
                </div>
                <i className='fa fa-location-dot text-gray-400'></i>
                <p className='mt-4 text-gray-600'>{val.address}</p>
                <h4 className='mt-2 text-xl font-semibold'>{val.name}</h4>

                <div className='icon-group mt-4'>
                  {val.icon.map((iconObj, iconIndex) => (
                      <a key={iconIndex} href={iconObj.link} target='_blank' rel='noopener noreferrer' className={`icon-item ${iconIndex !== val.icon.length - 1 ? 'mr-4' : ''}`}>
                      <i className={`fa ${iconObj.icon} text-gray-600 hover:text-blue-500`}></i>
                      </a>
                  ))}
               <div
                  className='icon-item cursor-pointer'
                  onClick={() => togglePhoneDisplay(index)}
                >
               <i className='fa fa-phone text-gray-600 hover:text-pink-500'></i>
                  </div>
                </div>

                {activePhoneIndex === index && (
                  <p className='mt-4 text-gray-600'>{val.phone}</p>
                )}
                <div className='button flex mt-4 space-x-2'>
                  <button className='bg-pink-500 text-white px-4 py-2 rounded-full flex items-center'>
                    <i className='fa fa-envelope'></i>
                    <span className='ml-2'>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

  /*const team = [
    {
      list: "50",
      cover: locationImage1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
    {
      list: "70",
      cover: locationImage2,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
    {
      list: "80",
      cover: locationImage3,
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
    {
      list: "51",
      cover: locationImage4,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
    {
      list: "42",
      cover: locationImage5,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
    {
      list: "38",
      cover: locationImage6,
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [
        <i className='fa-brands fa-facebook-f'></i>,
        <i className='fa-brands fa-linkedin'></i>,
        <i className='fa-brands fa-twitter'></i>,
        <i className='fa-brands fa-instagram'></i>,
      ],
    },
  ];
*/
 