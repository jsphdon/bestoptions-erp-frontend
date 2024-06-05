import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomDropdownStyled = styled(Select)(({ theme }) => ({
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const CustomDropdown = ({ name, value, onChange, options, placeholder, disabled }) => {
  return (
    <Box className="w-full">
      <FormControl variant="outlined" className="w-full bg-gray-100 py-3 px-4 rounded-lg" disabled={disabled}>
        <CustomDropdownStyled
          name={name}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="w-full"
        >
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CustomDropdownStyled>
      </FormControl>
    </Box>
  );
};

export default CustomDropdown;
