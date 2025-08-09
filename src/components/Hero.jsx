import React from 'react';


const Hero = () => {
  return (
    <section className="bg-primary-background py-20 px-6 text-center">
      <h1 className="text-4xl leading-10 font-bold mb-6 text-dark-text md:text-6xl md:leading-none">Welcome to Okkio</h1>
      <p className="text-lg leading-7 mb-6 text-dark-text md:text-xl md:leading-7">Fashion that speaks for you</p>
      <button className="px-6 py-3 bg-dark-text text-white rounded-md hover:bg-gray-700">Shop Now</button>
    </section>
  );
};

export default Hero;