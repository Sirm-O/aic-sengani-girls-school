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
    <div className="container mx-auto px-4 py-16 bg-galaxy-deep min-h-screen">
      <h1 className="text-5xl font-bold text-galaxy-text mb-12 text-center tracking-wide">Academic Programs</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Core Subjects</h2>
          <div className="bg-galaxy-surface p-6 rounded-lg shadow-2xl border border-galaxy-accent/20">
            <ul className="list-disc list-inside text-galaxy-text/80">
              {subjects.map((subject, index) => (
                <li key={index} className="mb-3 text-lg">{subject}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Extracurricular Activities</h2>
          <div className="bg-galaxy-surface p-6 rounded-lg shadow-2xl border border-galaxy-accent/20">
            <ul className="list-disc list-inside text-galaxy-text/80">
              {extracurriculars.map((activity, index) => (
                <li key={index} className="mb-3 text-lg">{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-galaxy-text mb-6">Our Academic Philosophy</h2>
        <p className="text-galaxy-text/80 max-w-3xl mx-auto text-lg leading-relaxed">
          We embrace a holistic educational approach that transcends traditional learning boundaries. 
          Our curriculum is meticulously designed to cultivate critical thinking, innovative problem-solving, 
          and comprehensive personal development. We prepare students not just for academic success, but for leadership in a dynamic world.
        </p>
      </div>

      <div className="mt-12 bg-galaxy-surface p-8 rounded-lg border border-galaxy-accent/20">
        <h3 className="text-2xl font-semibold text-galaxy-highlight mb-6">Academic Excellence</h3>
        <p className="text-galaxy-text/80 text-lg">
          AIC Sengani Girls School consistently demonstrates outstanding performance in the Kenya Certificate 
          of Secondary Education (KCSE), showcasing our unwavering commitment to academic and personal excellence.
        </p>
      </div>
    </div>
  );
}

export default Academics;
