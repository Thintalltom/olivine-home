import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
export function Home() {
  return (
    <div className="bg-[#F9F8F4] min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>);

}