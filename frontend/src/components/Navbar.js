import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-galaxy-surface border-b border-galaxy-accent/20 text-galaxy-text p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-galaxy-highlight">AIC Sengani Girls</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-galaxy-accent transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-galaxy-accent transition duration-300">About</Link>
          <Link to="/academics" className="hover:text-galaxy-accent transition duration-300">Academics</Link>
          <Link to="/admissions" className="hover:text-galaxy-accent transition duration-300">Admissions</Link>
          <Link to="/achievements" className="hover:text-galaxy-accent transition duration-300">Achievements</Link>
          <Link to="/contact" className="hover:text-galaxy-accent transition duration-300">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-galaxy-text">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-galaxy-accent/20 px-3 py-2 rounded">Home</Link>
            <Link to="/about" className="block hover:bg-galaxy-accent/20 px-3 py-2 rounded">About</Link>
            <Link to="/academics" className="block hover:bg-galaxy-accent/20 px-3 py-2 rounded">Academics</Link>
            <Link to="/admissions" className="block hover:bg-galaxy-accent/20 px-3 py-2 rounded">Admissions</Link>
            <Link to="/contact" className="block hover:bg-galaxy-accent/20 px-3 py-2 rounded">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
