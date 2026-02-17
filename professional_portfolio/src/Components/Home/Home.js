import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";
import "../Shared/Shared.css";

const Home = ({ theme }) => {
  return (
      <header className="home-page">      
      {/* Title Section */}
      <div className="App-header_title">
        <h1>Nicholas Nevins</h1>
        <h2>Software Engineer | Systems Architect</h2>
      </div>

      {/* Main Content Area */}
      <div className="home-content">
        <img 
          src={Headshot} 
          className="home-headshot" 
          alt="Nick Nevins Headshot" 
        />
        
        <div className="home-bio">
          <div className="home-bio-intro">
              Magna Cum Laude Computer Science graduate and Software Engineer with 13 years of operational leadership experience. I specialize in building high-integrity, scalable applications with a focus on ownership and 'Day 2' maintainability. Having managed mission-critical infrastructure in high-pressure logistics environments, I bring a unique perspective to software development—viewing every line of code as a commitment to system reliability and user trust. I am driven by the challenge of solving complex architectural problems and a desire to build software that has a meaningful, real-world impact on global healthcare.
          </div>
          
          {/* Featured Projects Section */}
          <span className="section-label">Featured Projects:</span>
          <ul className="edge-list">
            <li>
              <strong>Data-Driven Systems Application (Capstone)</strong>
              Standardized data ingestion and analysis workflows for complex datasets.
              <div style={{fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '5px'}}>
                Stack: Python, PyQt, Pandas, MongoDB
              </div>
            </li>
          </ul>

          {/* Development Edge Section */}
          <span className="section-label">Development Edge:</span>
import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";
import "../Shared/Shared.css";

const Home = ({ theme }) => {
  return (
      <header className="home-page">      
      {/* Title Section */}
      <div className="App-header_title">
        <h1>Nicholas Nevins</h1>
        <h2>Software Engineer | Systems Architect</h2>
      </div>

      {/* Main Content Area */}
      <div className="home-content">
        <img 
          src={Headshot} 
          className="home-headshot" 
          alt="Nick Nevins Headshot" 
        />
        
        <div className="home-bio">
          <div className="home-bio-intro">
              Magna Cum Laude Computer Science graduate and Software Engineer with 13 years of operational leadership experience. I specialize in building high-integrity, scalable applications with a focus on ownership and 'Day 2' maintainability. Having managed mission-critical infrastructure in high-pressure logistics environments, I bring a unique perspective to software development—viewing every line of code as a commitment to system reliability and user trust. I am driven by the challenge of solving complex architectural problems and a desire to build software that has a meaningful, real-world impact on global healthcare.
          </div>
          
          {/* Featured Projects Section */}
          <span className="section-label">Featured Projects:</span>
          <ul className="edge-list">
            <li>
              <strong>Data-Driven Systems Application (Capstone)</strong>
              Standardized data ingestion and analysis workflows for complex datasets.
              <div style={{fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '5px'}}>
                Stack: Python, PyQt, Pandas, MongoDB
              </div>
            </li>
          </ul>

          {/* Development Edge Section */}
          <span className="section-label">Development Edge:</span>
          <ul className="edge-list">
            <li><strong>Full-Stack Precision:</strong> Leveraging a 3.8 GPA and deep technical training to build performant, scalable applications in C#, Go, and Python.</li>
            <li><strong>Systems-Level Logic:</strong> 13 years of leadership experience applied to solving complex architectural bottlenecks and data integrity challenges.</li>
            <li><strong>Architectural Resilience:</strong> Designing software with a "Day 2" mindset—ensuring code is maintainable, testable, and reliable from the first commit.</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;