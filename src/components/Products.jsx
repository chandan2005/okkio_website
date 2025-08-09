import React from 'react';

const Products = ({ products }) => {
  if (!products || !Array.isArray(products)) {
    return <div className="text-center text-gray-600">No products to display.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border border-gray-200 rounded-2xl shadow-md p-4 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
          <div className="overflow-hidden rounded-2xl">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold text-dark-text">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
          <button className="mt-4 w-full bg-dark-text text-white py-2 rounded-lg hover:bg-candy-red transition-colors duration-300">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
