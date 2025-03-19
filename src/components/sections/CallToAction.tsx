import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  const handleBookDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/book-demo');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-primary-900"
          >
       Save time and money – Book your free demo now!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            Book a free demo and discover how we can improve your business operations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/book-demo"
              onClick={handleBookDemo}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-orange text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-accent-orange/20 transform hover:scale-105 transition-all duration-300 group"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}