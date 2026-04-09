// panels/ConditionsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import cloud9 from '../assets/cloud9.svg'
import vandal from '../assets/vandal.svg'
import park from '../assets/park.svg'
import deal from '../assets/deal.svg'
'✓'
const ConditionsPanel = ({ onNext }) => {
  const conditions = [
    {
      icon: vandal,
      title: 'Это случайность',
      desc: 'ущерб причинен не специально'
    },
    {
      icon: park,
      title: 'Нет нарушений',
      desc: 'например, грубой неосторожности'
    },
    {
      icon: deal,
      title: 'Подходят условия',
      desc: 'случай прописан в договоре'
    }
  ];

  return (
    <div className="panel conditions-panel" onClick={onNext}>
      <motion.div 
        className="speech-bubble"
        style={{ 
          right: -55,
          top: -30
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <img src={cloud9} />
      </motion.div>

      <h2 className='cond-head'>
        Когда страховка сработает
      </h2>
      <p className='cond-min'>
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
            <motion.img 
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              src={cond.icon}
            >
            </motion.img>
            <h3 style={{ color: '#000000', marginBottom: 10 }}>{cond.title}</h3>
            <p style={{ color: '#000000', fontSize: 14 }}>{cond.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConditionsPanel;