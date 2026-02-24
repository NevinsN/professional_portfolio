import React from "react";
import "./References.css";
import "../Shared/Shared.css";

const References = () => {
    const contacts = [
        { name: "Will Holt", role: "Zone Manager", company: "Talking Rain Beverage Co." },
        { name: "Israel (Izzy) Ayola", role: "Manager", company: "Talking Rain Beverage Co." },
        { name: "Rodd Rapp", role: "Ecclesiastical Leader", company: "Community" },
        { name: "Allycia Heath", role: "Assistant Manager", company: "Kroger / Fred Meyer" },
        { name: "Michael Berg", role: "Manager", company: "Kroger / Fred Meyer" }
    ];

    return (
        <header className={`App-header`}>
            <div className="App-header_titleSubpage">
                <h1>References</h1>
                <div className="subpage-container">
                    <span className="section-label">Professional References</span>
                    <p className="skills-intro-comment">
                        {"// Contact information available upon request"}
                    </p>
                    
                    <div className="references-grid">
                        {contacts.map((ref, idx) => (
                            <div key={idx} className="reference-card">
                                <h2>{ref.name}</h2>
                                <span className="ref-role">{ref.role}</span>
                                <span className="ref-company">{ref.company}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default References;
