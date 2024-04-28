import React from 'react';
import './pageStyles.css';

export default function AboutUs() {
    return (
        <div className="aboutus-container">
            <div className="system-description">
                <h2>About Our System</h2>
                <p>Our Chronic Kidney Disease Prediction System is a cutting-edge platform that utilizes advanced machine learning algorithms to analyze various factors and provide accurate assessments of kidney function and potential risks.</p>
                <p>With our system, users can receive personalized predictions and insights about their kidney health, empowering them to take proactive measures for early intervention and personalized care.</p>
            </div>
            <div className="relevant-details">
                <h2></h2>
                <p>Our system incorporates state-of-the-art predictive technologies, constantly updated with the latest medical research and advancements in kidney disease management.</p>
                <p>We prioritize user privacy and data security, ensuring that all information provided is encrypted and handled with the utmost confidentiality.</p>
                <p>Additionally, our team of experts is dedicated to continuous improvement, collaborating with healthcare professionals to enhance the accuracy and effectiveness of our prediction models.</p>
            </div>
        </div>
    );
}

