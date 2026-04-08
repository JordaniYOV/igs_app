// panels/OptionsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import me from '../assets/me.svg'
import parents from '../assets/parents.svg'
import insurance from '../assets/insurance.svg'
import cloud4 from '../assets/cloud4.svg'

const OptionsPanel = ({ onOptionSelect, onNext }) => {
  const options = [
    {
      id: 'self',
      title: 'Я',
      subtitle: 'из своих карманных денег',
      avatar: me,
      speech: 'МОЖНО НЕ НАДО...'
    },
    {
      id: 'parents',
      title: 'Родители',
      subtitle: 'помогут или заплатят',
      avatar: parents,
      speech: null
    },
    {
      id: 'insurance',
      title: 'Страховка',
      subtitle: 'если она есть',
      avatar: insurance,
      speech: null
    }
  ];

  return (
    <div className="panel options-panel">
      {options.map((option, index) => (
        <motion.div
          key={option.id}
          id={option.id}
          className="option-card"
          // onClick={() => onOptionSelect(option.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        // whileHover={{ scale: 1.02 }}
        // whileTap={{ scale: 0.98 }}
        >
          {option.speech && (
            <motion.div
              className="speech-bubble"
              style={{
                position: 'absolute',
                top: -40,
                right: -280,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img src={cloud4}></img>
            </motion.div>
          )}
          <img src={option.avatar}></img>
          <div className="option-content">
            <h1>{option.title}</h1>
            <p>{option.subtitle}</p>
          </div>
        </motion.div>
      ))}
      <motion.button
        className="btn-primary comic-btn pulsing"
        onClick={onNext}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{bottom: 90}}
      >
       Узнать нюансы
      </motion.button>
    </div>
  );
};

export default OptionsPanel;