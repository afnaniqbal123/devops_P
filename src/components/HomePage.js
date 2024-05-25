import React, { useState, useEffect } from 'react';
import './HomePage.css';
import myImage from './assets/afoo.png';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`home-page ${fadeIn ? 'fade-in' : ''}`}>

      <div className="image-container">
        <div className="content">
          <h2>Welcome To My Portfolio !</h2>
        </div>
      </div>

      <div className='Myself'>
        <div className='personalInfo'>
          <h3>About Me</h3>
          <p>Hello, my name is Afnan Iqbal. I'm a passionate developer with a keen interest in technology.</p>
        </div>
        <div className='MyImage'>
          <img src={myImage} alt='Your Image' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
