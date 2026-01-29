import React from 'react';

const Skills = () => {
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
    /* We add App-header and light so it inherits the bubbles/gradient */
    <section className="App-header light skills-container">
      <div className="App-header_content">
        <h2 style={{ marginBottom: '20px' }}>Technical Stack</h2>
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
    </section>
  );

export default Skills;