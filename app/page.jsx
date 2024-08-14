'use client';

import Image from 'next/image';
import React from 'react';
import Hero from './components/landingpage/hero';
import Feature from './components/landingpage/features';

const LandingPage = () => {
  return (
    <div className="pt-20 flex flex-col">
      <Hero />
      <section id="features">
        <Feature />
      </section>
    </div>
  );
};

export default LandingPage;
