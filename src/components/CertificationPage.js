import React, { useState, useEffect } from 'react';
import './CertificationPage.css';

const CertificationPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`Certification-page ${fadeIn ? 'fade-in' : ''}`}>

      <div className="image-container">
        <div className="content">
          <h2>Certification</h2>
        </div>
      </div>

      <div className='Certification-cards'>
        <CertificationCard
          title='CPISM'
          description='Aptech Certification'
        />
        <CertificationCard
          title='SCRUM'
          description='Scrum Certificate'
        />
      </div>
    </div>
  );
};

const CertificationCard = ({ title, imageSrc, description }) => {
  return (
    <div className='Certification-card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CertificationPage;
