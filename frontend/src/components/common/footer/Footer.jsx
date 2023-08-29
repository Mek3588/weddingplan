import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-3xl font-semibold tracking-wide'>Wedding Planner</h2>
          <p className='text-gray-400 mt-2'>
            Your dream wedding, planned to perfection.
          </p>
        </div>
        <div className='flex items-center space-x-6'>
          <a href='#' className='text-gray-400 hover:text-white'>
            Home
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            Services
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            Packages
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            Contact
          </a>
        </div>
        <div>
          <p className='text-gray-400 mb-2'>Follow us:</p>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white transition-colors duration-300'>
              <i className='fab fa-facebook-f text-xl'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors duration-300'>
              <i className='fab fa-twitter text-xl'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors duration-300'>
              <i className='fab fa-instagram text-xl'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
