import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Zap, FileText, HelpCircle, Info } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Automated Support',
    description: 'Round-the-clock automated assistance for your customers'
  },
  {
    icon: Zap,
    title: 'Instant Response Times',
    description: 'Immediate answers to customer inquiries'
  },
  {
    icon: MessageCircle,
    title: 'Smart Ticket Management',
    description: 'Intelligent handling and routing of support tickets'
  },
  {
    icon: FileText,
    title: 'Technical Guides',
    description: 'Comprehensive documentation and user guides'
  },
  {
    icon: HelpCircle,
    title: 'Troubleshooting',
    description: 'Automated problem diagnosis and solutions'
  },
  {
    icon: Info,
    title: 'Product Information',
    description: 'Detailed product and service information'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
           The solution
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Customer Support</h3>
              <p className="text-gray-300 text-center max-w-2xl">
                Our advanced support system that handles customer inquiries,
               provides technical documentation, and assists with troubleshooting automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-800/50 p-4 rounded-lg border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-accent-blue" />
                    </div>
                    <h4 className="text-white font-bold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}