import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-school-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AIC Sengani Girls</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-school-yellow">Home</Link>
          <Link to="/about" className="hover:text-school-yellow">About</Link>
          <Link to="/academics" className="hover:text-school-yellow">Academics</Link>
          <Link to="/admissions" className="hover:text-school-yellow">Admissions</Link>
          <Link to="/contact" className="hover:text-school-yellow">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-school-green px-3 py-2">Home</Link>
            <Link to="/about" className="block hover:bg-school-green px-3 py-2">About</Link>
            <Link to="/academics" className="block hover:bg-school-green px-3 py-2">Academics</Link>
            <Link to="/admissions" className="block hover:bg-school-green px-3 py-2">Admissions</Link>
            <Link to="/contact" className="block hover:bg-school-green px-3 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
