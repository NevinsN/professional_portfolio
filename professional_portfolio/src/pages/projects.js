import React from "react";

const Projects = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Projects</h1>
                
                <div className="project-container">
                    {/* 1. NexusGate */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>NexusGate</h2>
                            <div className="tech-stack">
                                <span className="tag">Go</span>
                                <span className="tag">Kubernetes</span>
                                <span className="tag">Redis</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A <strong>cloud-native orchestrator</strong> designed to automate the lifecycle of UE5 dedicated servers. 
                            </p>
                            <a href="https://github.com/NevinsN/NexusGate" target="_blank" rel="noopener noreferrer" className="repo-btn">
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* 2. Elemental Escapist */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Elemental Escapist</h2>
                            <div className="tech-stack">
                                <span className="tag">UE5</span>
                                <span className="tag">C++</span>
                                <span className="tag">FPS</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A first-person technical prototype built in <strong>Unreal Engine 5</strong> to validate <strong>NexusGate</strong> state synchronization.
                            </p>
                            <a href="https://github.com/NevinsN/elemental-escapist/tree/main" target="_blank" rel="noopener noreferrer" className="repo-btn">
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* 3. Capstone Project */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Capstone Project</h2>
                            <div className="tech-stack">
                                <span className="tag">Python</span>
                                <span className="tag">PyQT</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A robust desktop application demonstrating professional resilience and foundational software architecture.
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
                                <span className="tag">Netlify CI/CD</span>
                            </div>
                        </div>
                     <div className="project-body">
        <p>
            A high-performance personal portfolio built with <strong>React</strong> and <strong>Styled Components</strong>. 
            Focuses on responsive UI/UX and automated deployment pipelines.
        </p>
        <p className="project-meta">
            <strong>Key Feature:</strong> Integrated dark/light theme engine and mobile-first navigation logic.
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
