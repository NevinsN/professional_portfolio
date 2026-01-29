import React from "react";
// No need to import Link if we aren't linking to a sub-page yet, 
// but kept it here in case you have a 'Capstone' route ready.
import { Link } from "react-router-dom"; 

const Projects = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Projects</h1>

                <div className="project-container">
                    {/* Project Card 1: Capstone */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>
                                <Link to="Capstone" className="project-link">Capstone Project</Link>
                            </h2>
                            <div className="tech-stack">
                                <span className="tag">Python</span>
                                <span className="tag">PyQT</span>
                                <span className="tag">React/Django (Future)</span>
                            </div>
                        </div>

                        <div className="project-body">
                            <p>
                                Developed a desktop application utilizing <strong>PyQT</strong> as the primary interface. 
                                While completed during a challenging period while my son was in the NICU, the project 
                                stands as a testament to my commitment and resilience.
                            </p>
                            <p className="project-meta">
                                <strong>Next Steps:</strong> Architecting a full-stack evolution using 
                                <strong> React</strong> and <strong>Django</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Projects;
