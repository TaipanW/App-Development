import React from 'react'
import { useState } from 'react';
import '../assets/css/register.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    const { name, email, phone, password } = formData;
    if (name && email && phone && password) {
      toast.success('Registration successful!', {
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
<div className='main'>
    <div className="reg_cont">
      <h1 className='reg_title'>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" id="name" className='input-field' placeholder='Name' onChange={handleChange} autoFocus required/>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange}  required/>
        <input type="phone" name="phone" id="phone" className='input-field' placeholder='Phone' onChange={handleChange}  required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <input type="password" name="c_password" id="c_password" className='input-field' placeholder='Confirm Password' onChange={handleChange} required/>
        <button type="submit" className='reg-btn'><Link to="/login">Register</Link></button>
        <p className='exists_acc'><Link to="/login">Already have an account?</Link></p>
        </form>
    </div>
    <ToastContainer />
</div>
  )
}

export default Register