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
                    <NavLink to="/index" >
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
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;