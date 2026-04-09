// panels/FranchisePanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FranchisePanel = ({ onNext }) => {
  return (
    <div className="panel franchise-panel" onClick={onNext}>
      <div className='fr-head-grid'>
          <div className="franchise-chart">
            {[40, 70, 100].map((height, index) => (
              <motion.div
                key={index}
                id={`bar${height}`}
                className="chart-bar"
                style={{ height: `${height}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              />
            ))}
          </div>

        <div>
          <h2 style={{ fontSize: 50, textAlign: 'center', marginBottom: 10, marginTop: 70, color: 'black' }}>
            Почему не бесплатно
          </h2>
          <p style={{ textAlign: 'center', color: '#666'}}>
            Иногда часть расходов остается на тебе.<br />
            И это нормально
          </p>
        </div>


        </div>
        <div className='fr-cond-grid'>
        <motion.div
          className='fr-cond-plus'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p>Размер этой части может отличаться.</p>
          <p>Это зависит от условий</p>
        </motion.div>

        <div className="franchise-list">
          <div className="franchise-item">
            
            <span>Представь: ремонт стоит 15 000 ₽</span>
          </div>
          <div className="franchise-item">
            
            <span>Ты платишь 1 500 ₽, остальное — страховая</span>
          </div>
          <div className="franchise-item">
           
            <span>Эта часть называется франшиза</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchisePanel;