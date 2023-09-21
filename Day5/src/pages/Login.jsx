import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../redux/Actions';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPhoneValid = (phone) => {
    return phone.length === 10 && !isNaN(phone);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleLogin = () => {
    const { email, phone, password } = formData;

    if (!isEmailValid(email)) {
      toast.error('Invalid email address', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!isPhoneValid(phone)) {
      toast.error('Invalid phone number (10 digits required)', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!isPasswordValid(password)) {
      toast.error('Password must be at least 8 characters long', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const userEmail = formData.email;
    dispatch(setEmail(userEmail));
  
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', userEmail);

    toast.success('Login successful!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    navigate('/borrower');
  };

  return (
    <div className='main_login'>
      <div className="login_cont">
        <h1 className='login_title'>Login</h1>
        <form>
          <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required />
          <input type="tel" name="phone" id="phone" className='input-field' placeholder='Phone' onChange={handleChange} required />
          <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required />
          <button type="button" className='login-btn' onClick={handleLogin}>
            Login
          </button>
          <p className='no_acc'> <Link to="/register">Don't have an account?</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
