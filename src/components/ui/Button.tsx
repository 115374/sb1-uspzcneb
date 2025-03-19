import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 font-medium";
  const variants = {
    primary: "bg-accent-orange text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20",
    secondary: "bg-accent-blue text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}