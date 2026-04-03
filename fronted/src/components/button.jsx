import { motion } from 'framer-motion';

const baseStyle = {
    padding: '15px 40px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
};

const variants = {
    primary: {
        background: '#1e3a8a',
        color: 'white',
    },
    outline: {
        background: 'transparent',
        border: '2px solid #1e3a8a',
        color: '#1e3a8a',
    },
    orange: {
        background: '#FF8C00',
        color: 'white',
    },
    card: {
        background: '#FFD700',
        color: '#1a1a1a',
        borderRadius: '20px',
        padding: '20px',
        minWidth: '120px',
        textAlign: 'center',
    }
};
const Button = ({ children, onClick, variant = 'primary', style = {} }) => {

    const selectedVariant = variants[variant] || variants.primary;
    
    const buttonStyle = {
        ...baseStyle,
        ...selectedVariant,
        ...style  
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            style={buttonStyle}
        >
            {children}
        </motion.button>
    );
};

export default Button