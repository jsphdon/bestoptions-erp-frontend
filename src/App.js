import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Overview from './pages/UserProfile/Overview';
import FullProfile from './pages/UserProfile/FullProfile';
import Logs from './pages/UserProfile/Logs';
import Billings from './pages/UserProfile/Billings';
import Dashboard from './pages/Dashboard';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
