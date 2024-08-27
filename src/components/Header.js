import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Yashashri Sonar</h1>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
