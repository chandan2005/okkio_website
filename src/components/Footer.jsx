import React from 'react';
import { Link } from 'react-router-dom'; // Import Link


const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-text-light py-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-semibold text-dark-text mb-3">NEED HELP</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            <li><Link to="/contact" className="hover:text-candy-red">Contact Us</Link></li>
            <li><Link to="/track-order" className="hover:text-candy-red">Track Order</Link></li>
            <li><Link to="/returns" className="hover:text-candy-red">Returns & Refunds</Link></li>
            <li><Link to="/faqs" className="hover:text-candy-red">FAQs</Link></li>
            <li><Link to="/account" className="hover:text-candy-red">My Account</Link></li>
            <li><a href="#" className="hover:text-candy-red">COD Available</a></li>
            <li><a href="#" className="hover:text-candy-red">30 Days Easy Returns & Exchanges</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark-text mb-3">COMPANY</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            <li><Link to="/about" className="hover:text-candy-red">About Us</Link></li>
            <li><a href="#" className="hover:text-candy-red">Investor Relation</a></li>
            <li><a href="#" className="hover:text-candy-red">Careers</a></li>
            <li><a href="#" className="hover:text-candy-red">Gift Vouchers</a></li>
            <li><a href="#" className="hover:text-candy-red">Community Initiatives</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark-text mb-3">MORE INFO</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            <li><Link to="/terms" className="hover:text-candy-red">T&C</Link></li>
            <li><Link to="/privacy" className="hover:text-candy-red">Privacy Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-candy-red">Sitemap</Link></li>
            <li><a href="#" className="hover:text-candy-red">Get Notified</a></li>
            <li><a href="#" className="hover:text-candy-red">Blogs</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-dark-text mb-3">100% Secure Payment:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Placeholder for payment logos */}
            <img src="/assets/placeholder_payment.png" alt="Google Pay" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="Amazon Pay" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="MobiKwik" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="Paytm" className="h-6" />
          </div>
          <h4 className="font-semibold text-dark-text mb-3">Shipping Partners:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Placeholder for shipping logos */}
            <img src="/assets/placeholder_shipping.png" alt="DTDC" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Delhivery" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Ecom Express" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Xpress Bees" className="h-6" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-6 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">© Okkio.in 2025</div>
        <div className="mb-4 md:mb-0">email@okkio.in</div>
        <div className="mb-4 md:mb-0">9991236789</div>
      </div>
    </footer>
  );
};

export default Footer;