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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/references" element={<References />} />
          </Routes>
      </main>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
