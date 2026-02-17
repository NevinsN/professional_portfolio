import React from "react";
import "./Experience.css";
import "../Shared/Shared.css";

const Experience = () => {
    return (
        <header className={`App-header`}>
            <div className="App-header_titleSubpage">
                <h1>Experience</h1>
                
                <div className="experience-wrapper">
                    {/* Talking Rain */}
                    <div className="experience-card">
                        <div className="exp-header">
                            <div className="exp-company">
                                <h2>Talking Rain Beverage Company</h2>
                                <div className="exp-role">Field Sales Specialist</div>
                            </div>
                            <div className="exp-date">2023 – Present</div>
                        </div>
                        <div className="exp-body">
                            <ul>
                                <li>Coordinated workflow improvements across stakeholder groups, identifying process friction and implementing technical solutions.</li>
                                <li>Analyzed operational patterns to optimize daily tasks, demonstrating the self-management required for remote engineering.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Kroger */}
                    <div className="experience-card">
                        <div className="exp-header">
                            <div className="exp-company">
                                <h2>Kroger Company (Fred Meyer)</h2>
                                <div className="exp-role">Department Lead</div>
                            </div>
                            <div className="exp-date">2010 – 2023</div>
                        </div>
                        <div className="exp-body">
                            <ul>
                                <li>Managed high-volume operations with 99%+ stock availability through par-level inventory systems.</li>
                                <li>Optimized resource allocation by analyzing usage trends and lead-time variables.</li>
                                <li>Translated complex operational requirements into clear technical instructions for team execution.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Experience;
