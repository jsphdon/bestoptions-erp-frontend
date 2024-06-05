import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import CustomDropdown from '../components/CustomDropdown';
import Layout from '../components/Layout';
import Usercard from '../components/UserCard';

export default function FullProfile() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countries = [
    { value: 'uganda', label: 'Uganda' },
    { value: 'uae', label: 'United Arab Emirates' },
    { value: 'philippines', label: 'Philippines' },
  ];

  return (
    <Layout>
      <Usercard />
      {/* Profile Edit Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 py-5">
            <h1 className="text-xl font-bold">Profile Details</h1>
          </div>
          {/* Table Details */}
          <div className="p-7">
            <div className="flex justify-center">
              <table className="min-w-full border-collapse">
                <tbody>
                  {/* Avatar */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex"><p>Avatar</p></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="block relative h-[160px] w-[160px] mb-2 md:mb-0 mr-0 md:mr-4">
                        {/* Photo */}
                        <img className="rounded-md" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" alt="sample account profile" />
                      </div>
                    </td>
                  </tr>
                  {/* Full Name */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Full Name</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        <input type="text" name="fname" className="w-1/2 bg-gray-100 py-3 px-4 rounded-lg" placeholder="First name" />
                        <input type="text" name="lname" className="w-1/2 bg-gray-100 py-3 px-4 rounded-lg" placeholder="Last name" />
                      </div>
                    </td>
                  </tr>
                  {/* Company */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Company</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        <input type="text" name="fname" className="w-full bg-gray-100 py-3 px-4 rounded-lg" placeholder="First name" />
                      </div>
                    </td>
                  </tr>
                  {/* Contact Phone */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Contact Phone</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        <input type="number" name="contact" className="w-full bg-gray-100 py-3 px-4 rounded-lg" placeholder="+971" />
                      </div>
                    </td>
                  </tr>
                  {/* Company Site */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Company Site</p></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <div className="w-full flex space-x-4">
                        <input type="text" name="company-site" className="w-full bg-gray-100 py-3 px-4 rounded-lg" placeholder="example.com" />
                      </div>
                    </td>
                  </tr>
                  {/* Country */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Country</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      {/* <Select className='w-full rounded-xl' options={country} /> */}
                      <CustomDropdown value={country} onChange={handleChange} options={countries} placeholder="Select Country" />
                    </td>
                  </tr>
                  {/* Language */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Language</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-start flex-col ">
                      <CustomDropdown value={country} onChange={handleChange} options={countries} placeholder="Select Language" />
                      <p className='text-xs text-gray-400 mt-1'>Please select a preferred language, including date, time, and number formatting.</p>
                    </td>
                  </tr>
                  {/* Timezone */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Timezone</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <CustomDropdown value={country} onChange={handleChange} options={countries} placeholder="Select a timezone.." />
                    </td>
                  </tr>
                  {/* Currency */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Currency</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <CustomDropdown value={country} onChange={handleChange} options={countries} placeholder="Select a currency" />
                    </td>
                  </tr>
                  {/* Communication */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="mpb-0 d:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Communication</p><span className="text-red-500 ml-1">*</span></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium">
                      <FormGroup className="flex flex-col md:flex-row items-start md:items-center">
                        <FormControlLabel control={<Checkbox />} label="Email" className="mr-4" />
                        <FormControlLabel control={<Checkbox />} label="Phone" className="mr-4" />
                      </FormGroup>
                    </td>
                  </tr>
                  {/* Allow Marketing */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-600 font-medium flex items-center"><p>Allow Marketing</p></td>
                    <td className="pt-0 md:py-3 w-full md:w-2/3 font-medium flex items-center">
                      <Switch {...label} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Save Changes */}
          <div className="border-t-2 p-7 flex space-x-2 justify-end">
            <button className="rounded-md py-4 px-5 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">Discard</button>
            <button className="rounded-md py-4 px-5 hover:bg-blue-700 bg-blue-600 text-white text-center mx-2 md:mx-1 font-bold">Save Changes</button>
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
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-md'>Email Address</p>
                  <p className='font-semibold text-sm text-gray-400 '>support@keenthemes.com</p>
                </div>
                <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">Change Email</button>
              </div>
            </div>
            <div className='pt-6'>
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-md'>Password</p>
                  <p className='font-semibold text-sm text-gray-400'>********</p>
                </div>
                <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">Reset Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}