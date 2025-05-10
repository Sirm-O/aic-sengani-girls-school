import React from 'react';
import { FaTrophy, FaBook, FaGraduationCap } from 'react-icons/fa';

function Achievements() {
  const imageGallery = [
    '/images/school-gallery/ksef-2025/IMG_6425(1).jpg',
    '/images/school-gallery/ksef-2025/IMG_6444.jpg',
    '/images/school-gallery/ksef-2025/IMG_6500.jpg',
    '/images/school-gallery/ksef-2025/IMG_6525.jpg',
    '/images/school-gallery/ksef-2025/IMG_6582.jpg'
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-school-blue mb-4" />,
      title: "Kenya Science & Engineering Fair 2025",
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
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-school-blue mb-12">Our Academic Achievements</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
            {achievement.icon}
            <h3 className="text-xl font-semibold mb-4 text-school-green">{achievement.title}</h3>
            <p className="text-gray-600">{achievement.description}</p>
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
