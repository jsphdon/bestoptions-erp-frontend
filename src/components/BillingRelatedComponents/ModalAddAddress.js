// ModalAddAddress.js
import React from 'react';
import { Button } from '@mui/material';

function ModalAddAddress({ handleClose }) {
  return (
    <div className='flex flex-col'>
      {/* Header */}
      <div className='p-7 flex justify-between'>
        <h1 className='text-lg font-bold'>Add New Card</h1>
        <Button variant="contained" onClick={handleClose}>Close</Button>
      </div>
      {/* Content */}
      <div className='mx-10 my-7'></div>
    </div>
  );
}

export default ModalAddAddress;
