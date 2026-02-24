import React from "react";
import "./Projects.css";
import "../Shared/Shared.css";

const Projects = () => {
    return (
        <header className="App-header">
            <div className="App-header_titleSubpage">
                <h1>Featured Projects</h1>
                
                <div className="project-container">
                    
                    {/* 1. Nazh Engine - Reliability & Automation */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Nazh Engine | Reliability & Automation</h2>
                            <div className="tech-stack">
                                <span className="tag">Python (Asyncio)</span>
                                <span className="tag">Flask</span>
                                <span className="tag">CSPRNG Security</span>
                                <span className="tag">GitHub Actions CI/CD</span>
                                <span className="tag">Structured Logging</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A production-grade, high-concurrency utility engineered around a <strong>Sidecar Observability pattern</strong>.
                                Uses cryptographically secure randomization (CSPRNG) to guarantee data integrity in stateful gaming mechanics — no shortcuts, no trust assumed.
                            </p>
                            <p className="project-meta">
                                <strong>Engineering focus:</strong> Fail-fast configurations, RotatingFileHandler structured logging, and compute guardrails maintain <strong>sub-200ms p99 latency</strong> under load. Automated CI/CD via GitHub Actions ensures every deployment is tested and traceable — the same reliability practices expected in production cloud environments.
                            </p>
                            <a href="https://github.com/NevinsN/Nazh" target="_blank" rel="noopener noreferrer" className="repo-btn">View Code</a>
                        </div>
                    </div>

                    {/* 2. Bespoke Library - Cloud & Full-Stack */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Bespoke Library | Cloud & Full-Stack Platform</h2>
                            <div className="tech-stack">
                                <span className="tag">Azure Static Web Apps</span>
                                <span className="tag">Azure Functions (Python)</span>
                                <span className="tag">Cosmos DB (MongoDB API)</span>
                                <span className="tag">AAD Authentication</span>
                                <span className="tag">Vanilla JS ES Modules</span>
                                <span className="tag">CI/CD</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A production reading platform live at <a href="https://nicholasnevins.org" target="_blank" rel="noopener noreferrer">nicholasnevins.org</a> — authors upload and version manuscripts, control access at the series, book, or draft level, and invite readers via time-limited token links. Built end-to-end on Azure with no third-party auth libraries.
                            </p>
                            <p className="project-meta">
                                <strong>Engineering depth:</strong> 7-collection normalized Cosmos DB schema designed to make permission resolution a single indexed query rather than a full scan. A central <code>permission_service</code> enforces all access rules server-side — the frontend makes zero security decisions. Invite redemption is atomic via <code>find_one_and_update</code> with a use-count condition, preventing race conditions on simultaneous redemptions. Database indexes are managed in code and applied idempotently on cold start. Includes a non-destructive, dry-run capable migration script for schema evolution.
                            </p>
                            <a href="https://github.com/NevinsN/Bespoke_Library" target="_blank" rel="noopener noreferrer" className="repo-btn">View Code</a>
                        </div>
                    </div>

                    {/* 3. Capstone - Data Pipeline & Systems Design */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Data-Driven Systems Capstone</h2>
                            <div className="tech-stack">
                                <span className="tag">Python</span>
                                <span className="tag">PyQT</span>
                                <span className="tag">MongoDB</span>
                                <span className="tag">Data Pipeline Design</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A desktop application for standardizing data ingestion, transformation, and analysis workflows across inconsistent source formats.
                                Designed to enforce schema consistency and surface data quality issues before they reach downstream processes.
                            </p>
                            <p className="project-meta">
                                <strong>Engineering focus:</strong> End-to-end pipeline from raw data ingestion through structured storage in MongoDB — with validation logic, error handling, and a PyQT interface designed for non-technical operators. Completed with <strong>Magna Cum Laude honors</strong> under significant personal adversity.
                            </p>
                            <a href="https://github.com/NevinsN/CS-499" target="_blank" rel="noopener noreferrer" className="repo-btn">View Code</a>
                        </div>
                    </div>

                    {/* 4. Portfolio Site */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Engineering Portfolio</h2>
                            <div className="tech-stack">
                                <span className="tag">React</span>
                                <span className="tag">CSS Variables / Theming</span>
                                <span className="tag">Azure Static Web Apps</span>
                                <span className="tag">GitHub Actions CI/CD</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                This site — built with React, a custom dark/light theme engine using CSS variables, and mobile-first responsive design.
                                Deployed to <strong>Azure Static Web Apps</strong> with automated builds triggered on every push to main.
                            </p>
                            <p className="project-meta">
                                <strong>Engineering focus:</strong> Demonstrates component architecture, client-side routing, and a complete Azure deployment pipeline — the same CI/CD practices applied across all personal projects.
                            </p>
                            <a href="https://github.com/NevinsN/professional_portfolio" target="_blank" rel="noopener noreferrer" className="repo-btn">View Code</a>
                        </div>
                    </div>  
                </div> 
            </div> 
        </header>
    );
};

export default Projects;