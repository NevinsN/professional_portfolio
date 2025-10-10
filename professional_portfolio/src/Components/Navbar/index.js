import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Nav>
                <button
                    onClick={toggleTheme}
                    style={{
                        position: 'absolute',
                        left: '24px', // align to left
                        top: '16px',
                        zIndex: 101,
                        background: 'rgba(0,0,0,0.1)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 12px', // less tall, wider
                        fontSize: '1.8rem', // slightly smaller
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        transition: 'background 0.2s, color 0.2s',
                        height: 'auto',
                        width: 'auto',
                        marginRight: '12px' // space between button and hamburger
                    }}
                    onMouseOver={e => {
                        e.target.style.background = '#ecdc1a';
                        e.target.style.color = '#006910';
                    }}
                    onMouseOut={e => {
                        e.target.style.background = 'rgba(0,0,0,0.1)';
                        e.target.style.color = '#fff';
                    }}
                >
                    {theme === "dark" ? "☀" : "🌙"}
                </button>
                <Bars onClick={handleMenuToggle} style={{ left: '64px', right: 'auto' }} />
                <NavMenu className={isOpen ? "active" : ""}>
                    <NavLink to="/home" onClick={() => setIsOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                        Projects
                    </NavLink>
                    <NavLink to="/skills" onClick={() => setIsOpen(false)} activeStyle>
                        Skills
                    </NavLink>
                    <NavLink to="/experience" onClick={() => setIsOpen(false)} activeStyle>
                        Experience
                    </NavLink>
                    <NavLink to="/references" onClick={() => setIsOpen(false)} activeStyle>
                        References
                    </NavLink>
                    <button id="resumeBtn" onClick={(e) => { downloadTxtFile(); setIsOpen(false); }} value="resume"><i class="fa fa-download" aria-hidden="true"></i>Résumé</button>
                </NavMenu>
            </Nav>
        </>
    );
};

const downloadTxtFile = () => {
    fetch("Resume Nicholas Nevins Software Developer.pdf").then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Nicholas_Nevins_Resume.pdf";
            alink.click();
        });
    });
}

export default Navbar;