import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import Products from '../components/Products';
import Categories from '../components/Categories';
import { sampleProducts } from '../sampleData';

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const newArrivalsData = sampleProducts.slice(0, 4);
      setNewArrivals(newArrivalsData);

      const featuredProductsData = sampleProducts.filter(p => p.isFeatured);
      setFeaturedProducts(featuredProductsData);

      setLoading(false);
    } catch (err) {
      console.error("Error processing sample data:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div>
      <HeroSlider products={featuredProducts} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">NEW ARRIVALS</h2>
        <Products products={newArrivals} />
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">FEATURED PRODUCTS</h2>
        <Products products={featuredProducts} />
      </div>
      <Categories />
    </div>
  );
};

export default Home;