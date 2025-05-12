import React from 'react';
import { FaTrophy, FaBook, FaGraduationCap } from 'react-icons/fa';

function Achievements() {
  const imageGallery = [
    '/images/school-gallery/ksef-2025/IMG_6425(1).jpg',
    '/images/school-gallery/ksef-2025/IMG_6444.jpg',
    '/images/school-gallery/ksef-2025/IMG_6500.jpg',
    '/images/school-gallery/ksef-2025/IMG_6525.jpg',
    '/images/school-gallery/ksef-2025/IMG_6582.jpg',
    '/images/school-gallery/ksef-2025/IMG_6598.jpg',
    '/images/school-gallery/ksef-2025/IMG_6616.jpg',
    '/images/school-gallery/ksef-2025/IMG_6666.jpg',
    '/images/school-gallery/ksef-2025/IMG_6683.jpg',
    '/images/school-gallery/ksef-2025/IMG_6694.jpg',
    '/images/school-gallery/ksef-2025/IMG_6698.jpg'
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-galaxy-accent mb-4 animate-pulse" />,
      title: "Alien Tech Breakthrough",
      description: "Emerged 2nd nationwide in extraterrestrial innovation! All 4 project categories defied earthly expectations, making Sengani the cosmic pioneers of scientific exploration."
    },
    {
      icon: <FaBook className="text-4xl text-galaxy-highlight mb-4 animate-bounce" />,
      title: "Intergalactic STEM Leadership",
      description: "Exceptional performance transcending Environmental Science, Quantum Technology, Xenobiology, and Interstellar Energy categories."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-galaxy-text mb-4 animate-spin" />,
      title: "Galactic Innovation Pioneers",
      description: "Demonstrating research that challenges the boundaries of known science, setting new standards for interstellar problem-solving."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-galaxy-deep">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-5xl font-bold text-galaxy-highlight mb-4 tracking-wide font-['Orbitron']">
          Galactic Achievements
        </h2>
        <p className="text-galaxy-text max-w-3xl mx-auto text-xl opacity-80 font-['Chakra_Petch']">
          Transcending earthly boundaries of scientific exploration, our students redefine the frontiers of knowledge
        </p>
        <div className="w-full h-1 bg-galaxy-accent mx-auto mb-4 animate-pulse" style={{maxWidth: '250px'}}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 hover:border-galaxy-accent/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-center">
              {achievement.icon}
              <h3 className="text-2xl font-semibold text-galaxy-text mb-4">{achievement.title}</h3>
              <p className="text-galaxy-text/80 text-lg">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-galaxy-text/80 max-w-3xl mx-auto">
          Our commitment to academic excellence is reflected in our students' consistent performance 
          and their ability to excel in national examinations.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center text-galaxy-text mb-12">KSEF 2025 Award Ceremony Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {imageGallery.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-2xl border border-galaxy-accent/20 hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image} 
                alt={`KSEF 2025 Achievement ${index + 1}`} 
                className="w-full h-48 object-cover object-center hover:scale-110 transition-transform duration-300"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = '/logo192.png'; 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
