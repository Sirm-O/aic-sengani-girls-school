import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-school-blue mb-4">Welcome to AIC Sengani Girls School</h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering Young Minds in Machakos County, Kenya
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-school-green mb-4">About Us</h2>
          <p>Located in Matungulu Sub-County, Machakos County, we are dedicated to providing quality education.</p>
          <Link to="/about" className="text-school-blue hover:underline mt-4 block">Learn More</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-school-green mb-4">Academics</h2>
          <p>We offer a comprehensive curriculum designed to challenge and inspire our students.</p>
          <Link to="/academics" className="text-school-blue hover:underline mt-4 block">Explore Courses</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-school-green mb-4">Admissions</h2>
          <p>Join our community of learners. Find out about our admission process and requirements.</p>
          <Link to="/admissions" className="text-school-blue hover:underline mt-4 block">Apply Now</Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-school-blue mb-4">Principal's Message</h3>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "At AIC Sengani Girls School, we believe in nurturing not just academic excellence, 
          but also character, leadership, and personal growth for every student."
          <br />
          <span className="block mt-4 font-semibold">- Dr. Margaret Mwendwa, School Principal</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
