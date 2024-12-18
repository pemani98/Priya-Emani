import React from "react";
import styled, { css } from 'styled-components';
import Grid from '@mui/material/Grid';
import "./Work.css"
import { Timeline } from '@mui/lab';
import {TimelineItem} from '@mui/lab';
import {TimelineSeparator} from '@mui/lab';
import {TimelineConnector} from '@mui/lab';
import {TimelineContent} from '@mui/lab';
import {TimelineDot} from '@mui/lab';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Work = () => {
  return (
    <div className="projectsContainer">
       <h1 style={{ color: "#165fc3" , fontFamily: 'Londrina Sketch', fontSize:'56px', textAlign:'center' }}>My Work</h1>
       <hr style={{width:"20%" , textAlign:"center", display: "block", marginTop: "-30px", height:"10px",backgroundColor:"#165fc3"  }}></hr> 
       <Grid item xs = {6} >
              <div className = "skills" style={{ display: 'flex', height: '100%',flexDirection: 'column' }}> 
                <div className = "projectList">
                  <div className="myProject">Lockheed Martin</div>
                  <div className="myProject">Flatiron Health</div>
                  <div className="myProject">Publicis Sapient</div>
                  <div className="myProject">Optimity Advisors</div>
                  <div className="myProject">8Chili</div>
                  {/* <div className="myProject">Coffee Project</div>
                  <div className="myProject">Art Project</div>
                  <div className="myProject">Look for the Book</div> */}

                </div>
              </div>

            </Grid> 
            {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>Lockheed Martin</Paper> 

      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </Box> */}
            
      
    </div>
  );
};

export default Work;
