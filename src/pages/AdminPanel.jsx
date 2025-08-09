import React from 'react';

import { FaBars, FaSearch, FaUser, FaShoppingCart, FaHeart, FaPlus, FaUpload, FaDownload, FaBell, FaEdit, FaTrash } from 'react-icons/fa';

const AdminPanel = () => {
  const products = [
    { id: 1, name: "iPhone 15 Pro", sku: "IPH15P001", price: "₹1,24,900", stock: 45, status: "IN STOCK" },
    // Add more product data here
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary-background">
      <div className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center gap-4">
          <FaBars className="text-xl cursor-pointer text-dark-text" />
          <img src="/logo-removebg-preview.png" alt="Okkio Logo" className="h-8" />
          <span className="ml-4 font-medium text-dark-text">View product list</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input type="text" placeholder="What are you looking for?" className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm outline-none w-64 text-dark-text" />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaHeart className="text-xl cursor-pointer text-dark-text" />
          <FaShoppingCart className="text-xl cursor-pointer text-dark-text" />
          <FaUser className="text-xl cursor-pointer text-dark-text" />
        </div>
      </div>

      <div className="flex-grow p-8 pt-24 bg-primary-background">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-dark-text mb-2">Inventory Management</h1>
          <p className="text-gray-600">Manage your products and track inventory for Okkio.in</p>
        </div>

        <div className="flex flex-wrap gap-8 mb-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 flex-grow-2">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center text-dark-text"><span>248</span>Total Products</div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center text-dark-text"><span>32</span>Low Stock Items</div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center text-dark-text"><span>8</span>Out of Stock</div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center text-dark-text"><span>₹1,24,580</span>Total Inventory Value</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex-grow min-w-[200px]">
            <h2 className="text-xl font-bold text-dark-text mb-4">Quick Actions</h2>
            <div className="flex items-center gap-2 py-3 text-gray-600 cursor-pointer hover:text-candy-red"><FaUpload /> Bulk Import</div>
            <div className="flex items-center gap-2 py-3 text-gray-600 cursor-pointer hover:text-candy-red"><FaDownload /> Export Report</div>
            <div className="flex items-center gap-2 py-3 text-gray-600 cursor-pointer hover:text-candy-red"><FaBell /> Low Stock Alert</div>
            <div className="flex items-center gap-2 py-3 text-gray-600 cursor-pointer hover:text-candy-red"><FaEdit /> Manage Categories</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-dark-text mb-4">Products</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <input type="text" placeholder="Search products..." className="flex-grow p-2 border border-gray-300 rounded-md text-dark-text" />
            <select className="flex-grow p-2 border border-gray-300 rounded-md text-dark-text"><option>All Categories</option></select>
            <select className="flex-grow p-2 border border-gray-300 rounded-md text-dark-text"><option>All Status</option></select>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-candy-red"><FaPlus /> Add New Product</button>
          </div>

          <div className="flex flex-col gap-4">
            {products.map(product => (
              <div key={product.id} className="flex items-center gap-4 border border-gray-200 p-4 rounded-lg text-dark-text">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0"></div>
                <div className="flex-grow">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">SKU: {product.sku}</p>
                  <p className="text-sm text-gray-600">Price: {product.price}</p>
                  <p className="text-sm text-gray-600">Stock: {product.stock} units</p>
                </div>
                <div className="font-bold text-green-500">{product.status}</div>
                <div className="flex gap-2">
                  <FaEdit className="text-lg cursor-pointer text-gray-600 hover:text-candy-red" />
                  <FaTrash className="text-lg cursor-pointer text-gray-600 hover:text-candy-red" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-600">
            <FaUpload className="text-4xl mb-4" />
            <p>Upload Product Images</p>
            <p>Drag and drop images here or click to browse</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:bg-candy-red">Choose Files</button>
          </div>
        </div>
      </div>

      <div className="bg-footer-background text-footer-text-light py-8 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="font-semibold text-dark-text mb-3">NEED HELP</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">COD Available</a></li>
              <li><a href="#">30 Days Easy Returns & Exchanges</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">COMPANY</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Investor Relation</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Gift Vouchers</a></li>
              <li><a href="#">Community Initiatives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">MORE INFO</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="#">T&C</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Get Notified</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-dark-text mb-3">100% Secure Payment:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <img src="/assets/placeholder_payment.png" alt="Google Pay" className="h-6" />
              <img src="/assets/placeholder_payment.png" alt="Amazon Pay" className="h-6" />
              <img src="/assets/placeholder_payment.png" alt="MobiKwik" className="h-6" />
              <img src="/assets/placeholder_payment.png" alt="Paytm" className="h-6" />
            </div>
            <h4 className="font-semibold text-dark-text mb-3">Shipping Partners:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <img src="/assets/placeholder_shipping.png" alt="DTDC" className="h-6" />
              <img src="/assets/placeholder_shipping.png" alt="Delhivery" className="h-6" />
              <img src="/assets/placeholder_shipping.png" alt="Ecom Express" className="h-6" />
              <img src="/assets/placeholder_shipping.png" alt="Xpress Bees" className="h-6" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-footer-text-light md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">© Okkio.in 2025</div>
          <div className="mb-4 md:mb-0">email@okkio.in</div>
          <div className="mb-4 md:mb-0">9991236789</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
