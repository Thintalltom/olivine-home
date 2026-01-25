import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.jpeg'
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    {
      name: 'Home',
      href: '#'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Services',
      href: '#features'
    },
    {
      name: 'Gallery',
      href: '#gallery'
    },
    {
      name: 'Contact',
      href: '#contact'
    }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F9F8F4] shadow-md py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase hover:text-[#C5A059] transition-colors ${isScrolled ? 'text-[#2F3325]' : 'text-white/90'}`}>

              {link.name}
            </a>
          )}
          <a
            href="https://wa.me/2348168934133?text=Hi, I would like to book a service"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 text-sm font-bold tracking-widest cursor-pointer uppercase transition-all duration-300 ${isScrolled ? 'bg-[#556B2F] text-white hover:bg-[#3E4F22]' : 'bg-[#C5A059] text-white hover:bg-[#B08D45]'}`}>

            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ?
            <X className={isScrolled ? 'text-[#2F3325]' : 'text-white'} /> :

            <Menu className={isScrolled ? 'text-[#2F3325]' : 'text-white'} />
          }
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen &&
            <motion.div
              initial={{
                opacity: 0,
                x: '100%'
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: '100%'
              }}
              transition={{
                type: 'tween',
                duration: 0.3
              }}
              className="fixed inset-0 bg-[#F9F8F4] z-40 flex flex-col items-center justify-center gap-8 md:hidden">

              {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#2F3325] hover:text-[#556B2F]">

                  {link.name}
                </a>
              )}
              <a
                href="https://wa.me/2348168934133?text=Hi, I would like to book a service"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#556B2F] cursor-pointer text-white font-bold tracking-widest uppercase mt-4">
                Book Now
              </a>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.nav>);

}