// panels/InsurancePanel.jsx
import React from 'react';
import { motion } from 'framer-motion';

import number1 from '../assets/number1.svg'
import number2 from '../assets/number2.svg'
import number3 from '../assets/number3.svg'
import number4 from '../assets/number4.svg'
import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.svg'
import step4 from '../assets/step4.svg'


const InsurancePanel = ({ onNext }) => {
  const steps = [
    {id: 'dfe', title: 'Выбрать, что важно защитить', icon: number1, img: step1, desc: 'Вместе с родителями вы решаете, что может пригодится именно тебе (спорт, поездки, техника)'},
    {id: 'By', title: 'Выбирате страховую компанию', icon: number2, img: step2, desc: 'Из множество предолжений вы можете выбрать страховую, уусловия которойподходит именно вам'},
    {id: 'y', title: 'Оформить страховку', icon: number3, img: step3, desc: 'Родители оформляют договор со страховой компанией (это можно сделать онлайн или в офисе'},
    {id: '40', title: 'Быть подготовленным', icon: number4, img: step4, desc: 'Если что-то случится, можно обратиться в страховую и получить помощь или компенсацию'},
  ]
  return (
    <div className="panel insurance-panel" onClick={onNext}>
      <motion.h1
        style={{ fontSize: 50, marginBottom: 25, color: 'black' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Как оформить страховку
      </motion.h1>

      <motion.p
        style={{ color: '#666', marginBottom: 30, fontSize:20 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Всего четыре простых шага до защиты
      </motion.p>

      <div className='insurance-steps'>
        {steps.map((step, index) => (
          <div className='signup-step' index={index} id={step.id}>
            <img className='speech-bubble' style={{left: 15}} src={step.icon}/>
            <h3>{step.title}</h3>
            <img className='step-img' src={step.img}/>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePanel;