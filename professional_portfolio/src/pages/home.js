import React from 'react';
import Headshot from "../Images/Headshot.jpg";

const Home = ({ theme }) => {
  return (
      <header className={`App-header ${theme}`}>      
        <div className="App-header_title">
        <h1 style={{lineHeight: "0em"}}>
          Nicholas Nevins
        </h1>
        <h2>Software Engineer | Cloud & Game Infrastructure
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
            Magna Cum Laude Computer Science graduate and Infrastructure Engineer with 13 years of operational leadership experience. I specialize in building and scaling cloud-native game backends, currently focused on orchestrating Unreal Engine 5 dedicated servers using Go, Kubernetes, and Agones. My 'Day 2' operational mindset ensures that the systems I build are not just functional, but reliable, observable, and scalable.

          </p>
        </div>
      </header>
  );
}

export default Home;
