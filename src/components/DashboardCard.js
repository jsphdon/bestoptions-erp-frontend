import { Link, useLocation } from "react-router-dom";
import React, { useCallback, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

export default function DashboardCard() {
  // Get the current location
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      {/* June 07, 2024 Update */}
      <div className='w-full'>
        {/* HEADER CONTENT */}
        <div className="flex flex-col border shadow-sm rounded-lg w-full px-4 sm:px-7 pt-7">

          {/* CARDS */}
          <div className="flex flex-col gap-5 w-full mb-4">
            {/* Wallet Balance and Pending Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

              {/* Wallet Balance Card */}
              <div className="flex flex-col justify-between p-7 bg-blue-700 rounded-xl">
                <div>
                  {/* Heading */}
                  <h1 className="font-bold text-xl md:text-3xl text-gray-300">Wallet Balance</h1>
                  <p className="text-sm text-gray-200 mt-4 mb-8">My Balance</p>

                  {/* Amount */}
                  <h1 className="text-2xl font-bold text-gray-200 mb-1">0</h1>
                  <p className="text-gray-200">is left in you wallet!</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row w-full gap-4 mt-4">
                  <button aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className="py-2 flex justify-center items-center text-white uppercase bg-blue-900 w-full">Deposit</button>
                  {/* Pop up */}
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ sx: { width: '100%' } }}
                    PaperProps={{
                      style: {
                        width: anchorEl ? anchorEl.offsetWidth : null, // dynamically set width
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose} sx={{ justifyContent: 'center' }}>Add Money</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ justifyContent: 'center' }}>Deposit Bank</MenuItem>
                  </Menu>
                  <button className="py-2 flex justify-center items-center text-white uppercase bg-blue-900 w-full">Withdraw</button>
                </div>
              </div>

              {/* Pending Balance Card */}
              <div className="p-7 bg-blue-700 rounded-xl">
                {/* Heading */}
                <h1 className="font-bold text-xl md:text-3xl text-gray-300">Pending Balance</h1>
                <p className="text-sm text-gray-200 mt-4 mb-8">Pending Balance</p>

                {/* Amount */}
                <h1 className="text-2xl font-bold mb-1 text-gray-200">0</h1>
                <p className="text-gray-200">amount is pending!</p>

                <div className="flex flex-col w-full mt-4">
                  <p className="text-gray-200">add money to your wallet and explore destinations</p>
                  <p className="text-gray-200">withdraw the money in to your account</p>
                </div>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="mt-4 flex justify-between flex-col-reverse md:flex-row gap-4">
            <nav className="overflow-x-auto">
              <ul className='flex gap-5 overflow-x-auto'>
                <li className={location.pathname === "/transactions" ? 'text-blue-500 pb-2 sm:pb-4 border-b-2 border-blue-500' : 'text-black pb-7 min-w-[140px]'}>
                  <Link to="/transactions" className='font-bold text-sm md:text-base'>Transactions</Link>
                </li>
                <li className={location.pathname === "/deposit" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-black pb-7 min-w-[60px]'}>
                  <Link to="/deposit" className='font-bold text-sm md:text-base'>Deposit</Link>
                </li>
                <li className={location.pathname === "/deposit-request" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-black pb-7 min-w-[125px]'}>
                  <Link to="/deposit-request" className='font-bold text-sm md:text-base'>Deposit Request</Link>
                </li>
                <li className={location.pathname === "/withdrawal" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-black pb-7 min-w-[90px]'}>
                  <Link to="/withdrawal" className='font-bold text-sm md:text-base'>Withdrawal</Link>
                </li>
                <li className={location.pathname === "/withdrawal-request" ? 'text-blue-500 border-b-2 border-blue-500 pb-2 sm:pb-4' : 'text-black pb-7 min-w-[140px]'}>
                  <Link to="/withdrawal-request" className='font-bold text-sm md:text-base'>Withdrawal Request</Link>
                </li>
              </ul>
            </nav>
            {/* REPORT LINK */}
            <Link className="text-lg font-bold text-blue-700" to="/report">REPORT</Link>
          </div>
        </div>

      </div>
    </>
  )
}