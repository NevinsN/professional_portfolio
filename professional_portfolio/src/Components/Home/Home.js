import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";
import "../Shared/Shared.css";

const Home = () => {
  return (
    <header className="App-header">      
      <div className="App-header_title">
        <h1>Nicholas Nevins</h1>
        <h2>Software Developer | Systems Architect</h2>
        {/* New Academic Callout */}
        <div className="academic-honor-bar">
            Magna Cum Laude | 3.8 GPA | 15x Honor Roll | 4x President's List
        </div>
      </div>

      <div className="home-content">
        <img src={Headshot} className="home-headshot" alt="Nick Nevins Headshot" />
        
        <div className="home-bio">
          <div className="home-bio-intro">
            <strong>Magna Cum Laude</strong> Computer Science graduate with 13 years of operational leadership experience. I specialize in building <strong>high-integrity, user-centered applications</strong> with a focus on ownership and 'Day 2' maintainability. 
            <br/><br/>
            I view software development through the lens of mission-critical reliability; every line of code is a commitment to <strong>reducing error and ensuring data integrity</strong>. I am driven to build high-performance tools that solve complex architectural problems and improve global healthcare outcomes by architecting software that prioritizes patient safety and seamless data exchange.
          </div>

          <span className="section-label">Technical Focus:</span>
          <ul className="edge-list">
            <li>
              <strong>Algorithmic Precision:</strong> 
              Applying a rigorous academic background to build performant applications in <strong>C++/C#, JavaScript/TypeScript, and Python.</strong>
            </li>
            <li>
              <strong>Data Integrity & Scalability:</strong> 
              Expertise in standardizing complex workflows, as demonstrated in my <strong>Data-Driven Systems Capstone</strong> (Python, MongoDB) — Completed with high honors during a period of significant personal adversity, demonstrating extreme resilience and commitment.
            </li>
            <li>
              <strong>High-Stakes Problem Solving:</strong> 
              13 years of experience resolving critical bottlenecks and managing resource allocation in high-pressure environments.
            </li>
          </ul>
          <span className="section-label">Featured Development:</span>
            <ul className="edge-list">
              <li>
                <strong>Nazh Engine (Systems & SRE)</strong>
                <p>Production-grade utility featuring CSPRNG security, sidecar telemetry, and automated CI/CD guardrails.</p>
              </li>
              <li>
                <strong>Beta-Library (Product Architecture)</strong>
                <p>An automated publishing pipeline and gated reader portal designed to solve complex data distribution challenges.</p>
              </li>
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;