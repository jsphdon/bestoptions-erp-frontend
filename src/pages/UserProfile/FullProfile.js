import React, { useCallback, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import CustomDropdown from '../../components/CustomDropdown';
import Layout from '../../components/Layout';
import Usercard from '../../components/UserCard';
import { countries, timezones, currencies, languages } from '../../sampleData/sampleData';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';

export default function FullProfile() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');

  const [isEditMode, setIsEditMode] = useState(false); // Add state for edit mode

  // Handles the behavior of enabling edit mode.
  const handleEditMode = useCallback(() => {
    setIsEditMode((prevMode) => !prevMode);
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    // Handle changes based on the name of the input/select element
    switch (name) {
      case 'country':
        setCountry(value);
        break;
      case 'timezone':
        setTimezone(value);
        break;
      case 'currency':
        setCurrency(value);
        break;
      case 'language':
        setLanguage(value);
        break;
      default:
      // Default case
    }
  })


  return (
    <Layout>
      <Usercard />
      {/* Profile Edit Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 py-5 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl font-bold">Profile Details</h1>
            {/* Edit Profile Button */}
            <BtnPrimary className={`font-bold ${isEditMode ? 'hover:bg-red-700 bg-red-600' : 'hover:bg-blue-700 bg-blue-600'}`} onClick={handleEditMode} label={isEditMode ? 'Cancel' : 'Enable Edit'} />
          </div>
          {/* Details */}
          <div className="p-7">
            <div className="flex justify-center">
              <div className="min-w-full border-collapse">
                <form>
                  {/* Avatar */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex"><p>Avatar</p></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="block relative h-[160px] w-[160px] mb-2 md:mb-0 mr-0 md:mr-4">
                        {/* Photo */}
                        <img className="rounded-md" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" alt="sample account profile" />
                      </div>
                    </div>
                  </div>
                  {/* Full Name */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Full Name</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex flex-col md:flex-row gap-4">
                        {/* Inputs */}
                        <input type="text" name="fname" className={`w-full md:w-1/2 bg-gray-100 py-3 px-4 rounded-lg ${isEditMode ? '' : 'opacity-50'}`} placeholder="First name" disabled={!isEditMode} />
                        <input type="text" name="lname" className={`w-full md:w-1/2 bg-gray-100 py-3 px-4 rounded-lg ${isEditMode ? '' : 'opacity-50'}`} placeholder="Last name" disabled={!isEditMode} />
                      </div>
                    </div>
                  </div>
                  {/* Company */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Company</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        {/* Input */}
                        <input type="text" name="company" className={`w-full bg-gray-100 py-3 px-4 rounded-lg ${isEditMode ? '' : 'opacity-50'}`} placeholder="Company" disabled={!isEditMode} />
                      </div>
                    </div>
                  </div>
                  {/* Contact Phone */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Contact Phone</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        {/* Input */}
                        <input type="tel" name="contact" className={`w-full bg-gray-100 py-3 px-4 rounded-lg ${isEditMode ? '' : 'opacity-50'}`} placeholder="+971" disabled={!isEditMode} />
                      </div>
                    </div>
                  </div>
                  {/* Company Site */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Company Site</p></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        {/* Input */}
                        <input type="text" name="company-site" className={`w-full bg-gray-100 py-3 px-4 rounded-lg ${isEditMode ? '' : 'opacity-50'}`} placeholder="example.com" disabled={!isEditMode} />
                      </div>
                    </div>
                  </div>
                  {/* Country */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Country</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      {/* Dropdown */}
                      <CustomDropdown name="country" value={country} onChange={handleChange} options={countries} placeholder="Select Country" disabled={!isEditMode} />
                    </div>
                  </div>
                  {/* Language */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Language</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-start flex-col ">
                      {/* Dropdown */}
                      <CustomDropdown name="language" value={language} onChange={handleChange} options={languages} placeholder="Select Language" disabled={!isEditMode} />
                      <p className='text-xs text-gray-400 mt-1'>Please select a preferred language, including date, time, and number formatting.</p>
                    </div>
                  </div>
                  {/* Timezone */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Timezone</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      {/* Dropdown */}
                      <CustomDropdown name="timezone" value={timezone} onChange={handleChange} options={timezones} placeholder="Select a timezone.." disabled={!isEditMode} />
                    </div>
                  </div>
                  {/* Currency */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Currency</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      {/* Dropdown */}
                      <CustomDropdown name="currency" value={currency} onChange={handleChange} options={currencies} placeholder="Select a currency" disabled={!isEditMode} />
                    </div>
                  </div>
                  {/* Communication */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="mpb-0 d:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Communication</p><span className="text-red-500 ml-1">*</span></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium">
                      {/* Checkbox */}
                      <FormGroup className="flex flex-col md:flex-row items-start md:items-center">
                        <FormControlLabel control={<Checkbox disabled={!isEditMode} />} label="Email" className="mr-4" />
                        <FormControlLabel control={<Checkbox disabled={!isEditMode} />} label="Phone" className="mr-4" />
                      </FormGroup>
                    </div>
                  </div>
                  {/* Allow Marketing */}
                  <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="pb-2 md:py-3 w-full md:w-1/3 text-gray-600 font-medium flex items-center"><p>Allow Marketing</p></div>
                    <div className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      {/* Toggle Switch */}
                      <Switch {...label} disabled={!isEditMode} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="border-t p-7 flex space-x-2 justify-end">
            {/* Discard Button */}
            <BtnSecondary className={`font-bold ${!isEditMode && 'disabled:opacity-50 cursor-not-allowed'}`} label="Discard" disabled={!isEditMode} />
            {/* <button
              className={`rounded-md py-4 px-5 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold ${!isEditMode && 'disabled:opacity-50 cursor-not-allowed'}`}
              disabled={!isEditMode}
            >
              Discard
            </button> */}
            {/* Save Changes Button */}
            <BtnPrimary label="Save Changes" disabled={!isEditMode} className={`font-bold ${!isEditMode && 'disabled:opacity-50 cursor-not-allowed'}`} />
          </div>

        </div>
      </div>

      {/* Sign-in Method Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 py-5">
            <h1 className="text-xl font-bold">Sign-in Method</h1>
          </div>

          <div className='p-7'>
            <div className='pb-6 border-b border-dash'>
              <div className='flex flex-col md:flex-row justify-between gap-3'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-md'>Email Address</p>
                  <p className='font-semibold text-sm text-gray-400 '>support@keenthemes.com</p>
                </div>
                {/* Change Email Button */}
                <BtnSecondary className="font-bold text-lg" label="Change Email" />
              </div>
            </div>
            <div className='pt-6'>
              <div className='flex flex-col md:flex-row justify-between gap-3'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-md'>Password</p>
                  <p className='font-semibold text-sm text-gray-400'>********</p>
                </div>
                {/* Reset Password Button */}
                <BtnSecondary className="font-bold text-lg" label="Reset Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}