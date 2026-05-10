import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import OfferZone from '../components/OfferZone';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <OfferZone />
    </div>
  );
};

export default Home;
