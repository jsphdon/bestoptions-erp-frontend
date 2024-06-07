import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Overview from './pages/UserProfile/Overview';
import FullProfile from './pages/UserProfile/FullProfile';
import Logs from './pages/UserProfile/Logs';
import Billings from './pages/UserProfile/Billings';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Dashboard/Transactions';
import Deposit from './pages/Dashboard/Deposit';
import DepositRequest from './pages/Dashboard/DepositRequest';
import Withdrawal from './pages/Dashboard/Withdrawal';
import WithdrawalRequest from './pages/Dashboard/WithdrawalRequest';
import Report from './pages/Dashboard/Report';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/full-profile" element={<FullProfile />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/billings" element={<Billings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/deposit-request" element={<DepositRequest />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/withdrawal-request" element={<WithdrawalRequest />} />
          <Route path="/Report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
