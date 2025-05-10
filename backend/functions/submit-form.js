const { validate } = require('validator');
const nodemailer = require('nodemailer');

// Configure email transporter (replace with your actual email credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ message: 'Method Not Allowed' }) 
    };
  }

  try {
    const { name, email, phone, message, type } = JSON.parse(event.body);

    // Validate inputs
    if (!name || name.length < 2) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ message: 'Invalid name' }) 
      };
    }

    if (!validate.isEmail(email)) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ message: 'Invalid email' }) 
      };
    }

    if (!validate.isMobilePhone(phone, 'any')) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ message: 'Invalid phone number' }) 
      };
    }

    // Prepare email content based on form type
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SCHOOL_EMAIL || '[email protected]',
      subject: `New ${type === 'contact' ? 'Contact' : 'Admission'} Form Submission`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Form Type: ${type}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submitted successfully!' 
      })
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Internal Server Error', 
        error: error.message 
      })
    };
  }
};
