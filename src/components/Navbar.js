import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="./Padmavati-Emani-CP.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;