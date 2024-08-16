"use client";

import React from "react";
import Hero from "./components/landingpage/Hero";
import Feature from "./components/landingpage/Features";
import CTA from "./components/landingpage/CTA";

const LandingPage = () => {
  return (
    <div className="flex flex-col pt-20">
      <Hero />
      <section id="features">
        <Feature />
        <CTA />
      </section>
    </div>
  );
};

export default LandingPage;
