import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-galaxy-surface border-t border-galaxy-accent/20 text-galaxy-text py-12 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-galaxy-highlight">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-galaxy-accent transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-galaxy-accent transition duration-300">About</Link></li>
            <li><Link to="/academics" className="hover:text-galaxy-accent transition duration-300">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-galaxy-accent transition duration-300">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-galaxy-accent transition duration-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6 text-galaxy-highlight">Contact Information</h3>
          <div className="space-y-3">
            <p>Phone: (+254) 723324518</p>
            <p>Email: senganigirlsschool@gmail.com</p>
            <p>Location: Matungulu Sub-County, Machakos County</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6 text-galaxy-highlight">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/aicsengani" target="_blank" rel="noopener noreferrer" className="hover:text-galaxy-accent transition duration-300">Facebook</a>
            <a href="https://twitter.com/aicsengani" target="_blank" rel="noopener noreferrer" className="hover:text-galaxy-accent transition duration-300">Twitter</a>
            <a href="https://instagram.com/aicsengani" target="_blank" rel="noopener noreferrer" className="hover:text-galaxy-accent transition duration-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-galaxy-accent/20 pt-6 text-galaxy-text/80">
        <p>&copy; 2025 AIC Sengani Girls School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
