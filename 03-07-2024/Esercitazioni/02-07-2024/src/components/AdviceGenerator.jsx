import React, { useState } from 'react';
import styles from './AdviceGenerator.module.css';
import advices from '../Advices';
import diceIcon from '../assets/icon-dice.svg';
import dividerPattern from '../assets/pattern-divider-desktop.svg';

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState('');

    const getRandomAdvice = () => {
        const randomIndex = Math.floor(Math.random() * advices.length);
        setAdvice(advices[randomIndex]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.adviceBox}>
                <p className={styles.adviceText}>{advice || "Click the dice to get advice!"}</p>
                <img src={dividerPattern} alt="Pattern Divider" className={styles.divider} />
                <button onClick={getRandomAdvice} className={styles.diceButton}>
                    <img src={diceIcon} alt="Dice Icon" />
                </button>
            </div>
        </div>
    );
};

export default AdviceGenerator;
