import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDishes from '../components/home/FeaturedDishes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;
