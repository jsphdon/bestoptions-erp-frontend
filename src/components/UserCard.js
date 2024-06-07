import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BtnSecondary from './BtnSecondary';


export default function Usercard() {

  // Get the current location
  const location = useLocation();

  return (
    <div className='w-full'>
      {/* HEADER CONTENT */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full">
        <div className='flex flex-col md:flex-row items-start md:items-center pt-7 px-7 w-full'>
          {/* Profile Photo */}
          <div className="block relative h-[160px] w-[160px] mb-2 md:mb-0 mr-0 md:mr-4">
            {/* Status */}
            <div className="w-5 h-5 border-white border-4 rounded-full bg-green-400 absolute bottom-10 -right-3"></div>
            {/* Photo */}
            <img className="rounded-md" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" alt="sample account profile" />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col md:flex-row justify-between w-full">
              {/* Details */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center mb-1">
                  {/* Name */}
                  <h1 className="text-xl font-bold mr-2">George Best</h1>
                  {/* Is verified */}
                  <div>
                    <img src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge" className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex space-x-0 sm:space-x-4 flex-col sm:flex-row space-y-1 sm:space-y-0">
                  {/* Place of Origin */}
                  <div className="hover:text-blue-500 text-gray-400 flex items-center">
                    {/* <img src="https://img.icons8.com/material-rounded/24/user-male-circle.png" alt="user-male-circle" className="h-4 w-4 mr-1 text-gray-400" /> */}
                    <p>Abu Dhabi, UAE</p>
                  </div>
                  {/* Address */}
                  {/* <div>
                    <p className="text-gray-400">SF, Bay Area</p>
                  </div> */}
                  {/* Email */}
                  <div>
                    <p className="text-gray-400">george@best.com</p>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex my-4">
                {/* View Button */}
                <BtnSecondary label="View" className="text-gray-600 font-bold text-center" />
                {/* Edit Profile Button */}
                <Link to="/full-profile" className="rounded-md py-2 px-4 hover:bg-blue-700 bg-blue-600 text-white text-center mx-2 md:mx-1 font-bold">Edit Profile</Link>
                {/* More Button */}
                <button className="flex space-x-1 justify-center items-center rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">
                  <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
                  <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
                  <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-1 md:mt-5">
              {/* Cards */}
              <div className="flex flex-row gap-4 grow flex-wrap">
                {/* Card 1 */}
                <div className="rounded-md flex border flex-col p-2 min-w-[125px] border-dashed">
                  <div className="flex">
                    <h4 className="font-bold text-xl">AED 4,500</h4>
                  </div>
                  <div>
                    <h5 className="text-gray-400 font-medium text-sm">Total Sales</h5>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="rounded-md flex border flex-col p-2 min-w-[125px] border-dashed">
                  <div className="flex">
                    <h4 className="font-bold text-xl">80 Items</h4>
                  </div>
                  <div>
                    <h5 className="text-gray-400 font-medium text-sm">Total Items</h5>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="rounded-md flex border flex-col p-2 min-w-[125px] border-dashed">
                  <div className="flex">
                    <h4 className="font-bold text-xl">%60</h4>
                  </div>
                  <div>
                    <h5 className="text-gray-400 font-medium text-sm">Profit Margin</h5>
                  </div>
                </div>
              </div>
              {/* Percentage Count */}
              <div className="flex flex-col w-full sm:w-[300px] mt-4 md:mt-0">
                {/* Percent */}
                <div className="flex item-center justify-between w-full mb-1">
                  <h4 className="text-gray-500 font-medium text-sm">Profile Completion</h4>
                  <p className="text-gray-700 font-bold">50%</p>
                </div>
                {/* Progress Bar */}
                <div className="h-[5px] w-full bg-gray-200 rounded-full">
                  <div className="bg-green-500 h-[5px] w-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TABS */}
        <div className="mt-4 px-7">
          <nav>
            <ul className='flex gap-5 overflow-y-auto'>
              <li className={location.pathname === "/overview" ? 'text-blue-500 pb-2 sm:pb-4 border-b-2 border-blue-500' : 'text-gray-400'}>
                <Link to="/overview" className='font-bold text-sm md:text-base'>Overview</Link>
              </li>
              <li className={location.pathname === "/full-profile" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-gray-400'}>
                <Link to="/full-profile" className='font-bold text-sm md:text-base'>Full Profile</Link>
              </li>
              <li className={location.pathname === "/logs" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-gray-400'}>
                <Link to="/logs" className='font-bold text-sm md:text-base'>Logs</Link>
              </li>
              <li className={location.pathname === "/billings" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-gray-400'}>
                <Link to="/billings" className='font-bold text-sm md:text-base'>Billings</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  )
}