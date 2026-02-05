import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Adjust path if necessary
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import References from './Components/References/References';
import Footer from './Components/Footer/Footer'; 
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark'); // Suggest starting with dark

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        {/* REPLACED: Using your custom Navbar component */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className={"App-header}"}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/skills" element={<Skills theme={theme} />} />
            <Route path="/references" element={<References theme={theme} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
