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
      <Nav>
            <Bars onClick={handleMenuToggle} />
            <NavLink to="/home" onClick={() => setIsOpen(false)} className="nav-logo">
              NN
            </NavLink>

            {/* This div must have the ref and the active class */}
            <NavMenu ref={menuRef} className={isOpen ? "active" : ""}>
                <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
                <NavLink to="/references" onClick={() => setIsOpen(false)}>References</NavLink>
                
                <button id="resumeBtn" onClick={() => { downloadTxtFile(); setIsOpen(false); }}>
                    <i className="fa fa-download"></i> Résumé
                </button>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "dark" ? "☀" : "🌙"}
                </button>
            </NavMenu>
        </Nav>
    );
};              

export default Navbar;
