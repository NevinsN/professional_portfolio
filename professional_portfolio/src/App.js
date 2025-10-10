import React, { useState, useEffect } from "react";
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

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
    <Router>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
            <Routes>
                <Route path="/home" element={<Home theme={theme} />} />
                <Route path="/experience" element={<Experience theme={theme} />} />
                <Route path="/projects" element={<Projects theme={theme} />} />
                <Route path="/projects/capstone" element={<Capstone theme={theme} />} />
                <Route path="/projects/capstone/mysteryGame" element={<MysteryGame theme={theme} />} />
                <Route path="/projects/capstone/animalShelter" element={<AnimalShelter theme={theme} />} />
                <Route path="/projects/capstone/binarySearchTree" element={<BinarySearchTree theme={theme} />} />
                <Route path="/references" element={<References theme={theme} />} />
                <Route path="/skills" element={<Skills theme={theme} />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
    </Router>
    );
}

export default App;
