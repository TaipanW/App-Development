import React from 'react';
import '../assets/css/aboutus.css';
import Header from './Header/Header';

function AboutUs() {
  return (
    <div className="about-us-container">
      <Header />
      <div className='aboutus_title'>
        <h1>About Us</h1>
      

      <div className="content">
        <p>
          Welcome to BlueFunds, your trusted online lending platform. We are dedicated to providing financial solutions that meet your needs.
        </p>

        <p>
          Our mission is to make lending simple, secure, and accessible to everyone. Whether you need a personal loan, business financing, or investment opportunities, we've got you covered.
        </p>

        <p>
          At Flash Funds, we prioritize transparency, customer satisfaction, and responsible lending practices. Our team of experts is committed to helping you achieve your financial goals.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          
          <h3>Ajith Kumar</h3>
          <p>CEO &amp; Co-Founder</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutUs;
