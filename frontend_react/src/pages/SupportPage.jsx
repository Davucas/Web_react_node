// SupportPage.js
import React, { useState } from 'react';
import './SupportPage.css';



const SupportPage = () => {
    
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'problemDescription':
        setProblemDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Form submitted! \nName: ${name} \nTelephone: ${telephone} \nProblem: ${problemDescription}`
    );
    // Reset form fields after submission
    setName('');
    setTelephone('');
    setProblemDescription('');
  };

  return (
    <div className="support-page">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>

        {/* Name Input */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInputChange}
          required
          placeholder="Enter your name"
        />

        {/* Telephone Input */}
        <label htmlFor="telephone">Telephone:</label>
        <input
          type="tel"
          id="telephone"
          value={telephone}
          onChange={handleInputChange}
          required
          placeholder="Enter your telephone"
        />

        {/* Problem Description Text area */}
        <label htmlFor="problemDescription">Brief Description of the Problem:</label>
        <textarea
          id="problemDescription"
          value={problemDescription}
          onChange={handleInputChange}
          required
          placeholder="Describe your issue"
        />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );

};

export default SupportPage;
