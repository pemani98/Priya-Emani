import React from "react";
import profileImage from '/Users/padmavatiemani/Documents/Priya-Emani-Portfolio/src/assets/PriyaEma.png'; // Adjust path according to your file structure
import './Home.css';
import './Header.js';
//import { Grid } from './Grid';
import { Button } from '@mui/material';
import pdf from '/Users/padmavatiemani/Documents/Priya-Emani-Portfolio/public/Padmavati-Emani-CP.pdf';
import { Document, Page, Text, View, StyleSheet } from 'react-pdf';


const pdfUrl = '/Users/padmavatiemani/Documents/Priya-Emani-Portfolio/public/Padmavati-Emani-CP.pdf';

function ColoredWords({ sentence, colorWords }) {
  const words = sentence.split(' ');

  return (
    <span>
      {words.map((word, index) => (
        <span key={index} style={{ color: colorWords.includes(word) ? '#FFDB58' : 'black' }}>
          {word} 
          {' '} {/* Add a space after each word */}
        </span>
      ))}
    </span>
  );
}



const Home = () => {
  return (

    <div className="home-container">
        <div className="image-section">
          <img src={profileImage} alt="Padmavati"/>
        </div>
        <div className="text-section">
          <h2 className = "title">
            <ColoredWords sentence= "Hi folks, I'm Priya and I'm here to solve problems with code and creativity!" colorWords ={['code', 'creativity!']}/> 
            </h2>
         {/* /* <h2>Contact Me</h2>
          <p>Email: pemani327@gmail.com"</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/padmavati-emani-a81a47164/" target="_blank" rel="noopener noreferrer"> Priya's LinkedIn</a></p>*/ }



          <Button
          href = {pdf}
          download = "PadmavatiEmaniResume.pdf"
          size="small" variant="contained" 
          className="resume" 
          style = {{fontFamily:"Londrina Sketch", fontSize: "30px", display: "inline-block"}}> Resume
          </Button>
        </div>
        
    </div>
  );
};

export default Home;
