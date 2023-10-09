import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image

const HeaderLogin = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
      </nav>
    </header>
  );
};

export default HeaderLogin;
