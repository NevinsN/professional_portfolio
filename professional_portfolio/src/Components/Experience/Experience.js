import React from "react";
import "./Experience.css";
import "../Shared/Shared.css";

const Experience = () => {
    return (
        <header className={`App-header`}>
            <div className="App-header_titleSubpage">
                <h1>Experience</h1>
                
                <div className="experience-wrapper">

                    {/* Independent Development */}
                    <div className="experience-card">
                        <div className="exp-header">
                            <div className="exp-company">
                                <h2>Independent Development</h2>
                                <div className="exp-role">Self-Directed Engineering</div>
                            </div>
                            <div className="exp-date">2024 – Present</div>
                        </div>
                        <div className="exp-body">
                            <ul>
                                <li>Designed and deployed <strong>Bespoke Library</strong> — a production platform on Azure Static Web Apps, Azure Functions, and Cosmos DB — featuring a normalized 7-collection schema, server-side permission enforcement, and atomic invite redemption. Live at nicholasnevins.org.</li>
                                <li>Built <strong>Nazh Engine</strong>, a high-concurrency Python utility with cryptographically secure randomization, structured logging, and sub-200ms p99 latency targets — deployed via automated GitHub Actions CI/CD.</li>
                                <li>Completed this portfolio site with a custom theme engine and full Azure deployment pipeline, alongside ongoing study of Kubernetes, Terraform, C#, and Azure data services.</li>
                            </ul>
                        </div>
                    </div>

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
                                <li>Used Repsly field operations software and VIP sales dashboards to track account performance, identify execution gaps, and prioritize daily territory decisions based on data rather than intuition.</li>
                                <li>Coordinated across retail stakeholders to resolve shelf and inventory issues — identifying the root cause of recurring problems and driving process changes that stuck.</li>
                                <li>Managed a high-autonomy territory with no direct oversight, requiring the same self-direction and accountability expected in a distributed engineering environment.</li>
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
                                <li>Inherited a disorganized department and redesigned the inventory system from scratch — establishing clear compartmentalization, par levels, and minimums. The rebuilt system held 99%+ availability with stockouts occurring only during warehouse shortages or demand spikes outside normal variance.</li>
                                <li>Led a team of ~10, translating operational requirements into clear, executable instructions and maintaining consistent standards across a high-volume, time-sensitive environment.</li>
                                <li>Used Kroger's computer-assisted ordering system daily — analyzing usage trends, adjusting lead-time variables, and tuning order quantities to minimize both waste and shortfall. The same data-driven feedback loop applied here maps directly to monitoring, alerting, and continuous improvement in cloud operations.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Experience;