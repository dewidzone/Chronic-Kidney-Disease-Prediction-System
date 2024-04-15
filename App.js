import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:5000/predict', data);
      setPrediction(response.data.prediction === 1 ? 'The model predicts that the patient has chronic kidney disease.' : 'The model predicts that the patient does not have chronic kidney disease.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    // Clear all input fields
    document.querySelectorAll('input').forEach(input => input.value = '');
    // Reset select field
    document.querySelector('select').selectedIndex = 0;
    // Clear prediction
    setPrediction('');
  };

  return (
    <div className="container">
      <h1>Chronic Kidney Disease Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" min="1" max="120" required />
        <label htmlFor="al">Albumin level in Urine:</label>
  <input type="number" name="al" step="0.1" min="0.0" max="5.0" required />

  <label htmlFor="su">Sugar level in Urine:</label>
  <input type="number" name="su" step="0.1" min="0.0" max="5.0" required />

  <label htmlFor="bgr">Blood glucose random level:</label>
  <input type="number" name="bgr" step="0.1" min="0.0" max="500.0" required />

  <label htmlFor="bu">Blood urea level:</label>
  <input type="number" name="bu" step="0.1" min="0.0" max="400.0" required />

  <label htmlFor="sc">Serum creatinine leve:</label>
  <input type="number" name="sc" step="0.1" min="0.0" max="10.0" required />

  <label htmlFor="sod">Sodium level in blood:</label>
  <input type="number" name="sod" step="0.1" min="0.0" max="200.0" required />

  <label htmlFor="pcv">Packed cell volume:</label>
  <input type="number" name="pcv" step="0.1" min="0.0" max="100.0" required />

  <label htmlFor="rc">Red blood cell count:</label>
  <input type="number" name="rc" step="0.1" min="0.0" max="100.0" required />

  <label htmlFor="htn">Hypertension:</label>

        <select name="htn" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button type="submit">Predict</button>
        {/* New button for clearing all text fields */}
        <button onClick={handleClear}>Clear</button>
      </form>
      <div className="result">{prediction}</div>
    </div>
  );
}

export default App;