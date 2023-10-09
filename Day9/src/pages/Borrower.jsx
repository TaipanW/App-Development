import React from 'react';
import '../assets/css/borrower.css';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

const Borrower = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };
  return (
    <div>
      <div className="dash_cont">
        
        <nav className="dash-navbar">
          <div className="logo_site bor">
            <img src={require('../assets/img/logo_pro.png')} alt="Logo" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="button" className="search-button" onClick={handleSearch}>
              <img src={require('../assets/img/search_icon_2.png')} alt="Search" />
            </button>
          </div>

          <ul className="nav-dash">
            <li><a href="/dash">Dashboard</a></li>
            <li><a href="/about">About</a></li>
            <li>
              {isLoggedIn ? (
                  <button onClick={handleLogout} className="logout_bor"><Link to="/">Logout</Link></button>
              ) : (
                <button onClick={handleLogout} className="logout_bor"><Link to="/">Logout</Link></button>
              )}
            </li>
          </ul>
        </nav>
        <div className="offer_tab">
        <h1 className='text_offer'>Borrow up to $X,XXX & Enjoy competitive interest rates as low as X.X%</h1>
        </div>
        <div className='recomendation'>
            <h1 className='rec_h1'>Recommended</h1>
        <div className="card-container_s3_b">
    <div className="card_s3_b">
      <div className="card-image_s3v1_b">
        <img src={require('../assets/img/sm.jpg')} alt="Card 1" className='s3_img_v1_b'/>
      </div>
      <div className="card-text_v3_b">
        <p>Samuel is looking for a loan of $20,000 to expand her small business. He plans to use the funds to purchase new equipment and hire additional staff to meet growing demand.</p>
      </div>
    </div>
    <div className="card_s3_b">
      <div className="card-image_s3v1_b">
        <img src={require('../assets/img/man2.jpg')} alt="Card 2" className='s3_img_v2_b' />
      </div>
      <div className="card-text_v3_b">
        <p>Samuel is in need of a $10,000 personal loan to cover unexpected medical expenses. He's seeking financial assistance to help with medical bills and ensure his family's well-being.</p>
      </div>
    </div>
  </div>
      <button className='btn-borrow'>
        BORROW
      </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Borrower;
