'use client';

import React from 'react';
import Hero from './components/landingpage/hero.jsx';
import Feature from './components/landingpage/features.jsx';
import CTA from './components/landingpage/CTA';

const LandingPage = () => {
  return (
    <div className="flex flex-col pt-20">
      <Hero />
      <section id="features" className="pt-24">
        <Feature />
        <CTA />
      </section>
    </div>
  );
};

export default LandingPage;
