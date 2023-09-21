import React from 'react';
import '../assets/css/home.css';
import videoBG from '../assets/videos/pattern(Original).mp4';

const Home = () => {
  return (
    <div className="home_page">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <nav className="nav_menu">
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="section1" className="section section1">
        <h1 className='title_line'>Borrow with Confidence, Grow with Success</h1>
        <video src={videoBG} autoPlay muted loop id="bg-video">
        </video>
        <button className='bt_home_exp'>Explore</button>

      </section>
      <section id="section2" className="section section2">Section 2 Content</section>
      <section id="section3" className="section">Section 3 Content</section>
    </div>
  );
};

export default Home;