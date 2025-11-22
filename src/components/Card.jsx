import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            className={`glass-panel ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 'var(--spacing-lg)' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
