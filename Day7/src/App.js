import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LoanOverview from './pages/LoanOverview';
import AccountBalance from './pages/AccountInformation';
import Profile from './pages/Profile'
import TransactionHistory from './pages/TransactionHistory';
import Home from './pages/Home';
import Terms from './pages/T&C/Terms';
import Faq from './pages/T&C/Faq';
import Borrower from './pages/Borrower';
import LoanRequestForm from './pages/LoanRequestForm';
import Submission from './pages/Submission';
import AboutUs from './pages/Aboutus';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/loan-overview' element={<LoanOverview/>}/>
        <Route path='/account-information' element={<AccountBalance/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/transaction-history' element={<TransactionHistory/>}/>
        <Route path='/t&c' element={<Terms/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/borrow' element={<Borrower/>}/>
        <Route path='/form' element={<LoanRequestForm/>}/>
        <Route path='/success' element={<Submission/>}/>
        <Route path='/about' element={<AboutUs/>}/>





      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
