import React from 'react';
import { motion } from 'framer-motion';

export function TrustedBy() {
  return (
    <div className="mt-12">
      <p className="text-gray-400 text-sm mb-4 text-center md:text-left">Empowering businesses worldwide</p>
      <div className="flex justify-center md:justify-start space-x-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-gray-400">Building the future of customer support</span>
        </motion.div>
      </div>
    </div>
  );
}