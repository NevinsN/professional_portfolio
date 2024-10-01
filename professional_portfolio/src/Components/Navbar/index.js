import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/projects" >
                        Projects
                    </NavLink>
                    <NavLink to="/skills" activeStyle>
                        Skills
                    </NavLink>
                    <NavLink to="/experience" activeStyle>
                        Experience
                    </NavLink>
                    <NavLink to="/references" activeStyle>
                        References
                    </NavLink>
                    <button id="resumeBtn" onClick={downloadTxtFile} value="resume"><i class="fa fa-download" aria-hidden="true"></i>Résumé</button>
                </NavMenu>
            </Nav>
        </>
    );
};

const downloadTxtFile = () => {
    fetch("Nicholas_Nevins_Resume.pdf").then((response) => {
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