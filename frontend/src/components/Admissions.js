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
    <div className="container mx-auto px-4 py-16 bg-galaxy-deep min-h-screen">
      <h1 className="text-5xl font-bold text-galaxy-text mb-12 text-center tracking-wide">Admissions</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Admission Requirements</h2>
          <div className="bg-galaxy-surface p-6 rounded-lg shadow-2xl border border-galaxy-accent/20">
            <ul className="list-disc list-inside text-galaxy-text/80">
              <li className="mb-3 text-lg">Completed Primary School Education</li>
              <li className="mb-3 text-lg">Valid KCPE Results</li>
              <li className="mb-3 text-lg">Birth Certificate</li>
              <li className="mb-3 text-lg">Transfer Certificate (if applicable)</li>
              <li className="mb-3 text-lg">Medical Examination Report</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Application Process</h2>
          <div className="bg-galaxy-surface p-6 rounded-lg shadow-2xl border border-galaxy-accent/20 text-galaxy-text/80">
            <ol className="list-decimal list-inside">
              <li className="mb-3 text-lg">Download Admission Form</li>
              <li className="mb-3 text-lg">Fill out the Form Completely</li>
              <li className="mb-3 text-lg">Attach Required Documents</li>
              <li className="mb-3 text-lg">Submit to School Administration</li>
              <li className="mb-3 text-lg">Wait for Admission Confirmation</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-galaxy-text mb-8 text-center">Admission Inquiry</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20">
          <div className="mb-6">
            <label className="block text-galaxy-text mb-3" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-galaxy-text mb-3" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-galaxy-text mb-3" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-galaxy-text mb-3" htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-galaxy-accent text-galaxy-deep py-3 rounded-lg hover:bg-galaxy-highlight transition duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admissions;
