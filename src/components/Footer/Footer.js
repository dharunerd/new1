import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-blue'>
      <div className = "container py-4 text-center gap-7 ">
      <div className="bg-[#004f9a] h-18 mt-3  text-[14px] gap-20 flex items-center justify-center text-white">
        <p>All Departments</p>
        <p>Store Directory</p>
        <p>Careers</p>
        <p>Our Company</p>
        <p> Sell on Walmart.com</p>
        <p>Help</p>
        <p>COVID-19 Vaccine Scheduler</p>
        <p>Product Recalls</p>
        <p>Accessibility</p>
        <p>Tax Exempt Program</p>
      </div>
      <div className="bg-[#004f9a] h-18 mt-3 text-[14px] gap-4 flex items-center justify-center text-white">
        <p>Get the Walmart App</p>
        <p>Sign-up for Email</p>
        <p>Safety Data Sheet</p>
        <p>Terms of Use</p>
        <p>Privacy & Security</p>
        <p>CA Privacy Rights</p>
        <p>California Supply Chain Act</p>
        <p>Your Privacy Choices</p>
      </div>
      <div className="bg-[#004f9a] h-18 mt-3 text-[14px] gap-4 flex items-center justify-center text-white">
        <p>Request My Personal Information</p>
        <p>#IYWYK</p>
      </div>
      <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2023 Walmart. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer