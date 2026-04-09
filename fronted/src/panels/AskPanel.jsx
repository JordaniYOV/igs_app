import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import piggy from '../assets/piggy.svg'

const API_URL = import.meta.env.DEV 
  ? 'http://localhost:8000' 
  : '';

const AskPanel = ({ onNext }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [mode, setMode] = useState('child');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { text: input, sender: 'user'};
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/igs/chat?question=${encodeURIComponent(input)}&mode=${mode}`, {
                method: 'POST',
            });
            const data =  await response.json();

            const botMsg = {
                text: data.answer,
                sender: 'bot',
                sources: data.sources
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (err) {
            setMessages(prev => [...prev, {
                text: 'Ошибка соединения 😔',
                sender: 'bot',
            }]);
        }

        setLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="panel ask-panel" onClick={onNext}>
            <h2>ГОТОВО! ЗАЩИТА ОТ РИСКОВ У ТЕБЯ ЕСТЬ</h2>
            <div className='ask-grid'>
                <img src={piggy} />
                <div className='chat-ai'>
                    <div className='chat-head'>
                        <h1>Есть вопросы?</h1>
                        <h1>Спроси у чат-бота</h1>
                    </div>
                    <div className="chat-main">
                        <div className="messages">
                            {/* {messages.length === 0 && (
                                <div className="welcome">
                                    <h3>Привет! 👋</h3>
                                    <p>Задай вопрос про страхование:</p>
                                    <div className="examples">
                                        <button onClick={() => setInput('Что такое КАСКО?')}>Что такое КАСКО?</button>
                                        <button onClick={() => setInput('Объясни франшизу')}>Объясни франшизу</button>
                                        <button onClick={() => setInput('Зачем нужно ОСАГО?')}>Зачем нужно ОСАГО?</button>
                                    </div>
                                </div>
                            )} */}

                            {messages.map((msg, i) => (
                                <div key={i} className={`message ${msg.sender}`}>
                                    <div className="bubble">
                                        <div className="text">{msg.text}</div>
                                        {msg.sources && (
                                            <div className="sources">
                                                Источники: {msg.sources.map(s => s.source).join(', ')}
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="message bot">
                                    <div className="bubble loading">
                                        <span>.</span><span>.</span><span>.</span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Ввод */}
                        <div className="input-area">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Напиши вопрос..."
                                disabled={loading}
                            />
                            <button onClick={sendMessage} disabled={loading || !input.trim()}>
                                {loading ? '⏳' : '➤'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskPanel;