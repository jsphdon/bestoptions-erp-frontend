import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import AllTimeTableComponent from "../components/BillingRelatedComponents/AllTimeTableComponent";
import MonthTableComponent from "../components/BillingRelatedComponents/MonthTableComponent";
import YearTableComponent from "../components/BillingRelatedComponents/YearTableComponent";
import BillingAddressCardLayout from "../components/BillingRelatedComponents/BillingAddressCardLayout";
import BillingCardLayout from "../components/BillingRelatedComponents/BillingCardLayout";
import Layout from '../components/Layout';
import Usercard from '../components/UserCard';
import ModalAddCard from '../components/BillingRelatedComponents/ModalAddCard';
import ModalAddAddress from '../components/BillingRelatedComponents/ModalAddAddress';

export default function Billings() {
  const monthData = [
    { date: '30/10/2024', description: 'Invoice for October 2024', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
    { date: '31/11/2024', description: 'Invoice for November 2024', amount: 'AED 800', invoice: 'PDF', view: 'View' },
    { date: '30/12/2024', description: 'Invoice for December 2024', amount: 'AED 2,800', invoice: 'PDF', view: 'View' }
  ];

  const yearData = [
    { date: '30/10/2020', description: 'Invoice for 2020', amount: 'AED 50, 800', invoice: 'PDF', view: 'View' },
    { date: '31/11/2021', description: 'Invoice for 2021', amount: 'AED 80, 800', invoice: 'PDF', view: 'View' },
    { date: '30/12/2022', description: 'Invoice for 2022', amount: 'AED 100, 800', invoice: 'PDF', view: 'View' }
  ];

  const allTimeData = [
    { date: '30/10/2020', description: 'Invoice for October 2020', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
    { date: '31/11/2021', description: 'Invoice for November 2021', amount: 'AED 800', invoice: 'PDF', view: 'View' },
    { date: '30/12/2022', description: 'Invoice for December 2022', amount: 'AED 2,800', invoice: 'PDF', view: 'View' },
    { date: '30/10/2024', description: 'Invoice for October 2024', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
    { date: '31/11/2024', description: 'Invoice for November 2024', amount: 'AED 800', invoice: 'PDF', view: 'View' },
    { date: '30/12/2024', description: 'Invoice for December 2024', amount: 'AED 2,800', invoice: 'PDF', view: 'View' }
  ]

  const [selectedTab, setSelectedTab] = useState('Month'); // Assume Month is initially selected

  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);

  const handleOpenModalOne = () => setOpenModalOne(true);
  const handleCloseModalOne = () => setOpenModalOne(false);

  const handleOpenModalTwo = () => setOpenModalTwo(true);
  const handleCloseModalTwo = () => setOpenModalTwo(false);

  return (
    <Layout>
      <Usercard />
      {/* Payment Methods Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 flex justify-between items-center py-5">
            <h1 className="text-xl font-bold">Payment Methods</h1>
          </div>
          {/* Card section */}
          <div className="p-7">
            <h1 className="text-xl font-bold mb-4">My Cards</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Billing Card Layout Component (Card Details) */}
              <BillingCardLayout cardName="Marcus Morris" isPrimary={true} cardProcessorImg="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg" cardNumber="Visa **** 1679" cardExpiry="09/24" />

              {/* Add Card */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center border-blue-700 bg-blue-100">
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">Important Note!</h1>
                  <div class="text-sm text-gray-700 pe-7">Please carefully read <a href="#" class="font-bold me-1">Product Terms</a> adding <br /> your new payment card</div>
                </div>
                {/* Add Card button */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-5 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold" onClick={handleOpenModalOne}>Add Card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 flex justify-between items-center py-5">
            <h1 className="text-xl font-bold">Billing Address</h1>
          </div>
          {/* Address section */}
          <div className="p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Sample Address */}
              <BillingAddressCardLayout addressNumber={1} isPrimary={true} aptBlockAvenue="Ap #285-7193 Ullamcorper Avenue" cityState="Amesbury HI 93373" country="US" />

              {/* Add Address */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center border-blue-700 bg-blue-100 ">
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">This is a very important note!</h1>
                  <div class="text-sm text-gray-700 pe-7">Writing headlines for blog posts is much science and probably cool audience</div>
                </div>
                {/* Add Address Button */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-5 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold w-[139px]" onClick={handleOpenModalTwo}>New Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History Table */}
      <div className="flex flex-col lg:flex-row mt-8 w-full h-full">
        <div className="h-full flex flex-col border shadow-sm rounded-lg w-full text-center">
          <div className="h-full flex justify-between items-start md:items-center flex-col md:flex-row p-7 border-b py-5">
            <div className="flex flex-col text-justify">
              <h1 className="font-bold text-xl">Billing History</h1>
            </div>
            {/* Tabs of Month, Year and All Time */}
            <div className='flex flex-col md:flex-row space-x-0 md:space-x-2'>
              <button className={`py-2 px-3 text-sm font-normal ${selectedTab === 'Month' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('Month')}>Month</button>
              <button className={`py-2 px-3 text-sm font-normal ${selectedTab === 'Year' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('Year')}>Year</button>
              <button className={`py-2 px-3 text-sm font-normal ${selectedTab === 'All Time' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('All Time')}>All Time</button>
            </div>
            {/* End of Tabs */}
          </div>
          {/* Table */}
          <div>
            <div className="flex justify-center overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-gray-500">
                    <th className="min-w-[150px] pl-7 px-4 py-5 border-b font-bold text-left bg-gray-500/10">Date</th>
                    <th className="min-w-[250px] px-4 py-5 border-b font-bold text-left bg-gray-500/10">Description</th>
                    <th className="min-w-[150px] px-4 py-5 border-b font-bold text-center bg-gray-500/10">Amount</th>
                    <th className="min-w-[150px] px-4 py-5 border-b font-bold text-center bg-gray-500/10">Invoice</th>
                    <th className="px-4 py-5 border-b font-bold text-right bg-gray-500/10"></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTab === 'Month' && <MonthTableComponent data={monthData} />}
                  {selectedTab === 'Year' && <YearTableComponent data={yearData} />}
                  {selectedTab === 'All Time' && <AllTimeTableComponent data={allTimeData} />}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Add New Card */}
      <Modal
        open={openModalOne}
        onClose={handleCloseModalOne}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 4 }}>
          <ModalAddCard handleClose={handleCloseModalOne} />
        </Box>
      </Modal>

      {/* Modal for Add New Address */}
      <Modal
        open={openModalTwo}
        onClose={handleCloseModalTwo}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 4 }}>
          <ModalAddAddress handleClose={handleCloseModalTwo} />
        </Box>
      </Modal>
    </Layout >

  )
}