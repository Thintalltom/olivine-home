import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';
import Logo from '../assets/Logo.jpeg';
import { FaSnapchatGhost } from "react-icons/fa";
// TikTok icon component
const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Snapchat icon component
const SnapchatIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.206 0c-2.434 0-4.75.847-6.52 2.385C4.273 3.581 3.44 5.012 3.44 6.544c0 1.532.833 2.963 2.246 4.159 1.413 1.196 3.729 2.043 6.52 2.043s5.107-.847 6.52-2.043c1.413-1.196 2.246-2.627 2.246-4.159 0-1.532-.833-2.963-2.246-4.159C16.956.847 14.64 0 12.206 0zm0 1.5c2.067 0 4.033.72 5.537 2.026 1.504 1.306 2.257 2.518 2.257 3.518 0 1-.753 2.212-2.257 3.518C16.239 11.78 14.273 12.5 12.206 12.5s-4.033-.72-5.537-2.026C5.165 9.168 4.412 7.956 4.412 6.956c0-1 .753-2.212 2.257-3.518C8.173 2.22 10.139 1.5 12.206 1.5zm-4.5 15c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
  </svg>
);
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1a1c14] text-white pt-20 pb-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Olivine Homes Logo" className="h-8 w-auto" />
              <span className="font-serif text-xl font-bold tracking-wide">
                Olivine Homes
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing exceptional short-stay experiences in Lagos. Comfort,
              luxury, and convenience in every stay.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/olivine_homes?igsh=MndscGdib3prczV5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-gray-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Olivine_Homes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-gray-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@olivine.homes?_r=1&_t=ZS-93MeI5Z3chQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-gray-400">
                <TikTokIcon />
              </a>
              <a
                href="https://www.snapchat.com/add/olivine_homes?share_id=kBI1f5VsGBY&locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-gray-400">
                <FaSnapchatGhost />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#C5A059]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
              'Home',
              'About Us',
              'Our Properties',
              'Services',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 group">

                    <span className="w-1 h-1 bg-[#C5A059] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#C5A059]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>
                  123 Victoria Island,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>+234 816 893 4133</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>helloolivine.homes@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="font-serif text-lg mb-6 text-[#C5A059]">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-gray-600" />

              <button className="w-full bg-[#C5A059] text-white px-4 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#b08d45] transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Olivine Homes. All rights
            reserved.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>);

}