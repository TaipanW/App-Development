import React, { useState } from 'react';
import "../../assets/css/faq.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Faq() {
  const faqData = [
    {
      question: 'How do I apply for a loan?',
      answer: 'To apply for a loan, log in to your account, go to the "Apply for a Loan" section, and follow the on-screen instructions.'
    },
    {
      question: 'What are the eligibility criteria for a loan?',
      answer: 'To be eligible for a loan, you must be at least 18 years old, have a valid ID, and meet our credit requirements.'
    },
    {
      question: 'How long does it take to get approved for a loan?',
      answer: 'Loan approval times vary, but you can typically expect a decision within 24-48 hours after submitting your application.'
    },
    {
      question: 'What is the interest rate on loans?',
      answer: 'Interest rates may vary based on your credit score and the type of loan you are applying for. Please check our loan details page for more information.'
    },
    {
      question: 'How can I make loan payments?',
      answer: 'You can make loan payments through our online payment portal using various payment methods, including credit/debit cards and bank transfers.'
    },
  ];

  const [expandedQuestions, setExpandedQuestions] = useState(faqData.map((_, index) => index));

  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((item) => item !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  return (
    <div className='faq'>
      <Header/>
      <div className="faq-container">
        <h1 className='faq_h1'>FAQ</h1>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h2>{item.question}</h2>
              <span className={`arrow ${expandedQuestions.includes(index) ? 'expanded' : ''}`}></span>
            </div>
            {expandedQuestions.includes(index) && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Faq;