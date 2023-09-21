import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    c_password: '', 
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, c_password } = formData;

    if (!name || !email || !phone || !password || !c_password) {
      toast.error('All fields are required', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

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
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (password !== c_password) {
      toast.error('Passwords do not match', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    toast.success('Registration successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log(formData);
  };

  return (
    <div className='main'>
      <div className="reg_cont">
        <h1 className='reg_title'>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" className='input-field' placeholder='Name' onChange={handleChange} autoFocus required/>
          <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange}  required/>
          <input type="tel" name="phone" id="phone" className='input-field' placeholder='Phone' onChange={handleChange}  required/>
          <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
          <input type="password" name="c_password" id="c_password" className='input-field' placeholder='Confirm Password' onChange={handleChange} required/>
          <button type="submit" className='reg-btn'>Register</button>
          <p className='exists_acc'><Link to="/login">Already have an account?</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
