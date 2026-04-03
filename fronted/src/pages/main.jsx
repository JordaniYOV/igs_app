import { motion } from 'framer-motion'

import Button from '../components/button'
import './main.css'
import shield from '../assets/shield.svg'

const MainPage = ({}) => {
    return (
        <div className="main-page-container">
            <nav>
                <div className="nav-icon">
                    <img src={shield} alt="shield icon" />
                </div>
                <div className="nav-buttons">
                    <span>о проекте</span>
                    <span>что включено</span>
                    <span>почему мы</span>
                    <span>отзывы</span>
                    <span>контакты</span>
                </div>
            </nav>
            <div className="main-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Солько стоит<br/>
                    твой обычный день<br/>
                    день?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Утро нового дня, всё как обычно.<br/>
                    Но события могут развиваться<br/>
                    по неожиданному сценарию.<br/>
                    Посмотрим, что будет?
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                >
                 <Button>начать</Button>
            </motion.div>
            <motion.div  
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className='baloon'/>
        </div>
    )
}

export default MainPage
