import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { sampleProducts } from '../sampleData';

const Cart = () => {
  const cartItems = sampleProducts.slice(0, 3).map(p => ({ ...p, quantity: 1 })); // Add quantity to sample products

  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity), 0);
  const shipping = 50; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Your Items</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center gap-4">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border rounded-lg p-2">
                  <FaMinus className="cursor-pointer hover:text-candy-red" />
                  <span>{item.quantity}</span>
                  <FaPlus className="cursor-pointer hover:text-candy-red" />
                </div>
                <FaTrash className="cursor-pointer text-gray-500 hover:text-candy-red" />
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="mt-4 pt-4 border-t space-y-4">
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Coupon Code" className="w-full p-3 border rounded-lg" />
                    <button className="bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-candy-red">Apply</button>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Gift Card" className="w-full p-3 border rounded-lg" />
                    <button className="bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-candy-red">Apply</button>
                </div>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-dark-text text-white py-3 rounded-lg mt-4 hover:bg-candy-red transition-colors duration-300">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;