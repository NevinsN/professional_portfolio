import React, { useState } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import References from "./pages/references";
import Skills from "./pages/skills";
import Capstone from "./pages/projects/capstone";
import MysteryGame from "./pages/projects/Capstone/mysteryGame";
import AnimalShelter from "./pages/projects/Capstone/animalShelter";
import BinarySearchTree from "./pages/projects/Capstone/binarySearchTree";

import { useEffect } from "react";

useEffect(() => {
  document.body.className = theme;
}, [theme]);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
    <Router>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/capstone" element={<Capstone />} />
                <Route path="/projects/capstone/mysteryGame" element={<MysteryGame />} />
                <Route path="/projects/capstone/animalShelter" element={<AnimalShelter />} />
                <Route path="/projects/capstone/binarySearchTree" element={<BinarySearchTree />} />
                <Route path="/references" element={<References />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
    </Router>
    );
}

export default App;
