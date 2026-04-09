// panels/SituationsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import cloud8 from '../assets/cloud8.svg'
import health from '../assets/health.svg'
import res from '../assets/res.svg'
import stuff from '../assets/stuff.svg'

const SituationsPanel = ({ onNext }) => {
  const situations = [
    { title: 'Здоровье', icon: health, txt1: "Занятия спортом", txt2: "заболел в другом городе", txt3: "упал с высоты"},
    { title: 'Ответственность', icon: res, txt1: "залил соседей", txt2: "поарапал чужую машину", txt3: "разбил стекло"},
    { title: 'Имущество', icon: stuff, txt1: "потерял наушники", txt2: "утопил телефон в бассейне", txt3: "украли велосипед"},
  ];

  return (
    <div className="panel situations-panel">
      <motion.div 
        className="speech-bubble"
        style={{ 
          right: 10,
          top: 50
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <img src={cloud8}/>
      </motion.div>
      <div className="situation-head">
        <p>Ситуации, которые стоят</p>
        <p>денег</p>
      </div>

      <div className="situations-grid">
        {situations.map((sit, index) => (
          <motion.div
            key={sit.title}
            className="situation-card"
            onClick={onNext}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="situation-title sit-head">{sit.title}</div>
            <img src={sit.icon}></img>
            <div className="situation-title">
                <p>{sit.txt1}</p>
                <p>{sit.txt2}</p>
                <p>{sit.txt3}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SituationsPanel;