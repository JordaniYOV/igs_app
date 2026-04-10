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

import fight from '../assets/fight.svg'
import fightstart from '../assets/fightstart.svg'
import svet from '../assets/svet.svg'
import book from '../assets/book.svg'
import buddy from '../assets/buddy.svg'

import som from '../assets/som.svg'
import crack from '../assets/crack.svg'
import pack from '../assets/pack.svg'

const StoryPanel = ({ onNext, selectedOption }) => {

  let story_temp;
  if (selectedOption === 1) {
    story_temp = {
      img1: bike,
      img2: boy,
      bubble: cloud2,
      onimage: 'Утро. Ты идешь в школу', 
      txt: {f: 'Ты убираешь телефон в карман', s: 'Карман рвется', t: 'Телефон выпадает и разбивается'},
      choices: [
        { id: 'pocket', icon: phoneicon, text: 'Уберу телефон в карман' },
        { id: 'rain', icon: cloudicon, text: 'Пошел дождь' },
        { id: 'slippery', icon: iceicon, text: 'На улице скользко' },
      ]
    };
  } else if (selectedOption === 2) {
    story_temp = {
      img1: fight,
      img2: fightstart,
      bubble: cloud2,
      onimage: 'Долгожданные соревнования',
       txt: {f: 'Полуфинал - один на один', s: 'Секунда до победы', t: 'Вдруг удар... и руку пронзает боль'},
      choices: [
        { id: 'pocket', icon: svet, text: 'Уверен в успехе' },
        { id: 'rain', icon: book, text: 'Изучил тактику' },
        { id: 'slippery', icon: buddy, text: 'Команда за спиной' },
      ]
    };
  } else if (selectedOption === 3) {
    story_temp = {
      img1: som,
      img2: crack,
      bubble: cloud2,
      onimage: 'Ты опаздываешь в школу',
      txt: {f: 'Первым уроком контрольная по физике', s: 'Ты пересекаешь дорогу во дворе', t: 'И налетаешь на припаркованную машину'},
      choices: [
        { id: 'pocket', icon: phoneicon, text: 'Не отвлекаясь' },
        { id: 'rain', icon: cloudicon, text: 'Мокрый снег' },
        { id: 'slippery', icon: pack, text: 'Очень спешу' },
      ]
    };
  }

  const story = story_temp 


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
          <img src={story.img1}></img>
          <motion.div
            className="speech-bubble cloud1"
            style={{ top: 110, left: 100 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}>
            <img src={Cloud1}></img>
            <div>ЖИЗА...</div>
          </motion.div>
          <motion.div className="story-text on-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}>
            {story.onimage}
          </motion.div>
        </motion.div>
        <motion.div className="story-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}>
          <p>{story.txt.f}</p>
          <p>{story.txt.s}</p>
          <p>{story.txt.t}</p>
        </motion.div>
      </div>


      <div className="comic-panel-2">
        <motion.div className='comic-image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}>
          <img src={story.img2}></img>
          <motion.div className="speech-bubble cloud2" style={{ top: 330, right: 300 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}>
            <img src={story.bubble}></img>
            <div>ПОЧТИ ПОЛУЧИЛОСЬ...</div>
          </motion.div>
        </motion.div>
        {story.choices.map((choice, index) => (
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