import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UserAccount from './pages/UserAccount';
import PolicyPage from './pages/PolicyPage';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage'; // Import CategoryPage
import Layout from './components/Layout'; // Import the Layout component
import Profile from './pages/Profile'; // Import Profile

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          {/* Policy and Info Pages */}
          <Route path="/contact" element={<PolicyPage title="Contact Us" content={<><p>This is the contact us page content.</p><p>You can reach us at support@okkio.in</p></>} />} />
          <Route path="/track-order" element={<PolicyPage title="Track Your Order" content={<><p>Enter your order ID to track your shipment.</p><input type="text" placeholder="Order ID" style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }} /></>} />} />
          <Route path="/returns" element={<PolicyPage title="Returns & Refunds" content={<><p>Details about our return and refund policy.</p><ul><li>Item must be unused.</li><li>Return within 30 days.</li></ul></>} />} />
          <Route path="/faqs" element={<PolicyPage title="Frequently Asked Questions" content={<><p>Find answers to common questions here.</p><p>Q: How do I place an order?</p><p>A: Add items to cart and proceed to checkout.</p></>} />} />
          <Route path="/about" element={<PolicyPage title="About Us" content={<><p>Learn more about Okkio.in and our mission.</p><p>We aim to provide the best fashion.</p></>} />} />
          <Route path="/terms" element={<PolicyPage title="Terms & Conditions" content={<><p>Please read our terms and conditions carefully.</p></>} />} />
          <Route path="/privacy" element={<PolicyPage title="Privacy Policy" content={<><p>Your privacy is important to us.</p><p>Read about how we handle your data.</p></>} />} />
          <Route path="/sitemap" element={<PolicyPage title="Sitemap" content={<><p>Explore all pages on our website.</p><ul><li>Home</li><li>Shop</li><li>Account</li></ul></>} />} />

          {/* Add other routes here as you build more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
