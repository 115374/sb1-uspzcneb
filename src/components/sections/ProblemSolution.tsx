import React from 'react';
import { motion } from 'framer-motion';
import { WrenchIcon, Users, MessagesSquare, AlertCircle } from 'lucide-react';

const challenges = [
  {
    icon: WrenchIcon,
    title: 'Recurring Machine Issues',
    impacts: [
      'Repetitive problem-solving cycles',
      'Increased downtime',
      'Strain on technical resources'
    ]
  },
  {
    icon: Users,
    title: 'Knowledge Gaps',
    impacts: [
      'Training inefficiencies',
      'Operational mistakes',
      'Production delays'
    ]
  },
  {
    icon: MessagesSquare,
    title: 'Inefficient Support',
    impacts: [
      'Extended resolution times',
      'Support team overload',
      'Customer frustration'
    ]
  }
];

export default function ProblemSolution() {
  return (
    <section id="challenges" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">
            Facing repeated challenges with your products/services?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industrial businesses face significant hurdles when deploying machinery across different industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-900">{challenge.title}</h3>
              
              <ul className="space-y-2">
                {challenge.impacts.map((impact, impactIndex) => (
                  <li key={impactIndex} className="flex items-center gap-2 text-gray-600">
                    <AlertCircle className="w-4 h-4 text-accent-orange" />
                    {impact}
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What if these repetitive issues could be handled quickly, efficiently, and without overloading your support team? Stay ahead with AI-powered automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}