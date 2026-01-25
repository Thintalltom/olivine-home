import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import livingRoom from '../assets/living-room.jpeg'
export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F9F8F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative">

            <div className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <img
                src={livingRoom}
                alt="Modern Living Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />

            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-[1px] border-[#556B2F]/30 -z-0 hidden lg:block" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl -z-0" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="text-center lg:text-left">

            <span className="text-[#556B2F] font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2F3325] mb-6 leading-tight">
              Redefining the Art of{' '}
              <span className="italic text-[#C5A059]">Short Stays</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              At Olivine Homes, we believe that a short stay shouldn't mean
              compromising on the comfort and warmth of a home. Our curated
              collection of properties in Lagos offers a sanctuary for
              travelers, business professionals, and families alike.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every detail is thoughtfully considered, from the premium
              furnishings to the concierge-level service. Whether you're here
              for a weekend getaway or an extended business trip, we ensure your
              stay is seamless, stylish, and memorable.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#556B2F] font-bold tracking-widest uppercase hover:gap-4 transition-all duration-300 group">

              Learn More
              <ArrowRight className="w-4 h-4 group-hover:text-[#C5A059]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}