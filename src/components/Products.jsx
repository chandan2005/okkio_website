import React from 'react';

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: "₹499",
    image: "/assets/placeholder_product.png", // Changed to local path
  },
  {
    id: 2,
    name: "Casual Hoodie",
    price: "₹799",
    image: "/assets/placeholder_product.png", // Changed to local path
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₹1,299",
    image: "/assets/placeholder_product.png", // Changed to local path
  },
];

const Products = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Trending Products</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map(product => (
          <div key={product.id} className="border rounded shadow hover:shadow-lg p-4">
            <img src={product.image} alt={product.name} className="w-full mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;