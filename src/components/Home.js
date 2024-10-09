import React from "react";
import profileImage from '/Users/padmavatiemani/Documents/Priya-Emani-Portfolio/src/assets/PriyaEma.png'; // Adjust path according to your file structure
import './Home.css';
import './Header.js';
//import { Grid } from './Grid';

const Home = () => {
  return (

    <div className="home-container">
        <div className="image-section">
          <img src={profileImage} alt="Padmavati"/>
        </div>
        <div className="text-section">
          <h2 className = "title">Hi folks, I'm Priya and I'm here to solve problems with code and creativity!</h2>
         {/* /* <h2>Contact Me</h2>
          <p>Email: pemani327@gmail.com"</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/padmavati-emani-a81a47164/" target="_blank" rel="noopener noreferrer"> Priya's LinkedIn</a></p>*/ }
        </div>
    </div>
  );
};

export default Home;
