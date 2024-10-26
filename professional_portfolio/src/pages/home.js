import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = () => {
  return (
      <header className="App-header">      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <p style={{lineHeight: "0em", fontStyle: "italic", fontSize: "25px", marginLeft: "2.5%"}}>Software Developer</p>
        </div>
        <div className="content">
          <img src={Headshot} alt="Nick Nevins Headshot" style={{width:"200px", height:"238px",}}/>
          <p style={{
              fontSize: "17px",
              width: "50%",
          }}>
              A results-driven software developer with a strong technical skillset. 
              Excels at problem solving, learning new skills quickly, and possesses 
              a strong background in customer service and team-building. Consistently 
              recognized for abilities to train and teach others as a functional 
              member of a team. Strong written and verbal interpersonal communication 
              skills. Team player with the ability to work independently.
          </p>
        </div>
      </header>
  );
}

export default Home;