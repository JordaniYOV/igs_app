// panels/SituationsPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SituationsPanel = ({ onNext }) => {
  const situations = [
    { title: 'Здоровье', icon: '🏥' },
    { title: 'Ответственность', icon: '🚗' },
    { title: 'Имущество', icon: '📱' },
  ];

  return (
    <div className="panel situations-panel">
      <motion.div 
        className="speech-bubble"
        style={{ 
          position: 'absolute',
          right: 40,
          top: 20
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        ОКАЙ...
      </motion.div>

      <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 10 }}>
        Ситуации, которые стоят денег
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: 40 }}>
        В жизни случается разное. Но можно подобрать подходящую страховку
      </p>

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
            <div className="situation-image" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60
            }}>
              {sit.icon}
            </div>
            <div className="situation-title">{sit.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SituationsPanel;