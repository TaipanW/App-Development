import React from 'react';
import '../assets/css/submission.css';
import Header from './Header/Header';

const Submission = () => {

  return (
    <div className='form_container_loan'>
        <Header/>
        <div className='text_title_success'>
            <h1>Your Loan request has been submitted Successfully</h1>
            <h2>You will receive notification as soon as your request is accepted by any of our Lenders. Cheers!</h2>
            <img src={require('../assets/img/green_check.png')} alt='img_check' />
        </div>

    </div>
  );
};

export default Submission;
