import React from 'react';

const categories = [
  { name: "Men", image: "/assets/placeholder_category.png" }, // Changed to local path
  { name: "Women", image: "/assets/placeholder_category.png" }, // Changed to local path
  { name: "Accessories", image: "/assets/placeholder_category.png" }, // Changed to local path
];

const Categories = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="rounded overflow-hidden shadow hover:shadow-lg">
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;