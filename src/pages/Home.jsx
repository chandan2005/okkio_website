import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSlider from '../components/HeroSlider';
import Products from '../components/Products';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-100"> {/* Overall background for the page */}
      <Navbar />
      <div className="flex pt-16"> {/* pt-16 to account for fixed Navbar height */}
        <Sidebar />
        <div className="flex-1 md:ml-64 bg-white px-4 py-8"> {/* Main content area with white background */}
          <HeroSlider />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">NEW ARRIVALS</h2>
          <Products />
          <Categories />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;