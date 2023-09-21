import React from 'react';
import '../assets/css/loanoverview.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './Drawer';

const LoanOverview = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };

  const loanData = {
    loanAmount: 10000,
    interestRate: 5,
    loanTerm: 12,
    totalInterestPaid: 500,
    monthlyPayment: 875,
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
          <h1>Loan Overview</h1>

          <TemporaryDrawer></TemporaryDrawer>

          <div className="loan-data-container">
            <table>
              <tbody>
                <tr>
                  <td><strong>Loan Amount:</strong></td>
                  <td>${loanData.loanAmount}</td>
                </tr>
                <tr>
                  <td><strong>Interest Rate:</strong></td>
                  <td>{loanData.interestRate}%</td>
                </tr>
                <tr>
                  <td><strong>Loan Term:</strong></td>
                  <td>{loanData.loanTerm} months</td>
                </tr>
                <tr>
                  <td><strong>Total Interest Paid:</strong></td>
                  <td>${loanData.totalInterestPaid}</td>
                </tr>
                <tr>
                  <td><strong>Monthly Payment:</strong></td>
                  <td>${loanData.monthlyPayment}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanOverview;
