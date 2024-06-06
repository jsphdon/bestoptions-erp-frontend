import React, { useState } from 'react';
import { Modal } from '@mui/material';
import AllTimeTableComponent from "../../components/BillingComponents/AllTimeTableComponent";
import MonthTableComponent from "../../components/BillingComponents/MonthTableComponent";
import YearTableComponent from "../../components/BillingComponents/YearTableComponent";
import BillingAddressCardLayout from "../../components/BillingComponents/BillingAddressCardLayout";
import BillingCardLayout from "../../components/BillingComponents/BillingCardLayout";
import Layout from '../../components/Layout';
import Usercard from '../../components/UserCard';
import ModalAddCard from '../../components/BillingComponents/ModalAddCard';
import ModalAddAddress from '../../components/BillingComponents/ModalAddAddress';
import { Link } from 'react-router-dom';
import { monthData, yearData, allTimeData } from '../../sampleData/sampleData';

export default function Billings() {

  const [selectedTab, setSelectedTab] = useState('Month'); // Assume Month is initially selected

  const [openModalAddCard, setOpenModalAddCard] = useState(false);
  const [openModalAddAddress, setOpenModalAddAddress] = useState(false);

  // Handle the opening and closing of Add Card Modal
  const handleOpenModalAddCard = () => setOpenModalAddCard(true);
  const handleCloseModalAddCard = () => setOpenModalAddCard(false);

  // Handle the opening and closing of Add Address Modal
  const handleOpenModalAddAddress = () => setOpenModalAddAddress(true);
  const handleCloseModalAddAddress = () => setOpenModalAddAddress(false);

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
              <div className="border border-dashed rounded-xl flex flex-col md:flex-row justify-between gap-2 md:gap-0 p-6 items-center border-blue-700 bg-blue-100">
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">Important Note!</h1>
                  <div className="text-sm text-gray-700 pe-0 md:pe-7">Please carefully read <Link href="#" class="font-bold me-1">Product Terms</Link> adding  your new payment card</div>
                </div>
                {/* Add Card button */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-5 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold w-[139px] " onClick={handleOpenModalAddCard}>Add Card</button>
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
              <div className="border border-dashed rounded-xl flex flex-col md:flex-row gap-2 md:gap-0 justify-between p-6 items-center border-blue-700 bg-blue-100 ">
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">This is a very important note!</h1>
                  <div className="text-sm text-gray-700 pe-0 md:pe-7">Writing headlines for blog posts is much science and probably cool audience</div>
                </div>
                {/* Add Address Button */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-4 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold w-[139px]" onClick={handleOpenModalAddAddress}>New Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History Table */}
      <div className="flex flex-col lg:flex-row mt-8 w-full h-full">
        <div className="h-full flex flex-col border shadow-sm rounded-lg w-full text-center">
          <div className="h-full flex justify-between items-start md:items-center flex-col md:flex-row border-b">
            <div className="flex flex-col text-justify p-7 py-5 gap-3 md:gap-0">
              <h1 className="font-bold text-xl">Billing History</h1>
            </div>
            {/* Tabs of Month, Year and All Time - FILTER */}
            <div className='flex flex-row gap-0 md:gap-2 p-0 pb-0 md:pt-7 pl-7 md:pr-7'>
              <button className={`pt-0 py-5 pl-0 pr-3 md:px-3 text-sm font-normal ${selectedTab === 'Month' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('Month')}>Month</button>
              <button className={`pt-0 py-5 px-3 text-sm font-normal ${selectedTab === 'Year' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('Year')}>Year</button>
              <button className={`pt-0 py-5 px-3 text-sm font-normal ${selectedTab === 'All Time' ? 'border-b-2 border-gray-900' : ''}`} onClick={() => setSelectedTab('All Time')}>All Time</button>
            </div>
            {/* End of Tabs */}
          </div>
          {/* Table */}
          <div>
            <div className="overflow-x-auto">
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
        open={openModalAddCard}
        onClose={handleCloseModalAddCard}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ModalAddCard handleClose={handleCloseModalAddCard} />
      </Modal>

      {/* Modal for Add New Address */}
      <Modal
        open={openModalAddAddress}
        onClose={handleCloseModalAddAddress}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ModalAddAddress handleClose={handleCloseModalAddAddress} />
      </Modal>
    </Layout >

  )
}