import React from "react";

const Experience = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Experience</h1>
                
                <div className="project-container">
                    {/* Talking Rain - Field Sales Specialist */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Talking Rain Beverage Company</h2>
                            <div className="tech-stack">
                                <span className="tag">Strategic Sales</span>
                                <span className="tag">Relationship Management</span>
                                <span className="tag">Self-Starter</span>
                            </div>
                            <p style={{ fontWeight: '600', color: 'var(--primary-green)', marginTop: '5px' }}>
                                Field Sales Specialist | Feb 2023 – Present
                            </p>
                        </div>
                        <div className="project-body">
                            <ul>
                                [span_2](start_span)<li>Coordinated workflow improvements across stakeholder groups, identifying process friction and implementing manual solutions to improve team output[span_2](end_span).</li>
                                [span_3](start_span)<li>Analyzed operational patterns to optimize daily tasks, demonstrating the self-management required for remote, global engineering roles[span_3](end_span).</li>
                                [span_4](start_span)<li>Builds relationships and grows regional sales with little oversight in dynamic, rapid-paced environments[span_4](end_span).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Kroger/Fred Meyer - Department Lead */}
                    <div className="project-card">
                        <div className="project-header">
                            <h2>Kroger Company (Fred Meyer)</h2>
                            <div className="tech-stack">
                                <span className="tag">Operations Leadership</span>
                                <span className="tag">Resource Allocation</span>
                                <span className="tag">QA Standards</span>
                            </div>
                            <p style={{ fontWeight: '600', color: 'var(--primary-green)', marginTop: '5px' }}>
                                Department Lead | Mar 2010 – Jan 2023
                            </p>
                        </div>
                        <div className="project-body">
                            <ul>
                                [span_5](start_span)<li>Managed high-volume operations while maintaining 99%+ stock availability through a physical par-level inventory system[span_5](end_span).</li>
                                [span_6](start_span)<li>Optimized resource allocation by analyzing usage trends and calculating reorder points based on lead-time variables[span_6](end_span).</li>
                                [span_7](start_span)<li>Restructured ingredient storage systems to streamline production, reducing waste and increasing team efficiency[span_7](end_span).</li>
                                [span_8](start_span)<li>Translated complex operational requirements into clear technical instructions for consistent service delivery[span_8](end_span).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Experience;
