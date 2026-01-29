import React from "react";
import { Link } from "react-router-dom"; 

const Projects = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Projects</h1>
                
                <div className="project-container">
                    {/* 1. Capstone Card */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Capstone Project</h2>
                            <div className="tech-stack">
                                <span className="tag">Python</span>
                                <span className="tag">PyQT</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>Developed a desktop application utilizing <strong>PyQT</strong> as the primary interface. Completed during a son's NICU stay, demonstrating professional resilience.</p>
                        </div>
                    </div>

                    {/* 2. Elemental Escapist Card */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Elemental Escapist</h2>
                            <div className="tech-stack">
                                <span className="tag">Unreal Engine 5</span>
                                <span className="tag">C++</span>
                                <span className="tag">Blueprints</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A 3D platformer developed in <strong>Unreal Engine 5</strong>. Focused on implementing fluid character 
                                mechanics and complex elemental interactions through a hybrid <strong>C++ and Blueprint</strong> architecture.
                            </p>
                            <p className="project-meta">
                                <strong>Key Focus:</strong> Optimized game-loop logic and asset management for high-fidelity performance.
                            </p>
                        </div>
                    </div>

                    {/* 3. NexusGate Card */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>NexusGate</h2>
                            <div className="tech-stack">
                                <span className="tag">Go</span>
                                <span className="tag">gRPC</span>
                                <span className="tag">Kubernetes</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A high-performance <strong>API Gateway</strong> designed for microservices orchestration. Built 
                                with <strong>Go</strong> to handle low-latency request routing and service discovery.
                            </p>
                            <p className="project-meta">
                                <strong>Key Focus:</strong> Scalable cloud-native infrastructure with <strong>gRPC</strong> communication 
                                and automated deployment via <strong>Kubernetes</strong>.
                            </p>
                        </div>
                    </div>
                </div> {/* End project-container */}
            </div> {/* End App-header_titleSubpage */}
        </header>
    );
};

export default Projects;
