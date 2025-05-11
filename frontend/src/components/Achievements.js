import React from 'react';
import { FaTrophy, FaBook, FaGraduationCap } from 'react-icons/fa';

function Achievements() {
  const imageGallery = [
    '/images/school-gallery/ksef-2025/Certificate awards.jpg',
    '/images/school-gallery/ksef-2025/Chool Principal with trophy.jpg',
    '/images/school-gallery/ksef-2025/Patron Mr. Ochieng presents the National Trophy.jpg',
    '/images/school-gallery/ksef-2025/Prinicipal and Patron for KSEF.jpg',
    '/images/school-gallery/ksef-2025/The trophy.jpg',
    '/images/school-gallery/ksef-2025/Young Scientist Pause for Photo with Patron.jpg',
    '/images/school-gallery/ksef-2025/Young Scientists at Assembly.jpg'
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-school-blue mb-4" />,
      title: "Kenya Science & Engineering Fair (KSEF)2025",
      description: "Emerged 2nd nationwide! All 4 project categories topped the Eastern Region, making Sengani the only school in the region to win a national trophy."
    },
    {
      icon: <FaBook className="text-4xl text-school-green mb-4" />,
      title: "STEM Leadership",
      description: "Exceptional performance in Environmental Science, Technology, Applied Technology, and Energy & Transportation categories."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-school-yellow mb-4" />,
      title: "Innovation Pioneers",
      description: "Demonstrating cutting-edge research and problem-solving skills at the national level, setting new standards in scientific innovation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-school-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-school-text mb-4">Our Achievements</h2>
        <p className="text-school-light-text max-w-2xl mx-auto">
          Celebrating our remarkable success at the Kenya Science & Engineering Fair 2025
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-center">
              {achievement.icon}
              <h3 className="text-xl font-semibold text-school-text mb-3">{achievement.title}</h3>
              <p className="text-school-light-text">{achievement.description}</p>
            </div>
            {/* Description already included above */}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Our commitment to academic excellence is reflected in our students' consistent performance 
          and their ability to excel in national examinations.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center text-school-blue mb-8">KSEF 2025 Award Ceremony Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {imageGallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src={image} 
                alt={`KSEF 2025 Award Ceremony - Image ${index + 1}`} 
                className="w-full h-48 object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
