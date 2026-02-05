import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import References from './Components/References/References';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      {/* The .App wrapper gets the .dark or .light class for global theming */}
      <div className={`App ${theme}`}>
        <nav className="Nav">
          <div className="NavMenu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/references">References</Link>
          </div>
          
          <button onClick={toggleTheme} className="action-btn">
            {theme === 'light' ? 'TERMINAL MODE' : 'BLUEPRINT MODE'}
          </button>
        </nav>

        {/* This is the main container that holds your Blueprint/Schematic gradients */}
        <main className={`App-header ${theme}`}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/skills" element={<Skills theme={theme} />} />
            <Route path="/references" element={<References theme={theme} />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>© 2024 Nicholas Nevins | SRE Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
