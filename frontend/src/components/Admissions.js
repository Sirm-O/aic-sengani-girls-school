import React, { useState } from 'react';

function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Admission Inquiry Submitted! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-school-blue mb-8 text-center">Admissions</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Admission Requirements</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">Completed Primary School Education</li>
              <li className="mb-2">Valid KCPE Results</li>
              <li className="mb-2">Birth Certificate</li>
              <li className="mb-2">Transfer Certificate (if applicable)</li>
              <li className="mb-2">Medical Examination Report</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-school-green mb-4">Application Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
            <ol className="list-decimal list-inside">
              <li className="mb-2">Download Admission Form</li>
              <li className="mb-2">Fill out the Form Completely</li>
              <li className="mb-2">Attach Required Documents</li>
              <li className="mb-2">Submit to School Administration</li>
              <li className="mb-2">Wait for Admission Confirmation</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-school-blue mb-4 text-center">Admission Inquiry</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-school-blue text-white py-2 rounded-lg hover:bg-school-green transition duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admissions;
