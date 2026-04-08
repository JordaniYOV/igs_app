// panels/ComparisonPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import fall from '../assets/fall.svg'
import cloud7 from '../assets/cloud7.svg'

const ComparisonPanel = ({ onNext }) => {
  return (
    <div className="panel comparison-panel" onClick={onNext}>

      <div className="comparison-head">
        <p>Ну что давай сравним?</p>
        <p className='under'>Все зависит не от случая, а от того, готов ли ты к нему</p>
      </div>
      <div className="comparison-grid">
      <motion.div 
        className="speech-bubble cloud7"
        style={{top: -30, left: 300}}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <img src={cloud7}></img>
      </motion.div>
        <div>

          <div className='comparison-cost'>

            <motion.div
              className="comparison-card without"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Без страховки</h3>
              <div className="comparison-price">15 000 ₽</div>
            </motion.div>
            <motion.div
              className="comparison-card with"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Со страховкой</h3>
              <div className="comparison-price">0-2 000 ₽</div>

            </motion.div>
          </div>
          <p style={{ color: '#666' }}>
            Ты не избежал ситуации, но ты можешь уменьшить расходы
          </p>
        </div>
        <img src={fall} />
      </div>

    </div>
  );
};

export default ComparisonPanel;