import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleProducts } from '../sampleData';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);

  const cartItems = sampleProducts.slice(0, 2).map(p => ({ ...p, quantity: Math.floor(Math.random() * 3) + 1 }));
  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Shipping Address</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
              <input type="text" placeholder="Address Line 1" className="w-full p-3 border rounded-lg" />
              <input type="text" placeholder="Address Line 2 (Optional)" className="w-full p-3 border rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" />
                <input type="text" placeholder="State" className="w-full p-3 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Zip Code" className="w-full p-3 border rounded-lg" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
              </div>
              <button type="button" className="w-full bg-dark-text text-white py-3 rounded-lg mt-4 hover:bg-candy-red" onClick={() => setActiveStep(2)}>Proceed to Payment</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Payment Options</h2>
            <div className="space-y-2">
              <label className="flex items-center p-3 border rounded-lg"><input type="radio" name="payment" className="mr-2" /> Cash on Delivery</label>
              <label className="flex items-center p-3 border rounded-lg"><input type="radio" name="payment" className="mr-2" /> Razorpay</label>
              <label className="flex items-center p-3 border rounded-lg"><input type="radio" name="payment" className="mr-2" /> UPI</label>
            </div>
            <div className="flex justify-between mt-6">
              <button type="button" className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400" onClick={() => setActiveStep(1)}>Back</button>
              <button type="button" className="bg-dark-text text-white py-3 px-6 rounded-lg hover:bg-candy-red" onClick={() => setActiveStep(3)}>Review Order</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Order Summary</h2>
            <div className="space-y-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
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
            <div className="mt-4 pt-4 border-t space-y-2">
                <div className="flex justify-between"><span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span> <span>₹{shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-lg"><span>Total</span> <span>₹{total.toFixed(2)}</span></div>
            </div>
            <div className="flex justify-between mt-6">
                <button type="button" className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400" onClick={() => setActiveStep(2)}>Back</button>
                <button type="button" className="w-full bg-dark-text text-white py-3 rounded-lg hover:bg-candy-red">Place Order</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            {renderStepContent()}
        </div>
    </div>
  );
};

export default Checkout;
