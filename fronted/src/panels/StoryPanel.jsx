// panels/StoryPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import Cloud1 from '../assets/Cloud1.svg'
import boy from '../assets/boy.svg'
import bike from '../assets/bike.svg'
import cloud2 from '../assets/cloud2.svg'
import phoneicon from '../assets/phone_icon.svg'
import cloudicon from '../assets/cloud_icon.svg'
import iceicon from '../assets/ice_icon.svg'

const StoryPanel = ({ onNext }) => {
  const choices = [
    { id: 'pocket', icon: phoneicon, text: 'Уберу телефон в карман' },
    { id: 'rain', icon: cloudicon, text: 'Пошел дождь' },
    { id: 'slippery', icon: iceicon, text: 'На улице скользко' },
  ];

  return (
    <div className="panel story-panel" onClick={onNext}>
      <div className="comic-panel">
        <motion.div
          className="comic-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}>
          <img src={bike}></img>
          <motion.div
            className="speech-bubble cloud1"
            style={{ top: -30, left: 100 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{delay: 1.5, type: "spring"}}>
            <img src={Cloud1}></img>
            <div>ЖИЗА...</div>
          </motion.div>
          <motion.div className="story-text on-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}>
            Утро. Ты идешь в школу
          </motion.div>
        </motion.div>
        <motion.div className="story-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}>
          <p>Ты убираешь телефон в карман</p>
          <p>Карман рвется</p>
          <p>Телефон выпадает и разбивается</p>
        </motion.div>
      </div>


      <div className="comic-panel-2">
        <motion.div className='comic-image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}>
          <img src={boy}></img>
          <motion.div className="speech-bubble cloud2" style={{ top: 330, right: 300 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}>
            <img src={cloud2}></img>
            <div>ПОЧТИ ПОЛУЧИЛОСЬ...</div>
          </motion.div>
        </motion.div>
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            className="choice-btn"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 + index * 0.2 }}
          // whileHover={{ scale: 1.02, x: -5 }}
          // whileTap={{ scale: 0.98 }}
          >
            <img src={choice.icon} ></img>
            <span>{choice.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StoryPanel;