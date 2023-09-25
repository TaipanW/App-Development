import React from 'react';
import '../assets/css/home.css';
import videoBG from '../assets/videos/farmer.mp4';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer2';

const Home = () => {
  return (
    <div className="home_page">
      <header className="header_home">
        <div className="logo_land">
          <img src={require('../assets/img/logo_pro_2.png')} alt="logo" className='logo_home'/>
        </div>
        <nav className="nav_menu">
          <ul>
            <li><a href="#section1">Explore</a></li>
            <li><a href="#section2">Login</a></li>
            <li><a href="#section3">Community</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="section1" className="section section1 overlay">
        <div className='ovlay'>
        <h1 className='title_line'>Borrow with Confidence, Grow with Success</h1>
        <video src={videoBG} autoPlay muted loop id="bg-video">
        </video>
        <button className='bt_home_exp'><a href="#section2">Explore</a></button>
        </div>

      </section>
      <section id="section2" className="section section2">
      <h1 className='title1_s2'>Changing Lives, One Loan at a Time </h1> 
      <div className='card_home'>
              <img src={require('../assets/img/oldage_2.png')} alt="imgn" className='c_image'/>
          <div className='waiting'>
            <p>No matter if you're a lender or a borrower, our platform is your gateway to financial empowerment. 
              We believe that everyone, regardless of their financial goals,
               deserves access to flexible and secure lending and investment opportunities. </p>
            <h4>What are you waiting for?  </h4>
            <br />
            <h4>Join us now to avail all the benefits.</h4>
            <div className='buttons_home'>
              <button className='reg_hm'>
                <Link to="/register">
                Sign in
                </Link>
              </button>
              <button className='log_hm'>
                <Link to="/login">
                Log in
                </Link>
              </button>
            </div>
            </div>
      </div>
      </section>
      <section id="section3" className="section section3">
        <h1 className='text_s3'>100% of your loan goes to supporting borrowers.</h1>
        <p>Bluefunds is a loan, not a donation, allowing you to cycle your money and create a personal impact across the world. Plus, you can withdraw your funds at any time.</p>
        <div className="card-container_s3">
    <div className="card_s3">
      <div className="card-image_s3v1">
        <img src={require('../assets/img/man1.jpg')} alt="Card 1" className='s3_img_v1'/>
      </div>
      <div className="card-text_v3">
        <h3>John Smith</h3>
        <p>I've been using Bluefunds for my lending needs, and I couldn't be happier. The platform is user-friendly, and I've seen great returns on my investments. Bluefunds has truly simplified the lending process for me.</p>
      </div>
    </div>
    <div className="card_s3">
      <div className="card-image_s3v1">
        <img src={require('../assets/img/man2.jpg')} alt="Card 2" />
      </div>
      <div className="card-text_v3">
        <h3>Sarah Johnson</h3>
        <p>Bluefunds came to my rescue when I needed a loan for my small business. The application process was quick and hassle-free. They connected me with trustworthy lenders, and I received the funding I needed in no time. I highly recommend Bluefunds to anyone looking for financial solutions.</p>
      </div>
    </div>
  </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;