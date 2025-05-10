import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-school-blue text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-school-yellow">Home</Link></li>
            <li><Link to="/about" className="hover:text-school-yellow">About</Link></li>
            <li><Link to="/academics" className="hover:text-school-yellow">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-school-yellow">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-school-yellow">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p>Phone: (+254) 0714720727</p>
          <p>Email: [email protected]</p>
          <p>Location: Matungulu Sub-County, Machakos County</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-school-yellow">Facebook</a>
            <a href="#" className="hover:text-school-yellow">Twitter</a>
            <a href="#" className="hover:text-school-yellow">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 AIC Sengani Girls School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
