import React from 'react';
import '../assets/css/dashboard.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';
import Footer from './Footer/Footer';
const Dashboard = () => {
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
            <li><a href="/borrower">Borrow</a></li>
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

        <div className="welcome_user_dash">
          <h1>Dashboard</h1>
        <h2>Welcome back, {userEmail}!</h2>


        <TemporaryDrawer>
          
        </TemporaryDrawer>
        <div className='dashboard-container'>
        <div className="dashboard-block x1">
              <h3>Total Loans</h3>
              <p>5 loans</p>
            </div>

            <div className="dashboard-block x2">
              <h3>Total Money Borrowed</h3>
              <p>$50,000</p>
            </div>

            <div className="dashboard-block x3">
              <h3>Account balance</h3>
              <p>$20,000</p>
            </div>
            <div className="dashboard-block x4">
              <h3>Credit Score</h3>
              <p>680</p>
            </div>
            <div className="dashboard-block x5">
              <h3>Account Status</h3>
              <p>Active</p>
            </div>
            <div className="dashboard-block x6">
              <h3>Pending Payments</h3>
              <p>4</p>
            </div>
            </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
