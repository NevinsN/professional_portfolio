import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
            <h1 style={{ lineHeight: "1.1" }}>Nicholas Nevins</h1>
            <h2>Infrastructure Engineer | Site Reliability Engineering (SRE)</h2>
        </div>

        <div className="home-content">
          <img 
            src={Headshot} 
            className="home-headshot" 
            alt="Nick Nevins Headshot" 
          />
          
          <div className="home-bio">
            <div>
              Magna Cum Laude Computer Science graduate and Infrastructure Engineer with 13 years of operational leadership experience. I specialize in building resilient, cloud-native systems using <b>Go, Kubernetes, and Python</b>. 
            </div>

            <b>Operational Edge:</b>
            <ul className="edge-list">
              <li>
                <strong>Systems Thinking:</strong> 13 years of maintaining 99%+ service availability in high-pressure, physical-world logistics environments.
              </li>
              <li>
                <strong>Incident Response:</strong> Expert in real-time resource allocation and resolving critical bottlenecks under strict time constraints.
              </li>
              <li>
                <strong>Toil Reduction:</strong> Proven track record of developing standardized workflows to reduce operational variance and human error.
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default Home;
