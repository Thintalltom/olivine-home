import React from 'react';
import { motion } from 'framer-motion';
import LivingRoom from '../assets/living-room.jpeg';
import LivingArea from '../assets/FrontBuilding.jpeg'
import Kitchen from '../assets/Kitchen.jpeg';
import Toilet from '../assets/Toilet.jpeg';
import Dinning from '../assets/Dinning.jpeg';
const images = [
  {
    src: LivingRoom,
    alt: 'Luxury Sitting Room',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: Kitchen,
    alt: 'Modern Kitchen',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: LivingArea,
    alt: 'Living Area',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: Toilet,
    alt: 'Bathroom',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: Dinning,
    alt: 'Dining Area',
    span: 'md:col-span-1 md:row-span-1'
  }];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#2F3325] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              Our Portfolio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Curated Spaces
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Take a glimpse into our thoughtfully designed spaces, where modern
            aesthetics meet functional luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`relative overflow-hidden group ${img.span}`}>

              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-serif text-xl">{img.alt}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}