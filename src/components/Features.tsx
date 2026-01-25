import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Shield, Coffee, Tv, Car, Clock } from 'lucide-react';
const features = [
{
  icon: Wifi,
  title: 'High-Speed Internet',
  description:
  'Stay connected with enterprise-grade fiber optic internet suitable for remote work and streaming.'
},
{
  icon: Shield,
  title: '24/7 Security',
  description:
  'Your safety is paramount. Our properties feature round-the-clock security and controlled access.'
},
{
  icon: Coffee,
  title: 'Fully Fitted Kitchen',
  description:
  'Cook your favorite meals in a modern kitchen equipped with premium appliances and utensils.'
},
{
  icon: Tv,
  title: 'Smart Entertainment',
  description:
  'Enjoy your downtime with 4K Smart TVs, Netflix, and premium cable channels in every room.'
},
{
  icon: Car,
  title: 'Ample Parking',
  description:
  'Secure and spacious parking facilities available for you and your guests.'
},
{
  icon: Clock,
  title: '24/7 Power Supply',
  description:
  'Uninterrupted power supply ensuring your comfort and productivity are never compromised.'
}];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm block mb-4">

            Our Amenities
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="font-serif text-4xl md:text-5xl text-[#2F3325] mb-6">

            Everything You Need
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-gray-600 max-w-2xl mx-auto text-lg">

            We've thought of everything so you don't have to. Enjoy a
            hassle-free stay with our premium amenities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="group p-8 border border-gray-100 hover:border-[#556B2F]/30 bg-[#F9F8F4]/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm">

              <div className="w-12 h-12 bg-[#556B2F]/10 text-[#556B2F] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#556B2F] group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2F3325] mb-3 group-hover:text-[#C5A059] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}