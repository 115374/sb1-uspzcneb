import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cog, Zap } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Discuss your needs and goals with our experts.'
  },
  {
    icon: Cog,
    title: 'Setup',
    description: 'Our experts integrate with your existing systems.'
  },
  {
    icon: Zap,
    title: 'Enjoy Automation',
    description: 'Let the system run and enjoy the ride!'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">
            How We Make It Easy for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth transition to our automation system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent-blue/20 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-900">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}