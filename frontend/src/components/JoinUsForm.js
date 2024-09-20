// JoinUsForm.js
import React, { useState } from 'react';
import './JoinUsForm.css';

const JoinUsForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [last_name, setLastName] = useState('');

  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito


  const handleInputChange = (event) => {
    const { id, value } = event.target;
    
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const datosFormulario = {name, last_name, email};

    try {
      // const response = await fetch('http://localhost:5000/api/formulario', {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosFormulario),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }

      const result = await response.json();
      console.log('Respuesta del servidor: ', result);

      setSuccessMessage('Form submitted!');
      setName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="join-us-form">
      <h2>Join Us</h2>
      {error && <p className="error">{error}</p>} {/* Mensaje de error */}
      {successMessage && <p className="success">{successMessage}</p>} {/* Mensaje de éxito */}
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
          disabled={loading} // Deshabilitar el campo durante la carga
        />

        {/* Last Name Input */}
        <label htmlFor="name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          value={last_name}
          onChange={handleInputChange}
          required
          placeholder="Enter your last name"
          disabled={loading} // Deshabilitar el campo durante la carga
        />

        {/* Email Input */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          required
          placeholder="Enter your email"
          disabled={loading} // Deshabilitar el campo durante la carga
        />

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Submit'}
        </button>
      </form>
    </div>
  );

};

export default JoinUsForm;


