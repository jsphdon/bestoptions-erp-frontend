import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SinglePage from './pages/SinglePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/single-page" element={<SinglePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
