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
                                It solves the "Multi-Zonal" challenge by using <strong>Agones</strong> and <strong>Redis</strong> to persist player state during server handoffs.
                            </p>
                            <p className="project-meta">
                                <strong>Operational Focus:</strong> Leveraging Terraform for IaC and GitHub Actions for CI/CD containerization.
                            </p>
                        </div>
                    </div>

                    {/* 2. Elemental Escapist */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Elemental Escapist</h2>
                            <div className="tech-stack">
                                <span className="tag">UE5</span>
                                <span className="tag">C++</span>
                                <span className="tag">FPS Prototype</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A first-person technical prototype built in <strong>Unreal Engine 5</strong>. 
                                It serves as the primary validation environment for <strong>NexusGate</strong>, generating granular player data through a C++ "Powerizer" system.
                            </p>
                            <p className="project-meta">
                                <strong>Key Achievement:</strong> Successfully synchronizes "Elemental States" and puzzle flags across distributed server instances.
                            </p>
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
                                Developed a robust desktop application using <strong>PyQT</strong>. Completed during a high-stakes family medical emergency, 
                                demonstrating the professional resilience I bring to every engineering role.
                            </p>
                            <p className="project-meta">
                                <strong>Roadmap:</strong> Currently architecting a full-stack rework using <strong>React</strong> and <strong>Django</strong>.
                            </p>
                        </div>
                    </div>
                </div> 
            </div> 
        </header>
    );
};

export default Projects;
