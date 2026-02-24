import React from "react";
import "./Skills.css";
import "../Shared/Shared.css";

const Skills = () => {
    const techStack = [
        {
            title: "Cloud & Infrastructure",
            skills: ["Azure Static Web Apps", "Azure Functions", "Cosmos DB", "Azure Monitor", "OCI (VM Provisioning)", "Docker", "Linux Admin", "CI/CD"]
        },
        {
            title: "Software Engineering",
            skills: ["Python", "JavaScript / TypeScript", "C++", "SQL", "Node.js", "React", "Go"]
        },
        {
            title: "Systems & Networking",
            skills: ["RESTful APIs", "Async / Concurrency", "TCP/UDP", "Redis", "UE5 Networking", "Security & Access Control"]
        },
        {
            title: "Operational Leadership",
            skills: ["Monitoring & Alerting", "Incident Response", "Audit & Compliance", "Capacity Planning", "Systems Thinking", "Technical Documentation"]
        },
        {
            title: "Actively Developing",
            note: "Topics of genuine interest and current study — not yet production-proven.",
            skills: ["Kubernetes", "Terraform", "C# / .NET", "Azure Data Factory", "Azure Synapse Analytics"]
        }
    ];

    return (
        <header className={`App-header`}>
            <div className="App-header_titleSubpage">
                <h1>Skills</h1>
                <div className="subpage-container">
                    <span className="section-label">Technical Stack</span>
                    <p className="skills-intro-comment">
                        {"// System capabilities and core competencies"}
                    </p>
                    
                    <div className="skills-dashboard">
                        {techStack.map((category, idx) => (
                            <div key={idx} className={`skills-category${category.note ? ' skills-category--developing' : ''}`}>
                                <h3>
                                    <span>0{idx + 1}_</span>
                                    {category.title}
                                </h3>
                                {category.note && (
                                    <p className="skills-category-note">{category.note}</p>
                                )}
                                <ul className="skills-list">
                                    {category.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="tag">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div> 
                </div> 
            </div>
        </header>
    );
};

export default Skills;
