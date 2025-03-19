import React from 'react';
import { motion } from 'framer-motion';
import { GearIcon } from '../icons/GearIcon';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GearIcon className="h-8 w-8 text-accent-blue" />
              <span className="text-xl font-space-grotesk font-bold bg-gradient-to-r from-accent-blue to-accent-orange bg-clip-text text-transparent">
                Ypma Automation
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Boosting businesses with intelligent automation solutions.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@ypmaautomation.com</li>
              <li>+31 6 15 61 82 47</li>
              <li>7522CC Enschede</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 ypmaautomation.com</p>
        </div>
      </div>
    </footer>
  );
}