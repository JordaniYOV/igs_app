// panels/ComparisonPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComparisonPanel = ({ onNext }) => {
  return (
    <div className="panel comparison-panel">
      <motion.div 
        className="speech-bubble"
        style={{ 
          position: 'relative',
          margin: '0 auto 30px',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        РАЗНИЦА ЕСТЬ...
      </motion.div>

      <div className="comparison-grid">
        <motion.div 
          className="comparison-card without"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Без страховки</h3>
          <div className="comparison-price">15 000 ₽</div>
          <p style={{ color: '#666' }}>
            Ты не избежал ситуации, но ты можешь уменьшить расходы
          </p>
        </motion.div>

        <motion.div 
          className="comparison-card with"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Со страховкой</h3>
          <div className="comparison-price">0-2 000 ₽</div>
          <p style={{ color: '#666' }}>
            Ты не избежал ситуации, но ты можешь уменьшить расходы
          </p>
        </motion.div>
      </div>

      <div className="nav-buttons">
        <motion.button 
          className="btn-secondary"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          OK
        </motion.button>
        <motion.button 
          className="btn-secondary"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          Почему не бесплатно
        </motion.button>
      </div>
    </div>
  );
};

export default ComparisonPanel;