import React from "react";

const Skills = ({ theme }) => {
    const categories = [
        { 
            title: "Cloud & Infrastructure", 
            skills: ["Kubernetes", "Agones", "Docker", "Terraform", "Linux Admin", "CI/CD"] 
        },
        { 
            title: "Software Engineering", 
            skills: ["Python", "C++", "Go", "SQL", "Node.js", "React", "TypeScript"] 
        },
        { 
            title: "Game Backend & Systems", 
            skills: ["UE5 Networking", "TCP/UDP", "Redis", "Server Orchestration"] 
        },
        { 
            title: "Operational Leadership", 
            skills: ["Systems Thinking", "Agile/Scrum", "Capacity Planning", "Technical Writing"] 
        }
    ];

    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Technical Stack</h1>
                
                <div className="skills-container" style={{ background: 'transparent' }}>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="skills-category">
                            <h3>{cat.title}</h3>
                            <ul className="skills-list">
                                {cat.skills.map((skill, sIdx) => (
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
