// ModalAddCard.js
import React from 'react';
import { Button } from '@mui/material';

function ModalAddCard({ handleClose }) {
  return (
    <div>
      <h2>Modal Add Card Content</h2>
      <p>This is the content for Modal Two.</p>
      <Button variant="contained" onClick={handleClose}>Close</Button>
    </div>
  );
}

export default ModalAddCard;
