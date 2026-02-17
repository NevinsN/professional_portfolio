import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <h2>Software Engineer | Systems Architect</h2>
        </div>
        <div className="content">
          <img 
          src={Headshot} 
          alt="Nick Nevins Headshot" 
          style={{
                  width:"200px", 
                  height:"238px", 
                  border: "5px solid white",
                  borderRadius:"50%",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                }}
          />
          <p style={{
              fontSize: "17px",
              padding: "2%",
              maxWidth: "800px",
          }}>
             
            <div>
              Magna Cum Laude Computer Science graduate and Software Engineer with 13 years of operational leadership experience. I specialize in building high-integrity, scalable applications with a focus on ownership and 'Day 2' maintainability. Having managed mission-critical infrastructure in high-pressure logistics environments, I bring a unique perspective to software development—viewing every line of code as a commitment to system reliability and user trust. I am driven by the challenge of solving complex architectural problems and a desire to build software that has a meaningful, real-world impact on global healthcare.
            </div>
            <div><b>Development Edge</b>:</div>
            <ul>
              <li><b>Full-Stack Precision:</b> Leveraging a 3.8 GPA and deep technical training to build performant, scalable applications in C#, Go, and Python.</li>
              <li><b>Systems-Level Logic:</b> 13 years of leadership experience applied to solving complex architectural bottlenecks and data integrity challenges.</li>
              <li><b>Architectural Resilience:</b> Designing software with a "Day 2" mindset—ensuring code is maintainable, testable, and reliable from the first commit.</li>
            </ul>
          </p>
        </div>
      </header>
  );
}

export default Home;
