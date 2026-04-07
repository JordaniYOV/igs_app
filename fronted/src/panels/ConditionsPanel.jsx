// panels/ConditionsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ConditionsPanel = ({ onNext }) => {
  const conditions = [
    {
      icon: '✓',
      title: 'Это случайность',
      desc: 'ущерб причинен не специально'
    },
    {
      icon: '✓',
      title: 'Нет нарушений',
      desc: 'например, грубой неосторожности'
    },
    {
      icon: '✓',
      title: 'Подходят условия',
      desc: 'случай прописан в договоре'
    }
  ];

  return (
    <div className="panel conditions-panel">
      <motion.div 
        className="speech-bubble"
        style={{ 
          position: 'absolute',
          right: 20,
          top: 20
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        ВОТ ТУТ НЮАНС..
      </motion.div>

      <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 10 }}>
        Когда страховка сработает
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: 40 }}>
        Страховка — это не магия. Она работает при соблюдении определенных условий
      </p>

      <div className="conditions-grid">
        {conditions.map((cond, index) => (
          <motion.div
            key={cond.title}
            className="condition-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="condition-icon"
              style={{
                background: '#22c55e',
                color: 'white'
              }}
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {cond.icon}
            </motion.div>
            <h3 style={{ marginBottom: 10 }}>{cond.title}</h3>
            <p style={{ color: '#666', fontSize: 14 }}>{cond.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.button 
        className="btn-secondary"
        onClick={onNext}
        style={{ margin: '40px auto', display: 'block' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        Как оформить
      </motion.button>
    </div>
  );
};

export default ConditionsPanel;