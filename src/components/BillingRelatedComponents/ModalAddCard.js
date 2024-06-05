// ModalAddCard.js
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import CustomDropdown from '../CustomDropdown';
import { months, years } from '../../sampleData/sampleData';

function ModalAddCard({ handleClose }) {

  const label = { inputProps: { 'aria-label': 'Save Card' } };


  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className='flex flex-col bg-white rounded-xl w-full max-w-2xl mx-auto'>
      {/* Header */}
      <div className='p-7 flex justify-between items-center border-b border-gray-200'>
        <h1 className='text-lg font-bold'>Add New Card</h1>
        <button className="rounded-full py-1 px-3 bg-red-500 text-white" onClick={handleClose}>X</button>
      </div>
      {/* Content */}
      <div className='mx-7 sm:mx-10 my-4 sm:my-7 px-5 py-3 max-h-96 md:max-h-full overflow-y-auto'>
        <form>
          {/* Name on Card */}
          <div className='flex flex-col'>
            <label htmlFor="card_name" className='flex text-gray-700 mb-2'>Name on Card <span className='text-red-600'>*</span></label>
            {/* Input */}
            <input type="text" className="w-full bg-gray-100 p-4 rounded-lg" placeholder="Max Doe" name="card_name" />
          </div>
          {/* Card Number */}
          <div className='flex flex-col mt-5'>
            <label htmlFor="card_number" className='flex text-gray-700 mb-2'>
              Card Number <span className='text-red-600'>*</span>
            </label>
            <div className='relative'>
              {/* Input */}
              <input
                type="number"
                className="w-full bg-gray-100 p-4 pr-26 rounded-lg"
                placeholder="1234 5678 9101 1121"
                name="card_number"
              />
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-3'>
                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg" alt="Visa Logo" className='w-8 h-8' />
                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg" alt="Mastercard Logo" className='w-8 h-8' />
                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/american-express.svg" alt="American Express Logo" className='w-8 h-8' />
              </div>
            </div>
          </div>
          {/* Expiration Date and CCV */}
          <div className='flex flex-col md:flex-row mt-5 w-full gap-4 md:gap-0'>
            {/* Expiration Section */}
            <div className='w-full md:w-[70%]'>
              <label htmlFor="expire_date" className='flex text-gray-700 mb-2'>Expiration Date <span className='text-red-600'>*</span>
              </label>
              <div className='flex flex-col sm:flex-row gap-3'>
                {/* Month */}
                <CustomDropdown value={month} onChange={handleMonthChange} options={months} placeholder="Month" />
                {/* Year */}
                <CustomDropdown value={year} onChange={handleYearChange} options={years} placeholder="Year" />
              </div>
            </div>
            {/* CVV Section */}
            <div className='ml-0 md:ml-3 w-full md:w-[30%]'>
              <label htmlFor="expire_date" className='flex text-gray-700 mb-2'>CVV <span className='text-red-600'>*</span>
              </label>
              <div className='relative'>
                {/* Input */}
                <input
                  type="number"
                  className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                  placeholder="CVV"
                  name="card_number"
                  min="5"
                  max="5"
                />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-3'>
                  {/* <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg" alt="Visa Logo" className='w-8 h-8' /> */}
                </div>
              </div>

            </div>
          </div>

          {/* Save Card for further Billing */}
          <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mt-12'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-gray-700 text-md'>Save Card for further billing?</h1>
              <p className='text-gray-400'>If you need more info, please check budget planning</p>
            </div>
            {/* Toggle Save Button */}
            <div className='flex gap-1 items-center justify-between'>
              <Switch {...label} />
              <p className='text-gray-400'>Save Card</p>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className='mt-14 flex justify-center items-center gap-2 sticky bottom-0 z-10'>
          <button className="rounded-md py-3 px-5 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold" onClick={handleClose}>Discard</button>
          <button className="rounded-md py-3 px-5 hover:bg-blue-700 bg-blue-600 text-white text-center mx-2 md:mx-1 font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddCard;

