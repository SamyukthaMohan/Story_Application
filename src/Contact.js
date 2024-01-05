import React, { useEffect, useState } from 'react';
import './Contact.css';
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission here (e.g., send the message to your email)
    // You can use a backend service for this purpose.
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  useEffect(() => {
    // This code will run when the component mounts
    const token = localStorage.getItem('token');
    if (token === null) nav('/');
    
    // If you need to perform cleanup when the component unmounts, you can return a function from useEffect
    return () => {
      // Cleanup code here (if needed)
    };
  }, [nav]);
  return (
    <div className="contact-us-container">
    <header>
<nav>
<ul>
<div className='contactul'>
<a href="/home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
</ul>
</nav>
<img className='contactword' src={Image1} alt='img'></img>
<img className='contactlogo' src={Image2} alt='img'></img>
<img className='contactsmart' src={Image3} alt='img'></img>
<p className='contacthelp'>How can we help you?</p>
</header>
<div className="momcover"></div>
      <h2 className='contacth2'>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className='contactlabel' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='email'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className='message'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Link to="/home">
        <button type="submit" className="submit-button">
          Send
        </button></Link>
      </form>
    </div>
  );
}

export default Contact;
