import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  const handleBookDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/book-demo');
  };

  return (
    <section id="hero" className="min-h-screen bg-paper flex items-center justify-center py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-mono bg-gradient-to-r from-accent-blue to-accent-orange bg-clip-text text-transparent"
          >
            Better business growth, customer satisfaction and operational efficiency 
            Guaranteed!
          </motion.h1>

          <p className="text-lg md:text-xl mb-12 font-mono text-gray-600 leading-relaxed">
            We build support agents designed for industrial automation businesses         
          </p>
        
          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="/book-demo" 
              onClick={handleBookDemo}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-orange text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-accent-orange/20 transform hover:scale-105 transition-all duration-300 group"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}