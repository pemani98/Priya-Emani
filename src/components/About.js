import React from "react";
import "./About.css"
import Divider from '@mui/material/Divider';
import styled, { css } from 'styled-components';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const About = () => {
    const divStyle = {
        backgroundColor: '#1976d2',
      };

    const MyDivider = styled(Divider)`
      border: 1px solid #bbb;
      margin: 20px 0px;
      border-radius: 5px;
      width:30%;
      height:10px;
      color:white `;

      return (
      <div className="aboutContainer" style = {divStyle}>
        <h1 style={{ color: 'white', fontFamily: 'Londrina Sketch', fontSize:'56px', textAlign:'center' }}>About Me</h1>
        {/* <MyDivider sx={{color:"white"}} textAlign="center"/> */}
        <hr style={{width:"20%" , textAlign:"center", display: "block", marginTop: "-30px", height:"10px",backgroundColor:"white"  }}></hr> 
        <Grid container spacing = {20}>
          <Grid item xs = {6}  >
            <h2 style = {{color:'white', fontFamily: 'Manrope'}}>Nice to meet you!</h2>
            <h4 style = {{color:'white', fontFamily: 'Manrope', lineHeight: '2.0' }}>
              I'm glad to see you in my small area of this huge online world! I like building software. 
              My interest goes back to the 11th grade when I first started coding in Java. I went to the University of Maryland
              and graduated with a Computer Science degree in 2020. I've had a variety of technical roles since. In that time, 
              I've managed to hone my technical skills in Java, Python, SQL, Oracle, Javascript, React, and even some AWS.  
            </h4>
            <Button style = {{color: "rgba(22 95 195)", background:"white", fontWeight: "600",fontFamily: 'Londrina Sketch', fontSize:"1.5rem"}}>Contact</Button>

          </Grid>
            <Grid item xs = {6} >
            <h2 style = {{color:'white', fontFamily: 'Manrope'}}>My Skills</h2>
              <div className = "skills" style={{ display: 'flex', height: '100%',flexDirection: 'column' }}> 
                <div className = "skillList">
                  <div className="skills__skill">Java</div>
                  <div className="skills__skill">SQL</div>
                  <div className="skills__skill">Spring MVC</div>
                  <div className="skills__skill">Python</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">Github</div>
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">AWS</div>

                </div>
              </div>

            </Grid>
        </Grid>
        
      </div>
      );

};

export default About;