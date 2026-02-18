import React from "react";
import "./References.css";
import "../Shared/Shared.css";

const References = () => {
    const contacts = [
        { name: "Will Holt", role: "Zone Manager", phone: "208-800-9112", email: "wholt@talkingrain.com" },
        { name: "Israel (Izzy) Ayola", role: "Manager", phone: "208-880-4996", email: "iayola@talkingrain.com" },
        { name: "Rodd Rapp", role: "Ecclesiastical Leader", phone: "208-589-9437", email: "RappR@d93.k12.id.us" },
        { name: "Allycia Heath", role: "Assistant Manager", phone: "208-757-0704", email: "allycia.heath@gmail.com" },
        { name: "Michael Berg", role: "Manager", phone: "208-510-8486", email: "mrberg84@gmail.com" }
    ];

    return (
        <header className={`App-header`}>
            <div className="subpage-container">
                <span className="section-label">Professional References</span>
                <p className="skills-intro-comment">
                    {"// Verified nodes in my professional network"}
                </p>
                
                <div className="references-grid">
                    {contacts.map((ref, idx) => (
                        <div key={idx} className="reference-card">
                            <h2>{ref.name}</h2>
                            <span className="ref-role">{ref.role}</span>
                            
                            <div className="ref-contact-info">
                                <div className="contact-item">
                                    <span className="contact-label">TEL:</span>
                                    <span className="contact-value">{ref.phone}</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">EXT:</span>
                                    <span className="contact-value">{ref.email}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default References;
