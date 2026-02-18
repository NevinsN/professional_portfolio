import React from "react";
import "./Skills.css";
import "../Shared/Shared.css";

const Skills = () => {
    const techStack = [
        { title: "Cloud & Infrastructure", skills: ["Kubernetes", "Docker", "Terraform", "Linux Admin", "CI/CD", "OCI"] },
        { title: "Software Engineering", skills: ["Python", "Go", "C++", "SQL", "Node.js", "React"] },
        { title: "Systems & Networking", skills: ["TCP/UDP", "Redis", "RESTful APIs", "UE5 Networking"] },
        { title: "Operational Leadership", skills: ["Incident Response", "Systems Thinking", "Capacity Planning", "Toil Reduction"] }
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
                            <div key={idx} className="skills-category">
                                <h3>
                                    <span>0{idx + 1}_</span>
                                    {category.title}
                                </h3>
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
