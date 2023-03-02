import axios from 'axios';
import React, { useState } from 'react';

const DEFAULT_ADVICE = {
    id: 117,
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
}

export const AdviceCard = () => {
    const [advice, setAdvice] = useState(DEFAULT_ADVICE);

    const handleNewAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                const data = res.data.slip;
                setAdvice(data);
            })
    }
    return (
        <div className='card-container'>
            <div className='card-content'>
                <h1>Advice #{advice.id}</h1>
                <p>{advice.advice}</p>
                <img className="divider" src="./images/pattern-divider-desktop.svg" alt="divider" />
                
            </div>
            <button className='random-btn' 
                onClick={handleNewAdvice}>
                    <img src='./images/icon-dice.svg' alt='dice-cube' />
                </button>
        </div>
    )
}