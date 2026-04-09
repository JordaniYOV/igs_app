// panels/CostPanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import phone from '../assets/crackphone.svg'
import cloud3 from '../assets/cloud3.svg'
import panic from '../assets/panic.svg'
import broken from '../assets/broken.svg'

const CostPanel = ({ onNext, selectedOption, onOptionSelect}) => {

  let story_let; 
  if (selectedOption === 1) { 
    story_let = {
      img: phone,
      cost: 15000,
      costs: [
        { item: 'Ремонт смартфона', price: '12 000 ₽' },
    { item: 'Такси до сервисного центра', price: '500 ₽' },
    { item: 'Силиконовый чехол', price: '1 000 ₽' },
    { item: 'Кабель для зарядки', price: '1 500 ₽' },]
    }
  } else if (selectedOption === 2) {
    story_let = {
      img: broken,
      cost: 32500,
      costs: [
        { item: 'Транспартировка', price: '2 500 ₽' },
    { item: 'Осмотр и рентген', price: '8 000 ₽' },
    { item: 'Процедуры, фиксация ортез', price: '10 000 ₽' },
    { item: 'Перенос поездки, проживающие', price: '12 000 ₽' },]
    }
  } else if (selectedOption === 3) { 
    story_let = {
      img: panic,
      cost: 45000,
      costs: [
        { item: 'Подготовка и шлифовка', price: '45 000 ₽' },
    { item: 'Покраска кузова', price: '15 000 ₽' },
    { item: 'Работа мастера', price: '8 000 ₽' },
    { item: 'Расходный материалы', price: '6 500 ₽' },]
    }
  }

  const story = story_let

  return (
    <div className="panel cost-panel" onClick={onNext}>
      <img src={story.img} />
      <div>
        <div className="cost-header">
          <motion.div
            className="speech-bubble cloud3"
            style={{top: -215, left: 230}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}>
            <img src={cloud3}></img>
          </motion.div>
          <p style={{ fontSize: 24, marginBottom: 10, color: 'black' }}>Сегодняшний день обошелся тебе</p>
          <motion.h2
            className="cost-amount"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {story.cost}₽
          </motion.h2>
          <p style={{ color: '#666', marginTop: 10 }}>
            Даже если это случайность, кто-то все равно за нее заплатит
          </p>
        </div>

        <motion.div
          className="cost-breakdown"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {story.costs.map((cost, index) => (
            <motion.div
              key={index}
              className="cost-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <span>{cost.item}</span>
              <span style={{ fontWeight: 600 }}>{cost.price}</span>
            </motion.div>
          ))}
          <div className="cost-item">
            <span>Итого:</span>
            <span>{story.cost}₽</span>
          </div>
        </motion.div>
         <motion.button
                className="btn-primary pulsing"
                onClick={() => onOptionSelect()}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ bottom: -30}}
              >
                Посмотреть другое
              </motion.button>
      </div>
    </div>
  );
};

export default CostPanel;