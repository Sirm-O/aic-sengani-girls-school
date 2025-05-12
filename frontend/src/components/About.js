import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 bg-galaxy-deep">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="bg-galaxy-surface p-6 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300 animate-pulse">
            <p className="mb-4 text-galaxy-highlight opacity-90 text-lg tracking-wide font-['Orbitron']">Welcome to AIC Sengani Girls School</p>
            <p className="text-galaxy-text leading-relaxed font-['Chakra_Petch']">
              We are dedicated to providing high-quality education that empowers young women to become innovative leaders and critical thinkers.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/school-gallery/ksef-2025/Principal and Patron for KSEF.jpg"
            alt="Dr. Margaret Mwendwa with Patron at KSEF 2025"
            className="w-full h-96 object-cover object-center rounded-lg shadow-2xl border-4 border-galaxy-accent/30 hover:border-galaxy-accent/50 transition-all duration-300 hover:scale-105"
            onError={(e) => {
              e.target.src = '/logo192.png';
            }}
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-5xl font-bold text-galaxy-highlight mb-6 tracking-wide font-['Orbitron'] animate-bounce">Our Mission</h2>
        <p className="max-w-4xl mx-auto text-galaxy-text text-xl leading-relaxed opacity-90 font-['Chakra_Petch']">
          Our mission is to provide a comprehensive, high-quality education that develops well-rounded students. 
          We focus on academic excellence, personal growth, leadership skills, and preparing students for future challenges.
        </p>
      </div>

      <div className="mt-12 text-center bg-galaxy-surface p-6 rounded-lg border border-galaxy-accent/20">
        <h3 className="text-3xl text-galaxy-highlight mb-4 font-['Orbitron'] animate-pulse">Contact Information</h3>
        <p className="text-galaxy-text font-['Chakra_Petch'] text-lg">
          <strong>Phone:</strong> (+254) 723324518<br />
          <strong>Email:</strong> senganigirlsschool@gmail.com<br />
          <strong>Location:</strong> Matungulu Sub-County, Machakos County, Kenya
        </p>
      </div>
    </div>
  );
}

export default About;
