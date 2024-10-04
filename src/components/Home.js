import React from "react";
import profileImage from '../assets/Priya_test.png'; // Adjust path according to your file structure
import './Home.css';

const Home = () => {
  return (

    <div className="home-container">
    <img src={profileImage} alt="Padmavati" style={{ width: '40%' , height: '50%'}}/>
      <h2 className = "title">Hello, I'm Padmavati Emani!</h2>
      <p className = "body" >Welcome to my portfolio! I'm a full-stack developer eager to leverage my experiences to bring your visions to life. I love solving problems by meticulously designing appropriate solutions with clients for clients.</p>
      <h2>Contact Me</h2>
      <p>Email: pemani327@gmail.com"</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/padmavati-emani-a81a47164/" target="_blank" rel="noopener noreferrer"> Priya's LinkedIn</a></p>
    </div>
  );
};

export default Home;
