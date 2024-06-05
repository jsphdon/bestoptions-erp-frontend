import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className='container mx-auto flex items-center justify-evenly my-5'>
        <li>
          <Link to="/overview" className='font-bold'>User Profile</Link>
        </li>
        <li>
          <Link to="/dashboard" className='font-bold'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
