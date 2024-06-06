import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Get the current location
  const location = useLocation();
  return (
    <nav>
      <ul className='container mx-auto flex items-center justify-evenly my-5'>
        <li className={location.pathname === "/overview" ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}>
          <Link to="/overview" className='font-bold'>User Profile</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}>
          <Link to="/dashboard" className='font-bold'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
