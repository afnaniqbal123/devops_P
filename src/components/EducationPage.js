import React, { useState, useEffect } from 'react';
import './EducationPage.css';
import C1 from './assets/C1.png';
import C2 from './assets/C2.png';

const EducationPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`education-page ${fadeIn ? 'fade-in' : ''}`}>

      <div className="image-container">
        <div className="content">
          <h2>Education</h2>
        </div>
      </div>

      <div className='education-cards'>
        <EducationCard
          title='OLevels'
          imageSrc={C1}
          description='Beaconhouse School System'
        />
        <EducationCard
          title='Alevels'
          imageSrc={C1}
          description='Beaconhouse School System'
        />
        <EducationCard
          title='Bachelors'
          imageSrc={C2}
          description='FAST NUCES'
        />
      </div>
    </div>
  );
};

const EducationCard = ({ title, imageSrc, description }) => {
  return (
    <div className='education-card'>
      <img src={imageSrc} alt='Education' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EducationPage;
