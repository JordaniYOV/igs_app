// panels/CostPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CostPanel = ({ onNext }) => {
  const costs = [
    { item: 'Ремонт смартфона', price: '12 000 ₽' },
    { item: 'Такси до сервисного центра', price: '500 ₽' },
    { item: 'Силиконовый чехол', price: '1 000 ₽' },
    { item: 'Кабель для зарядки', price: '1 500 ₽' },
  ];

  return (
    <div className="panel cost-panel">
      <motion.div 
        className="speech-bubble"
        style={{ 
          position: 'relative', 
          display: 'inline-block',
          marginBottom: 30,
          fontSize: 20
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        КТО БУДЕТ ПЛАТИТЬ???
      </motion.div>

      <div className="cost-header">
        <p style={{ fontSize: 18, marginBottom: 10 }}>Сегодняшний день обошелся тебе</p>
        <motion.h2 
          className="cost-amount"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          52 000 ₽
        </motion.h2>
        <p style={{ color: '#666', marginTop: 10 }}>
          Даже если это случайность, кто-то все равно за нее заплатит
        </p>
      </div>

      <motion.div 
        className="cost-breakdown"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {costs.map((cost, index) => (
          <motion.div 
            key={index}
            className="cost-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <span>{cost.item}</span>
            <span style={{ fontWeight: 600 }}>{cost.price}</span>
          </motion.div>
        ))}
        <div className="cost-item">
          <span>Итого:</span>
          <span>15 000₽</span>
        </div>
      </motion.div>

      <motion.button 
        className="btn-secondary"
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Какие варианты
      </motion.button>
    </div>
  );
};

export default CostPanel;