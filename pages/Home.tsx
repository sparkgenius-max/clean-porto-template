
import React from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Works />
      <Services />
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
