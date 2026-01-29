import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <h2>Software Developer</h2>
        </div>
        <div className="content">
          <img 
          src={Headshot} 
          alt="Nick Nevins Headshot" 
          style={{
                  width:"200px", 
                  height:"238px", 
                  border: "5px solid white",
                  borderRadius:"50%"
                }}
          />
          <p style={{
              fontSize: "17px",
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