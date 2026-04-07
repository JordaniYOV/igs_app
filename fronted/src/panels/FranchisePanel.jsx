// panels/FranchisePanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FranchisePanel = ({ onNext }) => {
  return (
    <div className="panel franchise-panel">
      <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 10 }}>
        Почему не бесплатно
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: 20 }}>
        Иногда часть расходов остается на тебе.<br />
        И это нормально
      </p>

      <div className="franchise-visual">
        <div className="franchise-chart">
          {[40, 70, 100].map((height, index) => (
            <motion.div
              key={index}
              className="chart-bar"
              style={{ height: `${height}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            />
          ))}
        </div>

        <motion.div 
          className="piggy-bank"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 40
          }}>
            🐷
          </div>
          <div style={{
            position: 'absolute',
            bottom: 20,
            right: -20,
            background: '#ffd93d',
            padding: '10px 20px',
            borderRadius: 20,
            border: '3px solid #000',
            fontWeight: 'bold',
            transform: 'rotate(-10deg)'
          }}>
            2000₽
          </div>
        </motion.div>
      </div>

      <div className="franchise-list">
        <div className="franchise-item">
          <div className="franchise-color" style={{ background: '#ffd93d' }} />
          <span>Представь: ремонт стоит 15 000 ₽</span>
        </div>
        <div className="franchise-item">
          <div className="franchise-color" style={{ background: '#8b5cf6' }} />
          <span>Ты платишь 1 500 ₽, остальное — страховая</span>
        </div>
        <div className="franchise-item">
          <div className="franchise-color" style={{ background: '#4f46e5' }} />
          <span><strong>Эта небольшая часть называется франшиза</strong></span>
        </div>
      </div>

      <motion.div 
        style={{
          background: '#f9f9f9',
          border: '3px solid #000',
          padding: 20,
          borderRadius: 12,
          marginTop: 20,
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p>Размер этой части может отличаться.</p>
        <p>Это зависит от условий</p>
      </motion.div>

      <motion.button 
        className="btn-secondary"
        onClick={() => window.location.reload()}
        style={{ margin: '40px auto', display: 'block' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Как оформить
      </motion.button>
    </div>
  );
};

export default FranchisePanel;