// panels/ComparisonPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import fall from '../assets/fall.svg'
import cloud7 from '../assets/cloud7.svg'
import doc from '../assets/doc.svg'
import mech from '../assets/mech.svg'

const ComparisonPanel = ({ onNext, selectedOption, onOptionSelect }) => {
  let story_let;
  if (selectedOption === 1) {
    story_let = {
      img: fall,
      cost: 15000,
      ins: 2000,
    }
  } else if (selectedOption === 2) {
    story_let = {
      img: doc,
      cost: 32500,
      ins: 10000,
    }
  } else if (selectedOption === 3) {
    story_let = {
      img: mech,
      cost: 45000,
      ins: 10000,
    }
  }

  const story = story_let

  return (
    <div className="panel comparison-panel">

      <div className="comparison-head">
        <p>Ну что давай сравним?</p>
        <p className='under'>Все зависит не от случая, а от того, готов ли ты к нему</p>
      </div>
      <div className="comparison-grid">
        <motion.div
          className="speech-bubble cloud7"
          style={{ top: -30, left: 300 }}
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
              <div className="comparison-price">{story.cost} ₽</div>
            </motion.div>
            <motion.div
              className="comparison-card with"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Со страховкой</h3>
              <div className="comparison-price">0-{story.ins} ₽</div>

            </motion.div>
          </div>
          <p style={{ color: '#666' }}>
            Ты не избежал ситуации, но ты можешь уменьшить расходы
          </p>
        </div>
        <img src={story.img} />
      </div>
      <div>

        <motion.button
          className="btn-primary pulsing choose-btn"
          onClick={() => onOptionSelect()}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ bottom: -30, left: -150}}
        >
          Другой день
        </motion.button>
        <motion.button
          className="btn-primary pulsing choose-btn"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ bottom: -30, right: -150}}
        >
          Решать проблему
        </motion.button>
      </div>

    </div>
  );
};

export default ComparisonPanel;