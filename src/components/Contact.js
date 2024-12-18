import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email)
    alert('Message Sent! We will get back to you soon.');
  };



  return (
    <div style = {{margin: "auto", backgroundColor: '#1976d2', padding: "1rem 1rem",marginBottom: "1.2rem",marginRight: "1.2rem", borderRadius: "3px" }}>
    <div className="contact-form" style={{ maxWidth: '500px', margin: 'auto',marginTop:'30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',fontFamily: "Manrope ,sans-serif", backgroundColor:"white" }}>
      <h2 style = {{fontFamily: "Londrina Sketch", color: "#1976d2", alignContent:"center"}}>Contact Me</h2>
      <p>Please reach out to me! I'd love to hear from you:</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px', marginTop: '15px' }}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={{ width: '70%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={{ width: '70%', padding: '8px', marginTop: '10px'}}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            style={{ width: '70%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            style={{ width: '80%', padding: '8px', height: '100px', marginTop: '5px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '32px',
            fontFamily:"Londrina Sketch"
          }}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <p>Or reach me directly at:</p>
        <p >Email: <a style = {{color: "#1976d2"}} href="mailto:pemani327@gmail.com">pemani327@gmail.com</a></p>
        <p >Phone: <a style = {{color: "#1976d2"}}href="tel:+15053699143">505-369-9143</a></p>
      </div>
    </div>
    </div>
  );
};

export default Contact;

