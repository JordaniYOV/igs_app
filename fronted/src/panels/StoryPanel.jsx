// panels/StoryPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const StoryPanel = ({ onNext }) => {
  const choices = [
    { id: 'pocket', icon: '📱', text: 'Уберу телефон в карман' },
    { id: 'rain', icon: '🌧️', text: 'Пошел дождь' },
    { id: 'slippery', icon: '🧊', text: 'На улице скользко' },
  ];

  return (
    <div className="panel story-panel">
      <div className="comic-panel">
        <div className="comic-image">
          <div className="speech-bubble" style={{ top: 20, left: 20 }}>
            ЖИЗЛ...
          </div>
          <div className="speech-bubble" style={{ bottom: 80, right: 20 }}>
            ПОЧТИ ПОЛУЧИЛОСЬ...
          </div>
          {/* Здесь можно добавить изображение */}
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: '50%', 
            transform: 'translateX(-50%)',
            width: '60%',
            height: '80%',
            background: 'url(/api/placeholder/400/320) center/contain no-repeat'
          }} />
        </div>
        <div className="story-text">
          <strong>Утро. Ты идешь в школу</strong>
          <p style={{ marginTop: 10 }}>Ты убираешь телефон в карман</p>
          <p>Карман рвется</p>
          <p>Телефон выпадает и разбивается</p>
        </div>
      </div>

      <div className="choices-panel">
        <motion.div 
          className="speech-bubble floating"
          style={{ position: 'relative', marginBottom: 20, alignSelf: 'flex-end' }}
        >
          КТО БУДЕТ ПЛАТИТЬ???
        </motion.div>
        
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            className="choice-btn"
            onClick={onNext}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="choice-icon">{choice.icon}</span>
            <span>{choice.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StoryPanel;