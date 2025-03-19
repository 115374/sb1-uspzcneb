import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Building2 } from 'lucide-react';

const approaches = [
  {
    icon: Code,
    title: 'Do It Yourself',
    drawbacks: [
      'Steep learning curve', 
      'High risk of errors',
      'Losing focus on the business'
    ]
  },
  {
    icon: Users,
    title: 'Hire Staff',
    drawbacks: [
      'Expensive',
      'Slow hiring/training',
      'Limited scalability'
    ]
  },
  {
    icon: Building2,
    title: 'Hire Big Agencies',
    drawbacks: [
      'Generic solutions',
      'High costs',
      'Lack of industry focus'
    ]
  }
];

export default function AutomationApproaches() {
  return (
    <section className="py-20 bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            So How to Automate?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Many businesses try these common approaches to automation, but each comes with huge problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mb-4">
                <approach.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{approach.title}</h3>
              
              <ul className="space-y-3">
                {approach.drawbacks.map((drawback, drawbackIndex) => (
                  <li key={drawbackIndex} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                    {drawback}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            There's a better way to approach automation - one that doesn't require massive investment, technical expertise, or risking your business operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}