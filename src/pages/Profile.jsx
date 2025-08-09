import React, { useState } from 'react';
import { FaUser, FaKey, FaMapMarkerAlt, FaMobileAlt, FaCreditCard, FaBox, FaUndo } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInformation />;
      case 'password':
        return <UpdatePassword />;
      case 'address':
        return <UpdateAddress />;
      case 'mobile':
        return <UpdateMobile />;
      case 'payments':
        return <PaymentOptions />;
      case 'orders':
        return <OrderHistory />;
      case 'refunds':
        return <RefundStatus />;
      default:
        return <ProfileInformation />;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Settings</h2>
          <ul className="space-y-2">
            <li onClick={() => setActiveTab('profile')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'profile' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaUser className="mr-3" /> Profile</li>
            <li onClick={() => setActiveTab('password')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'password' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaKey className="mr-3" /> Update Password</li>
            <li onClick={() => setActiveTab('address')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'address' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaMapMarkerAlt className="mr-3" /> Update Address</li>
            <li onClick={() => setActiveTab('mobile')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'mobile' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaMobileAlt className="mr-3" /> Update Mobile No.</li>
            <li onClick={() => setActiveTab('payments')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'payments' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaCreditCard className="mr-3" /> Payment Options</li>
            <li onClick={() => setActiveTab('orders')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'orders' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaBox className="mr-3" /> Order History</li>
            <li onClick={() => setActiveTab('refunds')} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeTab === 'refunds' ? 'bg-gray-800 text-white' : 'hover:text-candy-red'}`}><FaUndo className="mr-3" /> Refund Status</li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Placeholder Components
const ProfileInformation = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
    <div className="space-y-4">
      <div><span className="font-semibold">Name:</span> John Doe</div>
      <div><span className="font-semibold">Email:</span> john.doe@example.com</div>
    </div>
  </div>
);

const UpdatePassword = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Update Password</h2>
    <form className="space-y-4">
      <input type="password" placeholder="Current Password" className="w-full p-3 border rounded-lg" />
      <input type="password" placeholder="New Password" className="w-full p-3 border rounded-lg" />
      <input type="password" placeholder="Confirm New Password" className="w-full p-3 border rounded-lg" />
      <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-candy-red">Update Password</button>
    </form>
  </div>
);

const UpdateAddress = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Update Address</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Address Line 1" className="w-full p-3 border rounded-lg" />
      <input type="text" placeholder="Address Line 2" className="w-full p-3 border rounded-lg" />
      <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" />
      <input type="text" placeholder="State" className="w-full p-3 border rounded-lg" />
      <input type="text" placeholder="Zip Code" className="w-full p-3 border rounded-lg" />
      <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-candy-red">Update Address</button>
    </form>
  </div>
);

const UpdateMobile = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Update Mobile Number</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Current Mobile Number" className="w-full p-3 border rounded-lg" />
      <input type="text" placeholder="New Mobile Number" className="w-full p-3 border rounded-lg" />
      <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-candy-red">Update Mobile</button>
    </form>
  </div>
);

const PaymentOptions = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
    <p>No payment methods saved.</p>
    <button className="mt-4 bg-gray-800 text-white p-3 rounded-lg hover:bg-candy-red">Add New Card</button>
  </div>
);

const OrderHistory = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Order History</h2>
    <p>You have no past orders.</p>
  </div>
);

const RefundStatus = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Refund Status</h2>
    <p>You have no active refunds.</p>
  </div>
);

export default Profile;
