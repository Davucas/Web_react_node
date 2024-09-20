// MainScreen.js
import React, {useState, useEffect} from 'react';
import './MainScreen.css';
import JoinUsForm from '../components/JoinUsForm'

import background1 from '../assets/backgrounds/background1.jpg';
import background2 from '../assets/backgrounds/background2.jpg';
import background3 from '../assets/backgrounds/background3.jpg';


const MainScreen = () => {
  // const backgrounds = [
  //   `url(${background1})`,
  //   `url(${background2})`,
  //   `url(${background3})`,
  // ];

  const images = [
    background1,
    background2,
    background3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="main-screen">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
      <div className="main-screen__content">
          <h1>Madrid: The Global Financial Hub</h1>
          <p className="main-screen__subtitle">Connecting opportunities and fostering economic growth in Spain's capital.</p>
      </div>
      <div className="main-screen__join-us-form">
          <JoinUsForm />
      </div>
    </div>

  );
};

export default MainScreen;
