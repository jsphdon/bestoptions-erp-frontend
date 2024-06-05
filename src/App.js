import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Overview from './pages/Overview';
import Billings from './pages/Billings';
import FullProfile from './pages/FullProfile';
import Logs from './pages/Logs';
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
