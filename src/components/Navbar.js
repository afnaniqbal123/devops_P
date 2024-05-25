import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import '../fonts.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Portfolio.</div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/certifications">Certification</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
