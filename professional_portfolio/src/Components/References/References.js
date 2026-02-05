import React from "react";

const References = ({ theme }) => {
    const contacts = [
        { 
            name: "Will Holt", 
            role: "Zone Manager", 
            phone: "208-800-9112", 
            email: "wholt@talkingrain.com" 
        },
        { 
            name: "Israel (Izzy) Ayola", 
            role: "Manager", 
            phone: "208-880-4996", 
            email: "iayola@talkingrain.com" 
        },
        { 
            name: "Rodd Rapp", 
            role: "Ecclesiastical Leader", 
            phone: "208-589-9437", 
            email: "RappR@d93.k12.id.us" 
        },
        { 
            name: "Allycia Heath", 
            role: "Assistant Manager", 
            phone: "208-757-0704", 
            email: "allycia.heath@gmail.com" 
        },
        { 
            name: "Michael Berg", 
            role: "Manager", 
            phone: "208-510-8486", 
            email: "mrberg84@gmail.com" 
        }
    ];

    return (
        <header className={`App-header ${theme}`}>
            <div className="App-header_titleSubpage">
                <h1>Professional References</h1>
                
                <div className="project-container">
                    {contacts.map((ref, idx) => (
                        <div key={idx} className="project-card reference-card">
                            <h2>{ref.name}</h2>
                            <p className="tag" style={{ display: 'inline-block', marginBottom: '15px' }}>
                                {ref.role}
                            </p>
                            <div className="project-body">
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                    <strong>Phone:</strong> {ref.phone}
                                </p>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                    <strong>Email:</strong> {ref.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default References;