import React from 'react';
import '../assets/css/profile.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';
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
  const profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: userEmail,
    phoneNumber: '+1234567890',
    address: '123 Main St, City, Country',
  };
  return (
    <div>
      <div className="lender_cont">
        <nav className="navbar">
          <div className="logo_site">
            <img src={require('../assets/img/logo_3.png')} alt="Logo" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="button" className="search-button" onClick={handleSearch}>
              <img src={require('../assets/img/search_icon_2.png')} alt="Search" />
            </button>
          </div>

          <ul className="nav-links">
            <li><a href="/lend">Borrow</a></li>
            <li><a href="/borrower">Dashboard</a></li>
            <li>
              {isLoggedIn ? (
                  <button onClick={handleLogout} className="logout_btn"><Link to="/">Logout</Link></button>
              ) : (
                <button onClick={handleLogout} className="logout_btn"><Link to="/">Logout</Link></button>
              )}
            </li>
          </ul>
        </nav>

        <div className="welcome_user">
          <h1>Profile</h1>

        <TemporaryDrawer>
          
        </TemporaryDrawer>
        <div className="profile-details">
            <h2>Profile Information</h2>
            <table>
              <tbody>
                <tr>
                  <td><strong>First Name:</strong></td>
                  <td>{profileData.firstName}</td>
                </tr>
                <tr>
                  <td><strong>Last Name:</strong></td>
                  <td>{profileData.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{profileData.email}</td>
                </tr>
                <tr>
                  <td><strong>Phone Number:</strong></td>
                  <td>{profileData.phoneNumber}</td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>{profileData.address}</td>
                </tr>
              </tbody>
            </table>
    </div>
      

        </div>
      </div>
    </div>
  );
};

export default Borrower;
