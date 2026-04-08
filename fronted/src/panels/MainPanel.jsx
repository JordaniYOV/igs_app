// panels/HeroPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MainPanel = ({ onNext }) => {
  return (
    <div className='panel main-panel-container'>
      <div className="main-panel-shadow">
        <nav className="navbar">
          <div className="logo">✓</div>
          <div className="nav-links">
            <a href="#about">о проекте</a>
            <a href="#included">что включено</a>
            <a href="#why">почему мы</a>
            <a href="#reviews">отзывы</a>
            <a href="#contacts">контакты</a>
          </div>
        </nav>
        <div className="panel main-panel">
          <motion.h1
            className="main-panel-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Сколько стоит<br />твой обычный день?
          </motion.h1>

          <motion.p
            className="main-panel-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Утро нового дня, все как обычно...<br />
            Но события могут развиваться по неожиданному сценарию. Посмотрим, что будет?
          </motion.p>

        </div>
      </div>
      <motion.button
        className="btn-primary pulsing"
        onClick={onNext}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Начать день
      </motion.button>
    </div>
  );
};

export default MainPanel;