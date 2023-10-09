import React from 'react';
import '../../assets/css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={require('../../assets/img/logo_pro_2.png')} alt="Logo" className="logo_register" />
      </div>
    </header>
  );
};

export default Header;