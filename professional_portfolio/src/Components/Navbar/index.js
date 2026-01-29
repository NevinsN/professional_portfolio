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
                    <button className="theme-toggle" onClick={toggleTheme}>
                      {theme === "dark" ? "☀" : "🌙"}
                    </button>
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
