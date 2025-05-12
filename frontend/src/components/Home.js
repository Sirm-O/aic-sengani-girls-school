import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-16 bg-galaxy-deep min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-galaxy-highlight mb-6 font-['Orbitron'] tracking-wide animate-pulse">
          AIC Sengani: Cosmic Frontier of Education
        </h1>
        <p className="text-2xl text-galaxy-text mb-10 font-['Chakra_Petch'] opacity-80 max-w-3xl mx-auto">
          Launching Young Minds Beyond Terrestrial Boundaries of Knowledge
        </p>
        <div className="w-full h-1 bg-galaxy-accent mx-auto mb-4 animate-pulse" style={{maxWidth: '300px'}}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-galaxy-highlight mb-6 font-['Orbitron'] tracking-wide">Galactic Origins</h2>
          <p className="text-galaxy-text mb-6 font-['Chakra_Petch'] leading-relaxed">
            Anchored in Matungulu Sub-County, our educational starship is engineered to navigate the complex intellectual cosmos.
          </p>
          <Link to="/about" className="text-galaxy-accent hover:text-galaxy-highlight font-['Orbitron'] text-lg transition-colors duration-300 flex items-center">
            Explore Mission <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-galaxy-highlight mb-6 font-['Orbitron'] tracking-wide">Quantum Learning</h2>
          <p className="text-galaxy-text mb-6 font-['Chakra_Petch'] leading-relaxed">
            Our curriculum transcends traditional learning, offering an interdimensional approach to knowledge acquisition.
          </p>
          <Link to="/academics" className="text-galaxy-accent hover:text-galaxy-highlight font-['Orbitron'] text-lg transition-colors duration-300 flex items-center">
            Decode Courses <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-galaxy-highlight mb-6 font-['Orbitron'] tracking-wide">Cosmic Recruitment</h2>
          <p className="text-galaxy-text mb-6 font-['Chakra_Petch'] leading-relaxed">
            Embark on your interstellar academic journey. Discover our pioneering admission protocols.
          </p>
          <Link to="/admissions" className="text-galaxy-accent hover:text-galaxy-highlight font-['Orbitron'] text-lg transition-colors duration-300 flex items-center">
            Initiate Transmission <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center bg-galaxy-surface p-12 rounded-lg shadow-2xl border border-galaxy-accent/20">
        <h3 className="text-4xl font-bold text-galaxy-highlight mb-8 font-['Orbitron'] tracking-wide animate-bounce">Transmission from Mission Control</h3>
        <blockquote className="italic text-galaxy-text max-w-3xl mx-auto text-xl font-['Chakra_Petch'] leading-relaxed">
          "Our educational mission transcends conventional learning. We are not just cultivating academic prowess, 
          but engineering future cosmic pioneers who will navigate the complex intellectual and ethical landscapes of tomorrow."
          <br />
          <span className="block mt-6 font-semibold text-galaxy-accent text-2xl">- Dr. Margaret Mwendwa, Starship Captain</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
