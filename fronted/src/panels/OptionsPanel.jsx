// panels/OptionsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import me from '../assets/me.svg'
import parents from '../assets/parents.svg'
import insurance from '../assets/insurance.svg'
import cloud4 from '../assets/cloud4.svg'
import cloud5 from '../assets/cloud5.svg'
import cloud6 from '../assets/cloud6.svg'

const OptionsPanel = ({ onOptionSelect, onNext }) => {
  const options = [
    {
      id: 'self',
      title: 'Я',
      subtitle: 'из своих карманных денег',
      avatar: me,
      pos: 700,
      icon: cloud4

    },
    {
      id: 'parents',
      title: 'Родители',
      subtitle: 'помогут или заплатят',
      avatar: parents,
      pos: -650,
      icon: cloud5
    },
    {
      id: 'insurance',
      title: 'Страховка',
      subtitle: 'если она есть',
      avatar: insurance,
      pos: 700,
      icon: cloud6
    }
  ];

  return (
    <div className="panel options-panel" onClick={onNext}>
      {options.map((option, index) => (
        <motion.div
          key={option.id}
          className="option-card"
          id={option.id}
          // onClick={() => onOptionSelect(option.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        // whileHover={{ scale: 1.02 }}
        // whileTap={{ scale: 0.98 }}
        >

          <motion.div
            className="speech-bubble"
            style={{ left: option.pos }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src={option.icon}></img>
          </motion.div>

          <img src={option.avatar}></img>
          <div className="option-content">
            <h1>{option.title}</h1>
            <p>{option.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OptionsPanel;