import React from 'react';

function Academics() {
  const subjects = [
    'Mathematics', 'English', 'Kiswahili', 'Biology', 
    'Chemistry', 'Physics', 'History', 'Geography', 
    'Business Studies', 'Computer Studies', 'Christian Religious Education'
  ];

  const extracurriculars = [
    'Debate Club', 'Drama and Theatre', 'Sports', 
    'Science Club', 'Music', 'Environmental Club'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-school-blue mb-8 text-center">Academic Programs</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Core Subjects</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              {subjects.map((subject, index) => (
                <li key={index} className="mb-2">{subject}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Extracurricular Activities</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              {extracurriculars.map((activity, index) => (
                <li key={index} className="mb-2">{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold text-school-blue mb-4">Our Academic Approach</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We believe in a comprehensive educational approach that goes beyond textbooks. 
          Our curriculum is designed to develop critical thinking, problem-solving skills, 
          and personal growth. We prepare students not just for examinations, but for life.
        </p>
      </div>

      <div className="mt-8 bg-school-blue text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Academic Performance</h3>
        <p>
          AIC Sengani Girls School consistently achieves excellent results in the Kenya Certificate 
          of Secondary Education (KCSE), reflecting our commitment to academic excellence.
        </p>
      </div>
    </div>
  );
}

export default Academics;
