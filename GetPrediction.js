import React from 'react';
import './pageStyles.css';

export default function GetPrediction() {
    return (
        <div className="prediction-body">
            <div className="prediction-container">
                <h1>Get Prediction</h1>
                <p>Discover valuable insights into your kidney health with our advanced prediction tool. Our cutting-edge algorithm analyzes various features to provide personalized predictions and assessments.</p>
                <p>Gain a deeper understanding of your kidney function and potential risks. Our prediction model takes into account factors such as medical history, lifestyle habits, and diagnostic tests to deliver accurate assessments.</p>
                <p>Ready to take control of your kidney health? Start by completing our comprehensive questionnaire. Receive instant feedback and actionable insights to help you make informed decisions about your well-being.</p>
                <button className="prediction-button">Start Prediction</button>
            </div>
        </div>
    );
}
