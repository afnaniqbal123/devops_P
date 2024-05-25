import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import CertificationPage from './CertificationPage';
import EducationPage from './EducationPage';
import ProjectsPage from './ProjectsPage';

describe('HomePage Component', () => {
  it('renders the component without crashing', () => {
    render(<HomePage />);
  });
});

describe('CertificationPage Component', () => {
  it('renders the component without crashing', () => {
    render(<CertificationPage />);
  });
});

describe('EducationPage Component', () => {
  it('renders the component without crashing', () => {
    render(<EducationPage />);
  });
});

describe('ProjectsPage Component', () => {
  it('renders the component without crashing', () => {
    render(<ProjectsPage />);
  });
});

const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome',
    },
  });

  try {
    await browser.url('http://localhost:3000'); 

    await browser.waitUntil(async () => {
      const page = await browser.$('.home-page');
      return await page.isDisplayed();
    }, { timeout: 5000, timeoutMsg: 'Page not loaded' });

    const header = await browser.$('h2=Welcome To My Portfolio !');
    const isHeaderVisible = await header.isDisplayed();

    const aboutMeSection = await browser.$('.personalInfo');
    const aboutMeText = await aboutMeSection.getText();
    
    if (isHeaderVisible && aboutMeText.includes('Hello, my name is Afnan Iqbal.')) {
      console.log('Test Passed!');
    } else {
      console.error('Test Failed!');
    }
  } catch (error) {
    console.error('Test Failed!', error);
  } finally {
    await browser.deleteSession();
  }
})();