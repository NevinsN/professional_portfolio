import React from "react";
import "./Projects.css";
import "../Shared/Shared.css";


const Projects = () => {
    return (
        <header className={`App-header`}>
            <div className="App-header_titleSubpage">
                <h1>Projects</h1>
                
                <div className="project-container">
                    

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
                                A desktop application utilizing <strong>PyQT</strong> as the primary interface. 
                                Completed during a challenging period while my son was in the <strong>NICU</strong>, this project stands as a testament to my commitment and resilience.
                            </p>
                            <p className="project-meta">
                                <strong>Next Steps:</strong> Architecting a full-stack evolution using <strong>React</strong> and <strong>Django</strong>.
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
                                <span className="tag">Netlify CI/CD serviced by GitHub Actions</span>
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                                A high-performance personal portfolio built with <strong>React</strong> and <strong>Styled Components</strong>. 
                                Focuses on responsive UI/UX and automated deployment pipelines.
                            </p>
                            <p className="project-meta">
                                <strong>Key Feature:</strong> Integrated dark/light theme engine and mobile-first navigation logic, including custom flexbox-based headers.
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