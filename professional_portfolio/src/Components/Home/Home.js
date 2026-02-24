import React from 'react';
import Headshot from "../../Images/Headshot.jpg";
import "./Home.css";
import "../Shared/Shared.css";

const Home = () => {
  return (
    <header className="App-header">      
      <div className="App-header_title">
        <h1>Nicholas Nevins</h1>
        <h2>Software Developer | Cloud Engineer | Full-Stack & Systems</h2>
        <div className="academic-honor-bar">
            Magna Cum Laude | 3.8 GPA | 15x Honor Roll | 4x President's List
        </div>
        {/* Quick recruiter scan-friendly banner */}
        <div className="home-quick-highlights">
          Azure Cloud & Serverless | JS/TS | Python Backends | C++ / OOP | Data Pipelines | CI/CD | Secure Systems
        </div>
      </div>

      <div className="home-content">
        <img src={Headshot} className="home-headshot" alt="Nick Nevins Headshot" />
        
        <div className="home-bio">
          <div className="home-bio-intro">
            <strong>Magna Cum Laude</strong> Computer Science graduate with hands-on experience designing and deploying <strong>cloud-native applications on Azure</strong> — including serverless backends, automated data workflows, and secure full-stack systems. My technical foundation spans <strong>Python, JavaScript/TypeScript, SQL, and C++</strong>, with a strong object-oriented background and active interest in expanding into C#.
            <br/><br/>
            I bring 13 years of operational leadership into software engineering — a background that instills a deep respect for <strong>reliability, data integrity, and systems that hold up under real-world pressure</strong>. Whether building cloud infrastructure, automating workflows, or designing access-controlled data pipelines, I focus on correctness and maintainability from the start.
          </div>

          <span className="section-label">Technical Focus:</span>
          <ul className="edge-list">
            <li>
              <strong>Object-Oriented Engineering:</strong>
              Strong academic and practical foundation in <strong>C++ and OOP principles</strong> — encapsulation, inheritance, polymorphism, and design patterns — applied to building maintainable, scalable applications in <strong>Python and JavaScript/TypeScript</strong>. Actively developing C# proficiency as a natural extension of this background.
            </li>
            <li>
              <strong>Azure Cloud & Infrastructure:</strong>
              Designed and deployed production systems using <strong>Azure Static Web Apps, Functions, Cosmos DB, and automated CI/CD pipelines</strong>. Focused on backend-enforced security, resource configuration, monitoring, and strict trust boundaries — aligned with cloud engineering best practices.
            </li>
            <li>
              <strong>Data Pipelines & Workflow Automation:</strong>
              Built and standardized data ingestion and processing workflows using <strong>Python, SQL, and MongoDB</strong>, with attention to data quality, schema consistency, and operational reliability. Comfortable designing structured pipelines from requirements through deployment.
            </li>
            <li>
              <strong>Operational Reliability:</strong>
              13 years managing high-stakes, high-volume operations translates directly into engineering habits: clear documentation, proactive monitoring, structured troubleshooting, and building systems that stay correct under pressure.
            </li>
          </ul>

          <p className="project-intro">
            Selected systems built for reliability, security, and real-world operational constraints.
          </p>

          <span className="section-label">Featured Development:</span>
          <ul className="edge-list">
            <li>
              <strong>Bespoke Library (Azure Cloud & Full-Stack)</strong>
              <p>
                A production reading platform live at nicholasnevins.org — built on <strong>Azure Static Web Apps, Azure Functions, and Cosmos DB</strong>. Features a normalized 7-collection schema, a server-side permission service enforcing hierarchical access control across series/book/draft scopes, and atomic invite redemption designed to prevent race conditions. Database indexes managed in code, AAD authentication via SWA config, and a non-destructive migration system for schema evolution.
                <br/>
                <em>Skills highlighted:</em> Azure resource ownership, Python Azure Functions, Cosmos DB schema design, access control architecture, atomic operations, CI/CD deployment.
                <br/>
                <span className="project-link">View Project →</span>
              </p>
            </li>
          
            <li>
              <strong>Nazh Engine (Systems & Reliability)</strong>
              <p>
                High-concurrency Discord utility built with <strong>Python asyncio</strong>, cryptographically secure randomization (CSPRNG), and a sidecar observability pattern. Engineered for <strong>sub-200ms p99 response times</strong> with structured logging, fail-fast configurations, and automated GitHub Actions deployment.
                <br/>
                <em>Skills highlighted:</em> Async system design, performance engineering, production-grade monitoring, CI/CD automation.
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