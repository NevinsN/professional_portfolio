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
                <Bars onClick={handleMenuToggle} />
                <button
                    onClick={toggleTheme}
                    style={{
                        position: 'absolute',
                        left: '80px', // keep right of hamburger
                        top: '16px', // match Bars top
                        zIndex: 101,
                        background: 'rgba(0,0,0,0.1)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px', // match Bars padding
                        fontSize: '2.2rem', // match Bars font size
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        transition: 'background 0.2s, color 0.2s',
                        height: '40px', // match Bars height (fontSize + padding)
                        width: '40px', // match Bars width
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
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
    const link = document.createElement("a");
    link.href = "Nicholas_Nevins_Resume.pdf"; // Direct path to file
    link.download = "Nicholas_Nevins_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default Navbar;
