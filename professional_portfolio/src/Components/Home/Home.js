import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";
import "../Shared/Shared.css";

const Home = () => {
  return (
    <header className="App-header">      
      <div className="App-header_title">
        <h1>Nicholas Nevins</h1>
        <h2>Software Developer | Systems Architect | Cloud & Full-Stack Engineer</h2>
        <div className="academic-honor-bar">
            Magna Cum Laude | 3.8 GPA | 15x Honor Roll | 4x President's List
        </div>
        {/* Quick recruiter scan-friendly banner */}
        <div className="home-quick-highlights">
          Azure Serverless | JS/TS & C# | Python Backends | Data Pipelines | Secure Systems | High-Concurrency SRE
        </div>
      </div>

      <div className="home-content">
        <img src={Headshot} className="home-headshot" alt="Nick Nevins Headshot" />
        
        <div className="home-bio">
          <div className="home-bio-intro">
            <strong>Magna Cum Laude</strong> Computer Science graduate with 13 years of operational leadership experience. I design and deploy <strong>high-integrity software systems</strong> built to scale, maintain security, and perform reliably under real-world constraints. My work spans <strong>cloud-native applications on Azure, serverless backends, and full-stack development</strong> with JS/TS, C#, and Python. 
            <br/><br/>
            I specialize in <strong>data integrity, scalable workflows, and failure-tolerant architectures</strong> — ensuring systems remain correct and performant beyond initial deployment. My background in high-stakes operational environments translates directly into building resilient, maintainable, and secure software systems.
          </div>

          <span className="section-label">Technical Focus:</span>
          <ul className="edge-list">
            <li>
              <strong>Algorithmic Precision:</strong> 
              Leveraging rigorous academic training to build performant and maintainable applications in <strong>C++/C#, JavaScript/TypeScript, and Python</strong>, with careful attention to scalability and correctness.
            </li>
            <li>
              <strong>Cloud & Systems:</strong> 
              Designed and deployed serverless applications using <strong>Azure Static Web Apps, Functions, and Cosmos DB</strong>, focused on backend-driven authorization systems, automation, monitoring, and strict trust boundaries.
            </li>
            <li>
              <strong>Data Integrity & Scalability:</strong> 
              Standardized complex workflows and data pipelines as demonstrated in my <strong>Data-Driven Systems Capstone</strong> (Python, MongoDB), completed with high honors during a period of significant personal adversity, highlighting resilience and commitment.
            </li>
            <li>
              <strong>High-Stakes Problem Solving:</strong> 
              13 years of experience resolving critical bottlenecks and managing resources in high-pressure operational environments, directly applicable to ensuring system reliability and performance at scale.
            </li>
          </ul>

          <p className="project-intro">
            Selected systems designed for reliability, security, scalability, and real-world constraints.
          </p>

          <span className="section-label">Featured Development:</span>
          <ul className="edge-list">
            <li>
              <strong>Bespoke Library (Cloud & Full-Stack)</strong>
              <p>
                Secure content distribution platform built on <strong>Azure Static Web Apps, Functions, and Cosmos DB</strong>. Implements backend-enforced hierarchical access control and atomic invite flows to guarantee data integrity at scale.
                <br/>
                <em>Skills highlighted:</em> Cloud deployment, serverless architecture, JS/TS frontend, Python backend, automation of workflows, secure data handling, database modeling.
                <br/>
                <span className="project-link">View Project →</span>
              </p>
            </li>
          
            <li>
              <strong>Nazh Engine (Systems & SRE)</strong>
              <p>
                High-performance concurrency utility leveraging <strong>Python async programming</strong>, cryptographically secure randomization (CSPRNG), and sidecar observability. Engineered for <strong>sub-200ms response times under load</strong> with automated CI/CD and monitoring guardrails.
                <br/>
                <em>Skills highlighted:</em> Asynchronous systems, performance optimization, production-grade reliability, automated deployment.
                <br/>
                <span className="project-link">View Project →</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;