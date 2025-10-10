import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ theme }) => {
    return (
        <header className={`App-header ${theme}`}>
        <div className="App-header_titleSubpage">
            <h1>Projects</h1>

            <ul>
                <li>
                    <Link to="Capstone">Capstone Project</Link>: My final project for my degree program. It is a python application utilizing PyQT as an interface.
                    It is not perfect, but given that I had to work on it while my son was in the NICU, I'm happy with the results.
                    For the next steps, I am planning to rework it again as a full-stack application utilizing 
                    React and Django. 
                </li>
            </ul>

        </div>
        </header>
    );
};

export default Projects;