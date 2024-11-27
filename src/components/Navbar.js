import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        
        <li>
            Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;