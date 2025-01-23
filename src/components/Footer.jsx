import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoalGrey text-softWhite py-4 md:py-2">
  <div className="container mx-auto px-5 font-Helvatica">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold font-cinzelBlack text-electricBlue">Kanha Pickles</h2>
        <p className="mt-1">Bringing tradition to your table, one jar at a time.</p>
      </div>
      <div className="flex justify-center space-x-6 mt-1 mb-1 md:mt-0">
        <a href="https://facebook.com" className="text-softWhite hover:text-goldenYellow">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" className="text-softWhite hover:text-goldenYellow">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com" className="text-softWhite hover:text-goldenYellow">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
    <div className="text-center text-sm">
      <p>© 2025 Kanha Pickles. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
