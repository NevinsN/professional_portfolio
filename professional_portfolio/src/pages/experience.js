import React from "react";

const Experience = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Experience</h1>
                
                <div className="project-container">
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Talking Rain Beverage Company</h2>
                            <div className="tech-stack">
                                <span className="tag">Strategic Sales</span>
                                <span className="tag">Relationship Management</span>
                            </div>
                            <p style={{ fontWeight: '600', marginTop: '10px' }}>
                                Field Sales Specialist | 2023 – Present
                            </p>
                        </div>
                        <div className="project-body">
                            <ul>
                                <li>Coordinated workflow improvements across stakeholder groups, identifying process friction and implementing solutions.</li>
                                <li>Analyzed operational patterns to optimize daily tasks, demonstrating the self-management required for remote engineering.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-header">
                            <h2>Kroger Company (Fred Meyer)</h2>
                            <div className="tech-stack">
                                <span className="tag">Operations Leadership</span>
                                <span className="tag">Resource Allocation</span>
                            </div>
                            <p style={{ fontWeight: '600', marginTop: '10px' }}>
                                Department Lead | 2010 – 2023
                            </p>
                        </div>
                        <div className="project-body">
                            <ul>
                                <li>Managed high-volume operations with 99%+ stock availability through par-level inventory systems.</li>
                                <li>Optimized resource allocation by analyzing usage trends and lead-time variables.</li>
                                <li>Translated complex operational requirements into clear technical instructions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Experience;
