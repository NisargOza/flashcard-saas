'use client';

import Image from 'next/image';
import React from 'react';
import Hero from './components/landingpage/Hero';
import Feature from './components/landingpage/Features';
import CTA from './components/landingpage/CTA';

const LandingPage = () => {
  return (
    <div className="pt-20 flex flex-col">
      <Hero />
      <section id="features">
        <Feature />
        <CTA />
      </section>
    </div>
  );
};

export default LandingPage;
