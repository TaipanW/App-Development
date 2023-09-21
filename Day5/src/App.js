import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Borrower from './pages/Borrower';
import Dashboard from './pages/Drawer';
import LoanOverview from './pages/LoanOverview';
import AccountBalance from './pages/AccountInformation';
import Profile from './pages/Profile'
import TransactionHistory from './pages/TransactionHistory';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/borrower' element={<Borrower/>}/>
        <Route path='/loan-overview' element={<LoanOverview/>}/>
        <Route path='/account-information' element={<AccountBalance/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/transaction-history' element={<TransactionHistory/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
