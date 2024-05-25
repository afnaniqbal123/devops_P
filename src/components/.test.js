// Import necessary modules from Jest and testing libraries
import { render, screen } from '@testing-library/react';

// Import the components you want to test
import HomePage from './HomePage';
import CertificationPage from './CertificationPage';
import EducationPage from './EducationPage';
import ProjectsPage from './ProjectsPage';

// Describe each component and test if it renders without crashing
describe('HomePage Component', () => {
  it('renders the HomePage component without crashing', () => {
    render(<HomePage />);
    const headerElement = screen.getByText(/Welcome To My Portfolio/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('CertificationPage Component', () => {
  it('renders the CertificationPage component without crashing', () => {
    render(<CertificationPage />);
    const headerElement = screen.getByText(/Certification/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('EducationPage Component', () => {
  it('renders the EducationPage component without crashing', () => {
    render(<EducationPage />);
    const headerElement = screen.getByText(/Education/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('ProjectsPage Component', () => {
  it('renders the ProjectsPage component without crashing', () => {
    render(<ProjectsPage />);
    const headerElement = screen.getByText(/Projects/i);
    expect(headerElement).toBeInTheDocument();
  });
});

// WebdriverIO test (ensure WebDriverIO is correctly installed and configured)
const { remote } = require('webdriverio');

describe('WebdriverIO Test', () => {
  it('checks the home page content using WebDriverIO', async () => {
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

      if (isHeaderVisible && aboutMeText.includes('Hello, my name is Syed Tanees.')) {
        console.log('WebdriverIO Test Passed!');
      } else {
        console.error('WebdriverIO Test Failed!');
      }
    } catch (error) {
      console.error('WebdriverIO Test Failed!', error);
    } finally {
      await browser.deleteSession();
    }
  });
});
