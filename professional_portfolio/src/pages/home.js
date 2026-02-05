import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <h2>Infrastructure Engineer | Site Reliability Engineering (SRE)

        </h2>
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
              I am a Magna Cum Laude Computer Science graduate and Infrastructure Engineer with 13 years of operational leadership experience. I specialize in building and scaling cloud-native distributed systems, with a focus on orchestrating stateful workloads using Go, Kubernetes, and Terraform.
            </div>
            <div>
              My "Day 2" operational mindset ensures that the systems I build are not just functional, but reliable, observable, and scalable from the start.<br/>
            </div>
            <div><b>Operational Edge</b>:</div>
            <ul>
              <li><b>Systems Thinking:</b> 13 years of maintaining 99%+ service availability in high-pressure, physical-world logistics environments.</li>
              <li><b>Incident Response:</b> Expert in real-time resource allocation and resolving critical bottlenecks under strict time constraints.</li>
              <li><b>Toil Reduction::</b> Proven track record of developing standardized workflows to reduce operational variance and human error.</li>
            </ul>
          </p>
        </div>
      </header>
  );
}

export default Home;
