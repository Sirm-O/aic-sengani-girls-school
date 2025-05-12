import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 bg-cosmic-background">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="bg-cosmic-surface p-6 rounded-lg shadow-2xl border border-cosmic-accent/20 hover:border-cosmic-accent/50 transition-all duration-300">
            <p className="mb-4 text-cosmic-highlight opacity-90 text-lg tracking-wide">Dear Cosmic Explorers,</p>
            <p className="text-cosmic-text leading-relaxed">
              Welcome to AIC Sengani Girls School, where we launch young minds into the universe of knowledge, 
              empowering students to become the bright stars of tomorrow&apos;s scientific frontier.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/school-gallery/ksef-2025/Prinicipal and Patron for KSEF.jpg"
            alt="Dr. Margaret Mwendwa with Patron at KSEF 2025"
            className="w-full h-96 object-cover object-center rounded-lg shadow-2xl border-4 border-cosmic-accent/30 hover:border-cosmic-accent/50 transition-all duration-300"
            onError={(e) => {
              e.target.src = '/logo192.png';
            }}
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-cosmic-highlight mb-6 tracking-wide">Our Cosmic Mission</h2>
        <p className="max-w-4xl mx-auto text-cosmic-text text-lg leading-relaxed opacity-90">
          At AIC Sengani Girls School, we believe in nurturing a generation of scientific pioneers. 
          Our mission is to provide an educational experience that transcends traditional boundaries, 
          inspiring students to explore, innovate, and lead in the ever-expanding universe of knowledge.
        </p>
      </div>
            <strong>Phone:</strong> (+254) 723324518<br />
            <strong>Email:</strong> senganigirlsschool@gmail.com<br />
            <strong>Location:</strong> Matungulu Sub-County, Machakos County, Kenya
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
