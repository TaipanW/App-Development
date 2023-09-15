import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, password } = formData;
    if (email && phone && password) {
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(formData);
    }
  };

  return (
    <div className='main_login'>
      <div className="login_cont">
        <h1 className='login_title'>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/>
          <input type="phone" name="phone" id="phone" className='input-field' placeholder='Phone' onChange={handleChange} required/>
          <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
          <button type="submit" className='login-btn'>
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
