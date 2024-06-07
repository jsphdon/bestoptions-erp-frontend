// ModalAddAddress.js
import React, { useCallback, useState } from 'react';
import Switch from '@mui/material/Switch';
import CustomDropdown from '../CustomDropdown';
import { countries } from '../../sampleData/sampleData';
import BtnSecondary from '../BtnSecondary';
import BtnPrimary from '../BtnPrimary';

function ModalAddAddress({ handleClose }) {
  const label = { inputProps: { 'aria-label': 'Save Address' } };

  const [country, setCountry] = useState('');

  const handleCountryChange = useCallback((event) => {
    setCountry(event.target.value);
  })

  return (
    <div className='flex flex-col bg-white rounded-xl w-full max-w-2xl mx-auto'>
      {/* Header */}
      <div className='rounded-t-xl p-7 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10'>
        <h1 className='text-lg font-bold'>Add New Address</h1>
        <button className="text-black" onClick={handleClose}>X</button>
      </div>
      {/* Form Content */}
      <div className='mx-7 md:mx-10 my-4 md:my-7 px-5 py-3 max-h-96 overflow-y-auto'>
        {/* Form Content */}
        <form>
          {/* First and Last Name */}
          <div className='flex flex-col md:flex-row gap-4 w-full'>
            {/* First Name Section */}
            <div className='w-full md:w-1/2'>
              <label htmlFor="fname" className='flex text-gray-700 mb-2'>First Name <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="fname"
              />
            </div>
            {/* Last Name Section */}
            <div className='w-full md:w-1/2'>
              <label htmlFor="lname" className='flex text-gray-700 mb-2'>Last Name <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="lname"
              />
            </div>
          </div>
          {/* Country */}
          <div className='flex flex-col w-full mt-4'>
            <div className='w-full'>
              <label htmlFor="addOne" className='flex text-gray-700 mb-2'>Country <span className='text-red-600'>*</span>
              </label>
              <CustomDropdown value={country} onChange={handleCountryChange} options={countries} placeholder="Select a Country..." />
            </div>
          </div>
          {/* Address Line 1 */}
          <div className='flex flex-col w-full mt-4'>
            <div className='w-full'>
              <label htmlFor="addOne" className='flex text-gray-700 mb-2'>Address 1 <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="addOne"
              />
            </div>
          </div>
          {/* Address Line 2 */}
          <div className='flex flex-col w-full mt-4'>
            <div className='w-full'>
              <label htmlFor="addTwo" className='flex text-gray-700 mb-2'>Address 2 <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="addTwo"
              />
            </div>
          </div>
          {/* Town */}
          <div className='flex flex-col w-full'>
            <div className='w-full'>
              <label htmlFor="town" className='flex text-gray-700 mb-2'>Town</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="town"
              />
            </div>
          </div>
          {/* State/Province and Post Code */}
          <div className='flex flex-col md:flex-row gap-4 w-full mt-5'>
            <div className='w-full md:w-1/2'>
              <label htmlFor="stateprovince" className='flex text-gray-700 mb-2'>State/Province <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="stateprovince"
              />
            </div>
            <div className='w-full md:w-1/2'>
              <label htmlFor="pcode" className='flex text-gray-700 mb-2'>Post Code <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 p-4 pr-10 rounded-lg"
                placeholder=""
                name="pcode"
              />
            </div>
          </div>
          {/* Save Address for further Billing */}
          <div className='flex justify-between items-center mt-12'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-gray-700 text-md'>Use as a billing address?</h1>
              <p className='text-gray-400'>If you need more info, please check budget planning</p>
            </div>
            <div className='flex gap-1 items-center justify-between'>
              <Switch {...label} />
              <p className='text-gray-400'>Yes</p>
            </div>
          </div>

        </form>
      </div>
      {/* Action Buttons */}
      <div className='rounded-b-xl mt-auto flex justify-center items-center gap-2 bg-white p-5 border-t border-gray-200 sticky bottom-0 z-10'>
        {/* Discard Button */}
        <BtnSecondary className="py-3 px-5 font-bold" onClick={handleClose} label="Discard" />
        {/* Submit Button */}
        <BtnPrimary className="py-3 px-5 font-bold" label="Submit" />
      </div>
    </div>
  );
}

export default ModalAddAddress;
