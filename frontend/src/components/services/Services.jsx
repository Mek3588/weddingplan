import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import { Link } from "react-router-dom";
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
        <Link to="/Product">
            <FeaturedCard />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
