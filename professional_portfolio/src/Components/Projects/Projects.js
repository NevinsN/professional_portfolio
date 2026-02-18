import React from "react";
import "./Projects.css";
import "../Shared/Shared.css";

const Projects = () => {
    return (
        <header className="App-header">
            <div className="App-header_titleSubpage">
                <h1>Featured Projects</h1>
                
                <div className="project-container">
                    
                    {/* 1. Nazh Engine - SRE & Systems Focus */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Nazh Engine | Systems & SRE</h2>
                            <div className="tech-stack">
                                <span className="tag">Python (Asyncio)</span>
                                <span className="tag">Flask</span>
                                <span className="tag">CSPRNG Security</span>
                                <span className="tag">GitHub Actions</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A high-concurrency, production-grade Discord utility built with a <strong>Sidecar Observability pattern</strong>. 
                                Uses cryptographically secure randomization (CSPRNG) for absolute data integrity in gaming mechanics.
                            </p>
                            <p className="project-meta">
                                <strong>Operational Edge:</strong> Implements fail-fast configurations, structured logging (RotatingFileHandler), and compute guardrails to ensure sub-200ms p99 latency.
                            </p>
                            <a href="https://github.com/NevinsN/Nazh" className="repo-btn">View Code</a>
                        </div>
                    </div>

                    {/* 2. Beta-Library - Product Architecture */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Beta-Library | Full-Stack Pipeline</h2>
                            <div className="tech-stack">
                                <span className="tag">JavaScript/Node.js</span>
                                <span className="tag">React</span>
                                <span className="tag">Security Gating</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                An automated publishing and <strong>gated reader portal</strong> designed to solve data distribution challenges for independent authors. 
                                Features an end-to-end pipeline from local writing environments to web-accessible, secure manifests.
                            </p>
                            <p className="project-meta">
                                <strong>Software Logic:</strong> Developed a custom access-control system ensuring intellectual property integrity while streamlining the beta-reader feedback loop.
                            </p>
                            <a href="#" className="repo-btn">View Code</a>
                        </div>
                    </div>

                    {/* 3. Capstone Project */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Data-Driven Systems Capstone</h2>
                            <div className="tech-stack">
                                <span className="tag">Python</span>
                                <span className="tag">PyQT</span>
                                <span className="tag">MongoDB</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A desktop application for standardizing data ingestion and analysis workflows. 
                                Completed with <strong>high honors (Magna Cum Laude)</strong> during a period of significant personal adversity, demonstrating extreme resilience.
                            </p>
                            <a href="https://github.com/NevinsN/CS-499" target="_blank" rel="noopener noreferrer" className="repo-btn">
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* 4. Portfolio Site Card */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Engineering Portfolio</h2>
                            <div className="tech-stack">
                                <span className="tag">React</span>
                                <span className="tag">Styled Components</span>
                                <span className="tag">CI/CD</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A high-performance portfolio utilizing a <strong>custom theme engine</strong> and mobile-first navigation. 
                                Serves as a live demonstration of frontend architectural principles and automated deployment.
                            </p>
                            <a href="https://github.com/NevinsN/professional_portfolio" target="_blank" rel="noopener noreferrer" className="repo-btn">
                                View Code
                            </a>
                        </div>
                    </div>  
                </div> 
            </div> 
        </header>
    );
};

export default Projects;