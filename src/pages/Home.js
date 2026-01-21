import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDishes from '../components/home/FeaturedDishes';
import PizzaBuilderTeaser from '../components/home/PizzaBuilderTeaser';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedDishes />
      <PizzaBuilderTeaser />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Newsletter />
    </div>
  );
};

export default Home;
