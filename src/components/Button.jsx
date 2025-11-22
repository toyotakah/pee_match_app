import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'urgent':
        return {
          background: 'var(--color-urgent)',
          color: '#fff',
          boxShadow: '0 4px 15px var(--color-urgent-glow)',
        };
      case 'relaxed':
        return {
          background: 'var(--color-relaxed)',
          color: '#000',
          boxShadow: '0 4px 15px var(--color-relaxed-glow)',
        };
      case 'secondary':
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'var(--color-text)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        };
      default:
        return {
          background: 'var(--color-primary)',
          color: '#fff',
        };
    }
  };

  return (
    <motion.button
      className={`btn ${className}`}
      style={getVariantStyles()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
