import React from 'react';


const categories = [
  { name: "Men", image: "/assets/placeholder_category.png" },
  { name: "Women", image: "/assets/placeholder_category.png" },
  { name: "Accessories", image: "/assets/placeholder_category.png" },
];

const Categories = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-dark-text">Shop by Category</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {categories.map((cat, index) => (
          <div key={index} className="card rounded overflow-hidden shadow hover:shadow-lg bg-white">
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold text-dark-text">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
