import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-16 bg-galaxy-deep min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-galaxy-text mb-6 tracking-wide">
          Welcome to AIC Sengani Girls School
        </h1>
        <p className="text-xl text-galaxy-text/80 mb-10 max-w-3xl mx-auto">
          Empowering Young Minds in Machakos County, Kenya
        </p>
        <div className="w-full h-1 bg-galaxy-accent mx-auto mb-4" style={{maxWidth: '300px'}}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-galaxy-deep p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-galaxy-text mb-6 tracking-wide">About Us</h2>
          <p className="text-galaxy-text/80 mb-6 leading-relaxed">
            Located in Matungulu Sub-County, Machakos County, we are dedicated to providing quality education.
          </p>
          <Link to="/about" className="text-galaxy-accent hover:text-galaxy-highlight text-lg transition-colors duration-300 flex items-center">
            Learn More <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-galaxy-deep p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-galaxy-text mb-6 tracking-wide">Academics</h2>
          <p className="text-galaxy-text/80 mb-6 leading-relaxed">
            We offer a comprehensive curriculum designed to challenge and inspire our students.
          </p>
          <Link to="/academics" className="text-galaxy-accent hover:text-galaxy-highlight text-lg transition-colors duration-300 flex items-center">
            Explore Courses <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-galaxy-deep p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-galaxy-text mb-6 tracking-wide">Admissions</h2>
          <p className="text-galaxy-text/80 mb-6 leading-relaxed">
            Join our community of learners. Find out about our admission process and requirements.
          </p>
          <Link to="/admissions" className="text-galaxy-accent hover:text-galaxy-highlight text-lg transition-colors duration-300 flex items-center">
            Apply Now <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center bg-galaxy-deep p-12 rounded-lg shadow-2xl border border-galaxy-accent/20">
        <h3 className="text-3xl font-bold text-galaxy-text mb-8 tracking-wide">Principal's Message</h3>
        <blockquote className="italic text-galaxy-text/80 max-w-3xl mx-auto text-lg leading-relaxed">
          "At AIC Sengani Girls School, we believe in nurturing not just academic excellence, 
          but also character, leadership, and personal growth for every student."
          <br />
          <span className="block mt-6 font-semibold text-galaxy-accent">- Dr. Margaret Mwendwa, School Principal</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
