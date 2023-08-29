import React from 'react';
import Heading from '../../common/Heading';

const Pricings = () => {
  const packages = [
    {
      title: 'Silver Package',
      price: '999 Birr',
      features: ['Ceremony Planning', 'Vendor Coordination', 'Day-of Coordination'],
    },
    {
      title: 'Gold Package',
      price: '1999 Birr',
      features: ['Ceremony Planning', 'Reception Planning', 'Full-Day Coordination', 'Budget Management'],
    },
    {
      title: 'Platinum Package',
      price: '2999 Birr',
      features: ['Ceremony & Reception Planning', 'Full-Day Coordination', 'Budget Management', 'Custom Decor'],
    },
    {
      title: 'Diamond Package',
      price: '4999 Birr',
      features: ['Full-Service Planning', 'Vendor Selection & Coordination', 'Custom Decor & Theme Design', 'Unlimited Consultations'],
    },
    {
      title: 'Royal Package',
      price: '7999 Birr',
      features: ['Full-Service Planning', 'Luxury Venue Selection', 'Custom Decor & Floral Arrangements', 'Personal Stylist'],
    },
    {
      title: 'Exclusive Package',
      price: '9999 Birr',
      features: ['Full-Service Planning', 'Destination Wedding Coordination', 'VIP Guest Experience', 'Personalized Gift Packages'],
    },
  ];
 

  return (
    <section className='pricing bg-gray-100 py-16'>
      <div className='container'>
        <Heading
          title='Pricing Packages'
          subtitle='Choose the perfect package that suits your wedding needs.'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
          {packages.map((pkg, index) => (
            <div key={index} className='package bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-semibold mb-4'>{pkg.title}</h3>
              <p className='text-gray-600 text-lg mb-4'>{pkg.price}</p>
              <ul className='text-gray-600'>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center space-x-2 mb-2'>
                    <i className='fa fa-check-circle text-green-500'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='bg-pink-500 text-white px-4 py-2 rounded-full mt-4'>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricings;
