import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    alert('Message Sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-galaxy-deep min-h-screen">
      <h1 className="text-5xl font-bold text-galaxy-text mb-12 text-center tracking-wide">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Contact Information</h2>
          <div className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20 text-galaxy-text/80">
            <p className="mb-3 text-lg"><strong>Phone:</strong> (+254) 0714720727</p>
            <p className="mb-3 text-lg"><strong>Email:</strong> [email protected]</p>
            <p className="mb-3 text-lg"><strong>Location:</strong> Matungulu Sub-County, Machakos County, Kenya</p>
            <p className="mt-4 text-lg">
              We are always happy to hear from parents, students, and community members. 
              Feel free to reach out with any questions or inquiries.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-galaxy-highlight mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="bg-galaxy-surface p-8 rounded-lg shadow-2xl border border-galaxy-accent/20">
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
              <label className="block text-galaxy-text mb-3" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-galaxy-text mb-3" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-galaxy-deep text-galaxy-text border border-galaxy-accent/20 rounded-lg focus:outline-none focus:border-galaxy-accent"
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-galaxy-accent text-galaxy-deep py-3 rounded-lg hover:bg-galaxy-highlight transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
