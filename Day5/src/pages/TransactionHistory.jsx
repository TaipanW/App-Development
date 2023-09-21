import React from 'react';
import '../assets/css/transactions.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';

const TransactionHistory = () => {
    const transactionHistoryData = [
        { date: '2023-01-15', description: 'Purchase 1', amount: '$100.00' },
        { date: '2023-02-20', description: 'Payment Received 1', amount: '$200.00' },
        { date: '2023-03-10', description: 'Purchase 2', amount: '$50.00' },
        { date: '2023-04-05', description: 'Payment Received 2', amount: '$150.00' },
        { date: '2023-05-18', description: 'Purchase 3', amount: '$75.00' },
        { date: '2023-06-22', description: 'Payment Received 3', amount: '$180.00' },
        { date: '2023-07-14', description: 'Purchase 4', amount: '$120.00' },
        { date: '2023-08-30', description: 'Payment Received 4', amount: '$220.00' },
        { date: '2023-09-05', description: 'Purchase 5', amount: '$90.00' },
        { date: '2023-10-12', description: 'Payment Received 5', amount: '$210.00' },
      ];

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
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
            <button
              type="button"
              className="search-button"
              onClick={handleSearch}
            >
              <img
                src={require('../assets/img/search_icon_2.png')}
                alt="Search"
              />
            </button>
          </div>

          <ul className="nav-links">
            <li>
              <a href="/lend">Borrow</a>
            </li>
            <li>
              <a href="/borrower">Dashboard</a>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="logout_btn">
                  <Link to="/">Logout</Link>
                </button>
              ) : (
                <button onClick={handleLogout} className="logout_btn">
                  <Link to="/">Logout</Link>
                </button>
              )}
            </li>
          </ul>
        </nav>

        <div className="welcome_user">
          <h1>Transaction History</h1>

          <TemporaryDrawer></TemporaryDrawer>

          <div className="transaction-history">
            <ul className="transaction-list">
              {transactionHistoryData.map((transaction, index) => (
                <li key={index} className="transaction-item">
                  <p className="transaction-date">{transaction.date}</p>
                  <p className="transaction-description">{transaction.description}</p>
                  <p className="transaction-amount">{transaction.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
