import React from "react"
import Back from "../common/Back"
import img from "../images/pricing.jpg"
import Pricings from "../home/price/Price"


const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees.' cover={img} />
        <div className='price container'>
          <Pricings />
        </div>
      </section>
    </>
  )
}

export default Pricing
