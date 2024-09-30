import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import References from "./pages/references";
import Skills from "./pages/skills";

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/index" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route
                    path="/references"
                    element={<References />}
                />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </Router>
    );
}

export default App;
