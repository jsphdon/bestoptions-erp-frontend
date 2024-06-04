import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className='container mx-auto flex items-center justify-evenly my-5'>
        <li>
          <Link to="/single-page" className='font-bold'>Single Page</Link>
        </li>
        <li>
          <Link to="/dashboard" className='font-bold'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
