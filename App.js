import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      
      {/* Sidebar container */}
      <div
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        onMouseEnter={() => window.innerWidth > 768 && setIsSidebarOpen(true)}
        onMouseLeave={() => window.innerWidth > 768 && setIsSidebarOpen(false)}
      >
        {/* Arrow Icon and Menu Icon */}
        {!isSidebarOpen && (
          <div className="sidebar-indicator" onClick={window.innerWidth <= 768 ? toggleSidebar : null}>
            <span>&#9776;</span> {/* Hamburger menu icon */}
          </div>
        )}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* Close button for mobile */}
        {isSidebarOpen && window.innerWidth <= 768 && (
          <div className="sidebar-close" onClick={toggleSidebar}>
            &times; {/* Close icon */}
          </div>
        )}
      </div>

      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1>Your Name</h1>
        <p><a href="resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a></p>
      </header>

      <section>
        <h2 id="projects">Projects</h2>
        <ul>
          <li>Project 1: <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub Link</a></li>
          <li>Project 2: <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub Link</a></li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
