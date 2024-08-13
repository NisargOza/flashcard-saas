'use client';

import Image from 'next/image';
import React from 'react';
import Hero from './components/landingpage/hero';

const LandingPage = () => {
  return (
    <div className="pt-20 flex flex-col gap-4">
      <Hero />
    </div>
  );
};

export default LandingPage;
