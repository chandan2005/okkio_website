import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import { FaUserCircle, FaClipboardList, FaHeart, FaSignOutAlt } from 'react-icons/fa';

const UserAccount = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'orders', 'wishlist'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy User Data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Anytown, State, 12345",
  };

  // Dummy Orders Data
  const orders = [
    { id: 'ORD001', date: '2023-10-26', total: 3500, status: 'Delivered', items: ['Sneakers', 'T-Shirt'] },
    { id: 'ORD002', date: '2023-11-15', total: 1200, status: 'Processing', items: ['Perfume'] },
  ];

  // Dummy Wishlist Data
  const wishlistItems = [
    { id: 1, name: "Denim Jacket Classic", price: 1299, img: "/assets/placeholder_product.png" },
    { id: 4, name: "Vintage Graphic Tee", price: 599, img: "/assets/placeholder_product.png" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="p-4 rounded-lg shadow-sm bg-gray-50">
            <h2 className="text-3xl font-bold text-dark-text mb-6">My Profile</h2>
            <div className="mb-4 text-dark-text">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="mb-4 text-dark-text">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-4 text-dark-text">
              <strong>Phone:</strong> {user.phone}
            </div>
            <div className="mb-4 text-dark-text">
              <strong>Address:</strong> {user.address}
            </div>
            <button className="bg-dark-text text-white px-6 py-3 border-none rounded-md font-bold cursor-pointer mt-6 hover:bg-gray-700">Edit Profile</button>
          </div>
        );
      case 'orders':
        return (
          <div className="p-4 rounded-lg shadow-sm bg-gray-50">
            <h2 className="text-3xl font-bold text-dark-text mb-6">My Orders</h2>
            {orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {orders.map(order => (
                  <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between mb-2 font-bold text-dark-text">
                      <span>Order ID: <strong>{order.id}</strong></span>
                      <span>Date: {order.date}</span>
                    </div>
                    <div className="mb-2">
                      <p className="mb-1 text-gray-600">Items: {order.items.join(', ')}</p>
                      <p className="mb-1 text-gray-600">Total: ₹ {order.total.toFixed(2)}</p>
                      <p className="mb-1 text-gray-600">Status: <span className="font-bold text-green-500">{order.status}</span></p>
                    </div>
                    <button className="bg-gray-200 text-dark-text px-4 py-2 border-none rounded-md cursor-pointer mt-4 hover:bg-gray-300">View Details</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'wishlist':
        return (
          <div className="p-4 rounded-lg shadow-sm bg-gray-50">
            <h2 className="text-3xl font-bold text-dark-text mb-6">My Wishlist</h2>
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2" />
                    <h3 className="font-bold text-dark-text mb-1">{item.name}</h3>
                    <p className="text-gray-600 mb-4">₹ {item.price}</p>
                    <button className="bg-dark-text text-white px-4 py-2 border-none rounded-md cursor-pointer hover:bg-gray-700">Add to Cart</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex flex-grow pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-grow p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-text mb-8 text-center">My Account</h1>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0 w-full bg-gray-50 p-4 rounded-lg shadow-sm md:w-64">
              <button
                className={`flex items-center gap-3 w-full p-3 bg-transparent border-none text-left text-base font-medium text-dark-text cursor-pointer rounded-md hover:bg-gray-200 ${activeTab === 'profile' ? 'bg-dark-text text-white hover:bg-gray-700' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <FaUserCircle /> Profile Details
              </button>
              <button
                className={`flex items-center gap-3 w-full p-3 bg-transparent border-none text-left text-base font-medium text-dark-text cursor-pointer rounded-md hover:bg-gray-200 ${activeTab === 'orders' ? 'bg-dark-text text-white hover:bg-gray-700' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <FaClipboardList /> My Orders
              </button>
              <button
                className={`flex items-center gap-3 w-full p-3 bg-transparent border-none text-left text-base font-medium text-dark-text cursor-pointer rounded-md hover:bg-gray-200 ${activeTab === 'wishlist' ? 'bg-dark-text text-white hover:bg-gray-700' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <FaHeart /> My Wishlist
              </button>
              <button className="flex items-center gap-3 w-full p-3 bg-transparent border-none text-left text-base font-medium text-dark-text cursor-pointer rounded-md hover:bg-gray-200"><FaSignOutAlt /> Logout</button>
            </div>
            <div className="flex-grow bg-gray-50 p-6 rounded-lg shadow-sm">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;
