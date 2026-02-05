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
        <h2>Infrastructure Engineer | Site Reliability Engineering (SRE)</h2>
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
            Magna Cum Laude Computer Science graduate and Infrastructure Engineer with 13 years of operational leadership experience. 
            I specialize in building resilient, cloud-native systems using <strong>Go, Kubernetes, and Python</strong>. 
            My "Day 2" operational mindset is backed by a proven track record of maintaining 99%+ availability in 
            high-pressure environments through data-driven resource allocation and proactive system monitoring.
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

          {/* Operational Edge Section */}
          <span className="section-label">Operational Edge:</span>
          <ul className="edge-list">
            <li>
              <strong>Systems Thinking:</strong> 
              13 years of maintaining 99%+ service availability in high-pressure, physical-world logistics environments.
            </li>
            <li>
              <strong>Incident Response:</strong> 
              Expert in real-time resource allocation and resolving critical bottlenecks under strict time constraints.
            </li>
            <li>
              <strong>Toil Reduction:</strong> 
              Proven track record of developing standardized workflows to reduce operational variance and human error.
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;
