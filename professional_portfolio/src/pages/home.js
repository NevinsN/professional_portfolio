import React from 'react';

const Home = () => {
  return (
      <header className="App-header">      
        <h1>
              Nicholas Nevins
        </h1>
        <div style={{
                display: "flex",
                justifyContent: "centre",
                alignContent: "center",
                height: "100vh",
            }}>
          <p style={{
            fontSize: "17px",
            marginLeft: "25%",
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