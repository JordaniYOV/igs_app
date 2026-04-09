import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './main.css';

// Компоненты панелей
import MainPanel from '../panels/MainPanel.jsx';
import StoryPanel from '../panels/StoryPanel.jsx';
import CostPanel from '../panels/CostPanel.jsx';
import OptionsPanel from '../panels/OptionsPanel.jsx';
import InsurancePanel from '../panels/InsurancePanel.jsx';
import ComparisonPanel from '../panels/ComparisonPanel.jsx';
import SituationsPanel from '../panels/SituationsPanel.jsx';
import ConditionsPanel from '../panels/ConditionsPanel.jsx';
import FranchisePanel from '../panels/FranchisePanel.jsx';
import AskPanel from '../panels/AskPanel.jsx';

function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(() => {
        return Number(localStorage.getItem('selectedOption')) || 1;
    });
    // const [resetKey, setResetKey] = useState(0);

     useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption);
  }, [selectedOption]);

    const containerRef = useRef(null);

    const steps = [
        { id: 'hero', component: MainPanel },
        { id: 'story', component: StoryPanel },
        { id: 'cost', component: CostPanel },
        { id: 'options', component: OptionsPanel },
        { id: 'comparison', component: ComparisonPanel },
        { id: 'situations', component: SituationsPanel },
        { id: 'conditions', component: ConditionsPanel },
        { id: 'franchise', component: FranchisePanel },
        { id: 'insurance', component: InsurancePanel },
        {id: 'ask', component: AskPanel}
    ];

    const handleNext = (stepIndex) => {
        if (stepIndex > currentStep) {
            setCurrentStep(stepIndex);
            setTimeout(() => {
                const element = document.getElementById(`panel-${stepIndex}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    const handleOptionSelect = () => {
        if (selectedOption === 1) {
            setSelectedOption(2);
        } else if (selectedOption === 2) {
            setSelectedOption(3)
        } else if (selectedOption === 3) {
            setSelectedOption(1)
        }
       location.reload();
    }
    return (
        <div className="app" ref={containerRef}>
            <div className="panels-container" id="pan-con" >
                <AnimatePresence mode="wait">
                    {steps.map((step, index) => {
                        if (index > currentStep) return null;

                        const Component = step.component;
                        return (
                            <motion.div
                                key={step.id}
                                id={`panel-${index}`}
                                className="panel-wrapper"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: index === currentStep ? 0.2 : 0
                                }}
                            >
                                <Component
                        
                                    onNext={() => handleNext(index + 1)}
                                    onOptionSelect={handleOptionSelect}
                                    selectedOption={selectedOption}
                                    isActive={index === currentStep}
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default App;