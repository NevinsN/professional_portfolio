import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import References from "./pages/references";
import Skills from "./pages/skills";
//import { useState } from "react";

function App() {
    //const [open, setOpen] = useState(false);
  return (
    <Router>
      <Header updateOrderRoutes={updateOrderRoutes} />
            <Navbar />
            <Switch>
            <Routes>
                <Route path="/home" element={<Home />} />
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
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
            </Switch>
    </Router>
    );
}

export default App;
