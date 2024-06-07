import React, { useCallback, useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

const MoreButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  });

  return (
    <div>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="flex space-x-1 justify-center items-center rounded-md py-3 px-2 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold"
      >
        <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
        <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
        <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}

export default MoreButton;
