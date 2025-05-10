import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-school-blue mb-8 text-center">About AIC Sengani Girls School</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Our History</h2>
          <p className="text-gray-700 mb-4">
            AIC Sengani Girls School is an Extra County level Secondary school located in Matungulu Sub-County, 
            Machakos County. We are committed to providing high-quality education that empowers young women 
            to become leaders and change-makers in their communities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To provide a holistic educational experience that nurtures academic excellence, 
            personal development, and strong moral values. We aim to prepare our students 
            for future challenges and opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 text-school-blue">Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Principal's Message</h3>
            <p className="mb-4">Dear Students, Parents, and Guardians,</p>
            <p>Welcome to AIC Sengani Girls School, where we are committed to providing exceptional education and holistic development for our students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/path/to/principal-image.jpg" alt="School Principal" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h4 className="text-lg font-semibold">Dr. Margaret Mwendwa</h4>
            <p className="text-gray-600">School Principal</p>
          </div>
        </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-school-green mb-4">Contact Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            <strong>Phone:</strong> (+254) 0714720727<br />
            <strong>Email:</strong> [email protected]<br />
            <strong>Location:</strong> Matungulu Sub-County, Machakos County, Kenya
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
