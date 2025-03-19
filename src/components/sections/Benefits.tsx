import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, ShieldCheck, MessageCircle, Target, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'No more waiting - customers get immediate assistance'
  },
  {
    icon: TrendingUp,
    title: 'Scale Support',
    description: 'Handle unlimited conversations simultaneously'
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Automatically identify and capture qualified leads'
  },
  {
    icon: BarChart,
    title: 'Growth Analytics',
    description: 'Track and optimize your business growth metrics'
  },
  {
    icon: ShieldCheck,
    title: 'Consistent Quality',
    description: 'Deliver reliable support with absolute precision'
  },
  {
    icon: MessageCircle,
    title: '24/7 Availability',
    description: 'Support that never sleeps or takes breaks'
  }
];

export default function Benefits() {
  return (
    <section 
      id="benefits" 
      className="py-20 bg-primary-800 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The Benefits of the solution
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The immmense value you will gain over time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <benefit.icon className="w-12 h-12 text-accent-blue mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}