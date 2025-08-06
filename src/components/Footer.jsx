import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">NEED HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">COD Available</a></li>
            <li><a href="#" className="hover:text-white">30 Days Easy Returns & Exchanges</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">COMPANY</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Investor Relation</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Gift Vouchers</a></li>
            <li><a href="#" className="hover:text-white">Community Initiatives</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">MORE INFO</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">T&C</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
            <li><a href="#" className="hover:text-white">Get Notified</a></li>
            <li><a href="#" className="hover:text-white">Blogs</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-white mb-3">100% Secure Payment:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Placeholder for payment logos */}
            <img src="/assets/placeholder_payment.png" alt="Google Pay" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="Amazon Pay" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="MobiKwik" className="h-6" />
            <img src="/assets/placeholder_payment.png" alt="Paytm" className="h-6" />
          </div>
          <h4 className="font-semibold text-white mb-3">Shipping Partners:</h4>
          <div className="flex flex-wrap gap-2">
            {/* Placeholder for shipping logos */}
            <img src="/assets/placeholder_shipping.png" alt="DTDC" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Delhivery" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Ecom Express" className="h-6" />
            <img src="/assets/placeholder_shipping.png" alt="Xpress Bees" className="h-6" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">© Okkio.in 2025</div>
        <div className="mb-4 md:mb-0">email@okkio.in</div>
        <div>9991236789</div>
      </div>
    </footer>
  );
};

export default Footer;