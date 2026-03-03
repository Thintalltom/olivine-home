import React from 'react';
import { motion } from 'framer-motion';
import FrontPage from '../assets/front-page.jpeg'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={FrontPage}
          alt="Luxury Interior"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">

          Welcome to
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">

          Olivine Homes
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">

          Experience the perfect blend of luxury and comfort. We offer stylish,
          fully-fitted homes tailored for leisure, business, or extended stays.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfc-lV2QwJeA6_Qdeo_uHDstthnjyaNiXZ0_sMRkgRmqMJdWw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-[#2F3325] transition-all duration-300 text-center">
            Book Now
          </a>
          <a 
            href="https://wa.me/2348168934133?text=Hi, I would like to contact you"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#2F3325] font-bold tracking-widest uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-center">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2">

        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 50]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear'
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white" />

        </div>
      </motion.div>
    </section>);

}