// panels/OptionsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OptionsPanel = ({ onOptionSelect }) => {
  const options = [
    {
      id: 'self',
      title: 'Я',
      subtitle: 'из своих карманных денег',
      avatar: '👤',
      speech: 'МОЖНО НЕ НАДО...'
    },
    {
      id: 'parents',
      title: 'Родители',
      subtitle: 'помогут или заплатят',
      avatar: '👨‍👩‍👧',
      speech: null
    }
  ];

  return (
    <div className="panel options-panel">
      {options.map((option, index) => (
        <motion.div
          key={option.id}
          className="option-card"
          onClick={() => onOptionSelect(option.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {option.speech && (
            <motion.div 
              className="speech-bubble"
              style={{ 
                position: 'absolute',
                top: -20,
                right: 20,
                fontSize: 14
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {option.speech}
            </motion.div>
          )}
          <div className="option-avatar" style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 50
          }}>
            {option.avatar}
          </div>
          <div className="option-content">
            <h3>{option.title}</h3>
            <p>{option.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OptionsPanel;