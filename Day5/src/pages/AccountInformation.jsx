import React from 'react';
import '../assets/css/accountinformation.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';

const AccountInformation = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };

  // Sample account information data
  const accountInfo = {
    accountNumber: '7879452464',
    accountType: 'Savings',
    bankName: 'Bank of Baroda',
    balance: '$5,000.00',
    branch: 'Chennai',
    country: 'India',
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
            <li><a href="/borrow">Borrow</a></li>
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
          <h1>Account Information</h1>

          <TemporaryDrawer></TemporaryDrawer>

          <div className="account-info">
            <table className='table-container'>
              <tbody>
                <tr>
                  <td><strong>Account Number:</strong></td>
                  <td>{accountInfo.accountNumber}</td>
                </tr>
                <tr>
                  <td><strong>Account Type:</strong></td>
                  <td>{accountInfo.accountType}</td>
                </tr>
                <tr>
                  <td><strong>Balance:</strong></td>
                  <td>{accountInfo.balance}</td>
                </tr>
                <tr>
                  <td><strong>Bank Name:</strong></td>
                  <td>{accountInfo.bankName}</td>
                </tr>
                <tr>
                  <td><strong>Branch:</strong></td>
                  <td>{accountInfo.branch}</td>
                </tr>
                <tr>
                  <td><strong>Country:</strong></td>
                  <td>{accountInfo.country}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
