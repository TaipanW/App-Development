import React from "react";
import "../../assets/css/footer2.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_2">
      <div className="footercontainer-x">
        <p>&copy; {new Date().getFullYear()} BlueFunds Inc.</p>
      </div>
      <div className="iconssm">
        <div className="socialmedia">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={require('../../assets/img/instagram/instagram.png')} alt="insta" className="instagram_img"/>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={require('../../assets/img/instagram/facebook.png')} alt="fb" className="fb_img"/>  
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
        <img src={require('../../assets/img/instagram/twitter-x-logo.png')}   alt="x_img" className="x_img"/>   
        </a>
        </div>

      </div>

      <div className="footercontainer-y">
        <div className="tc">
          <p>Terms and Conditions</p>
        </div>
        <div className="policy">
          <Link to='/privacypolicy'>
          <p>Privacy Policy</p>
          </Link>
        </div>
        <div className="faq">
          <Link to='/faq'>
          <p>FAQ</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
