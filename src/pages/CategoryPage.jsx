import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sampleProducts } from '../sampleData';
import Products from '../components/Products';

const CategoryPage = () => {
  const { category } = useParams(); // Get category from URL parameter
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const filteredProducts = sampleProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      setProducts(filteredProducts);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [category]);

  if (loading) return <div className="text-center py-8">Loading {category} products...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-dark-text">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="text-center text-gray-600">No products found in this category.</div>
      )}
    </div>
  );
};

export default CategoryPage;