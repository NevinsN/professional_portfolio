import React, { useState, useEffect, useRef } from "react";
import { Nav, NavLink, Bars, NavMenu, ResumeButton, ThemeToggleButton } from "./NavbarElements";

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // The "sensor" for the menu

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    // Logic to detect clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the menu is open and the user clicks outside the menuRef
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    
    // Restoration of the download logic inside the component scope or globally
    const downloadTxtFile = () => {
        const link = document.createElement("a");
        link.href = "Nicholas_Nevins_Resume.pdf"; // Ensure this file is in your /public folder
        link.download = "Nicholas_Nevins_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Nav>
            <NavLink to="/home" className="nav-logo">
              NN
            </NavLink>

            <Bars onClick={handleMenuToggle} />

            <NavMenu ref={menuRef} className={isOpen ? "active" : ""}>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                
                <ResumeButton onClick={downloadTxtFile}>
                    <i className="fa fa-download"></i> RÉSUMÉ
                </ResumeButton>
                
                {/* Swapping the generic button for the Styled Component */}
                <ThemeToggleButton onClick={toggleTheme}>
                {theme === "dark" ? "☀" : "🌙"}
                </ThemeToggleButton>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;
