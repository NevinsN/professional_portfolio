import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <h2>Infrastructure Engineer | SRE. Specializing in Kubernetes Orchestration and Distributed Systems Reliability.
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
            <ul>
              <li><b>Engineering Focus:</b> Cloud-native game backends (K8s/Agones).</li>
              <li><b>Academic Excellence:</b> BS in Computer Science, Magna Cum Laude.</li>
              <li><b>Operational Edge:</b> 13 years leading high-uptime logistics and resource allocation.</li>
            </ul> 
            I am an Infrastructure Engineer and SRE with a unique vantage point: 13 years of operational leadership combined with a Magna Cum Laude BS in Computer Science. While many engineers focus solely on the "build," my background in high-pressure logistics has ingrained in me a "Day 2" mindset--prioritizing what happens after code hits production. <br/>
            
            <br />Before transitioning into software, I spent over a decade managing complex resource allocation and predictive inventory systems. This wasn't just retail; it was real-world systems engineering. I maintained 99%+ service availability by reducing operational variance and automating workflows--the same principles I now apply to cloud-native infrastructure. 

          </p>
        </div>
      </header>
  );
}

export default Home;
