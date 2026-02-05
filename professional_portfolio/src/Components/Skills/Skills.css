import React from "react";
import "./Skills.css";

const Skills = ({ theme }) => {
    const techStack = [
        { 
            title: "Cloud & Infrastructure", 
            skills: ["Kubernetes", "Docker", "Terraform", "Linux Admin", "CI/CD", "OCI"] 
        },
        { 
            title: "Software Engineering", 
            skills: ["Python", "Go", "C++", "SQL", "Node.js", "React"] 
        },
        { 
            title: "Systems & Networking", 
            skills: ["TCP/UDP", "Redis", "RESTful APIs", "UE5 Networking"] 
        },
        { 
            title: "Operational Leadership", 
            skills: ["Incident Response", "Systems Thinking", "Capacity Planning", "Toil Reduction"] 
        }
    ];

    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Technical Stack</h1>
                <p style={{fontFamily: 'var(--font-mono)', fontSize: '0.9rem', opacity: 0.8}}>
                    // System capabilities and core competencies
                </p>
                
                <div className="skills-dashboard">
                    {techStack.map((category, idx) => (
                        <div key={idx} className="skills-category">
                            <h3>
                                <span style={{fontSize: '0.8rem'}}>0{idx + 1}_</span>
                                {category.title}
                            </h3>
                            <ul className="skills-list">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="skill-tag">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div> 
            </div> 
        </header>
    );
};

export default Skills;
