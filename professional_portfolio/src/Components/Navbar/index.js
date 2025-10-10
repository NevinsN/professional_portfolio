import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Nav>
                <Bars onClick={handleMenuToggle} />

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
                    <button onClick={toggleTheme}>
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
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