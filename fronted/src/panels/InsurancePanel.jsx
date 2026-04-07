// panels/InsurancePanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const InsurancePanel = ({ onNext }) => {
  return (
    <div className="panel insurance-panel">
      <motion.div 
        className="insurance-icon floating"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        🛡️
      </motion.div>
      
      <motion.h2 
        style={{ fontSize: 42, marginBottom: 10 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Страховка
      </motion.h2>
      
      <motion.p 
        style={{ color: '#666', marginBottom: 30 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        если она есть
      </motion.p>
      
      <motion.button 
        className="btn-secondary"
        onClick={onNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Узнать нюансы
      </motion.button>
    </div>
  );
};

export default InsurancePanel;