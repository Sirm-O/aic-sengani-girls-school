import React from 'react';
import { FaTrophy, FaBook, FaGraduationCap } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-school-blue mb-4" />,
      title: "Academic Excellence",
      description: "Consistently ranked among top performers in Machakos County, with a strong track record of students qualifying for top universities."
    },
    {
      icon: <FaBook className="text-4xl text-school-green mb-4" />,
      title: "Comprehensive Curriculum",
      description: "Offering a holistic education approach that balances academic rigor with personal development and extracurricular activities."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-school-yellow mb-4" />,
      title: "University Preparedness",
      description: "Our students have an impressive record of university admissions, with many pursuing careers in medicine, engineering, and other professional fields."
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
    </div>
  );
}

export default Achievements;
