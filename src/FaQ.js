import React, { useEffect, useState } from 'react';
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import './FaQ.css'
import { useNavigate } from 'react-router-dom';

function FAQ() {
  const nav=useNavigate();
  // Define an array of FAQ items, each with a question and answer.
  const faqItems = [
    {
      question: 'What is the Kids\' Story Podcast?',
      answer:
        'The Kids\' Story Podcast is a fun and educational app that offers a collection of audio stories for children. Our podcast features a variety of entertaining stories suitable for kids of all ages.',
    },
    {
      question: 'How do I listen to the stories?',
      answer:
        'It\'s easy! Simply download our app from the App Store or Google Play Store, create an account (with parental consent), and start listening. You can stream the stories online or download them for offline listening.',
    },
    {
      question: 'Is the content safe for kids?',
      answer:
        'Yes, absolutely! We take great care to ensure that all the stories featured on our podcast are age-appropriate and safe for children. Parents and guardians can review the content to ensure it aligns with their values.',
    },
    {
      question: 'Is there a cost to use the app?',
      answer:
        'Our app is available for free to all users. However, we offer a premium subscription option that provides additional benefits such as an ad-free experience and access to exclusive content.',
    },
    // Add more FAQ items as needed
  ];

  // Define state to keep track of which FAQ items are currently expanded.
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to handle FAQ item expansion/collapse.
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
  
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
//   }, []);

  return (
<div>
    
<header>
<nav>
<ul>
<div className='faqul'>
<a href="/home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
</ul>
</nav>
<img className='homeword' src={Image1} alt='img'></img>
<img className='homelogo' src={Image2} alt='img'></img>
<img className='homesmart' src={Image3} alt='img'></img>
</header>
    <div className="faq-container">


      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li key={index} className={`faq-item ${expandedItems.includes(index) ? 'expanded' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(index)}>
              <span>{item.question}</span>
              <div className="toggle-icon">{expandedItems.includes(index) ? '-' : '+'}</div>
            </div>
            {expandedItems.includes(index) && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
      
    </div>
    </div>
  );
}

export default FAQ;
