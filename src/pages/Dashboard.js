import React, { useState } from "react";
import Layout from '../components/Layout';
import SummaryCard from '../components/DashboardComponents/SummaryCard';
import { dashboardDataFirst, data, transactStatus, categories, tabContent } from '../sampleData/sampleData';
import CustomDropdown from '../components/CustomDropdown';
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";


export default function Dashboard() {

  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Handle changes based on the name of the input/select element
    switch (name) {
      case 'status':
        setStatus(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
      // Default case
    }
  };

  return (
    <Layout>
      {/* First Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">

        {/* Summary (4 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Expected Earnings */}
          <SummaryCard amount="70,000" description="Expected Earnings" percentage="2.2" currency={<span className="text-gray-500 text-sm">AED</span>} />
          {/* Average Daily Sales */}
          <SummaryCard amount="10,000" description="Average Daily Sales" percentage="1.2" currency={<span className="text-gray-500 text-sm">AED</span>} />
          {/* Orders This Month */}
          <SummaryCard amount="300" description="Orders This Month" percentage="2.2" />
          {/* New Customers This Month */}
          <SummaryCard amount="20" description="New Customers This Month" percentage="2.2" />
        </div>

        {/* Sales this Month Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border">
          {/* Heading */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Sales This Month</h1>
              <p className="text-sm text-gray-400 font-semibold">Users from all channels</p>
            </div>
            {/* More Button */}
            <button className="flex space-x-1 justify-center items-center rounded-md py-3 px-2 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            </button>
          </div>
          {/* Current Number */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold flex flex-row items-center gap-1">
              <span className="text-gray-500 text-sm">AED</span>14,094
            </h1>
            <p className="text-sm text-gray-400 font-semibold">Another $48,346 to Goal</p>
          </div>

          <div>
            {/* INSERT GRAPH HERE */}
          </div>
        </div>

        {/* Recent Orders Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border min-h-[586px]">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-semibold">Recent Orders</h1>
            {/* More Button */}
            <button className="flex space-x-1 justify-center items-center rounded-md py-3 px-2 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            </button>
          </div>
          <div className="w-full">
            {/* TABS */}
            <div className="flex flex-col gap-4">
              <Tabs activeTab={activeTab} onTabClick={setActiveTab} tabs={tabContent} />
              <TabContent content={tabContent[activeTab].content} />
            </div>
          </div>
        </div>

        {/* Discounted Product Sales Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border">
          {/* Heading */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Discounted Product Sales</h1>
              <p className="text-sm text-gray-400 font-semibold">Users from all channels</p>
            </div>
            {/* More Button */}
            <button className="flex space-x-1 justify-center items-center rounded-md py-3 px-2 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            </button>
          </div>
          {/* Current Number */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold flex flex-row items-center gap-1">
              <span className="text-gray-500 text-sm">AED</span>3,706
            </h1>
            <p className="text-sm text-gray-400 font-semibold">Total Discounted Sales This Month</p>
          </div>

          <div>
            {/* INSERT GRAPH HERE */}
          </div>
        </div>

      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 w-full">

        {/* Advertisment Card */}
        <div className="rounded-lg shadow-sm flex flex-col justify-center items-center py-4 px-7 border-slate-100 border col-span-2 lg:col-span-1">
          <h1 className="text-center text-2xl text-gray-800">Have you tried the new <span className="font-bold">Mobile Application ?</span></h1>
          <img className="py-10" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/illustrations/easy/1.svg" alt="alt photo for a girl holding a phone" />

          <div>
            <button className="rounded-md py-2 px-4 hover:bg-blue-700 bg-blue-600 text-white text-center mx-2 md:mx-1 font-bold">Try Now</button>
            <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">Follow</button>
          </div>
        </div>

        {/* Product Orders Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border col-span-2 lg:col-span-2">
          <div className="flex justify-between items-start flex-col md:flex-row ">
            <div className="flex flex-col text-justify">
              <h1 className="font-bold text-lg">Product Orders</h1>
              <p className="text-gray-400 font-medium text-md">Avg. 57 orders per day</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 mt-3 md:mt-0'>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 px-0 pr-3 md:px-3 text-gray-600 font-medium text-sm'>Category</h1>
                <CustomDropdown name="category" value={category} onChange={handleChange} options={categories} placeholder="Select" />
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 px-0 pr-3 md:px-3 text-gray-600 font-medium text-sm'>Status</h1>
                <CustomDropdown name="status" value={status} onChange={handleChange} options={transactStatus} placeholder="Select" />
              </div>
              <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-semibold mt-1 md:mt-0">View All</button>
            </div>
          </div>
          {/* Table */}
          <div className='py-7'>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-gray-500 uppercase">
                    <th className="px-4 py-2 border-b border-dashed font-bold text-left">Order ID</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Created</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Customer</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Total</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Profit</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardDataFirst.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.id}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm">{row.created}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm">{row.customer}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm">{row.total}</td>
                      <td className="px-4 py-2 text-black font-semibold text-center border-b border-dashed text-sm">{row.profit}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-right border-b border-dashed text-sm">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <div className="flex justify-between items-center flex-row">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">Latest Items</h1>
                <p className="text-gray-400 font-medium text-sm">342 Items Sold Last Month</p>
              </div>
              <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-semibold">View More</button>
            </div>
            <div className="overflow-x-auto mt-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-gray-500 uppercase">
                    <th className="px-4 py-2 border-b border-dashed font-bold text-left">Date</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Item Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-black font-bold text-left border-b border-dashed">{row.dateAdded}</td>
                      {/* <td className="px-4 py-2 text-gray-500 font-bold text-center border-b border-dashed">{row.productId}</td> */}
                      <td className="px-4 py-2 text-gray-500 font-bold text-center border-b border-dashed">60 days VISA</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Stock Report Card */}
        <div className="rounded-lg shadow-sm flex flex-col py-4 px-7 border-slate-100 border col-span-2 lg:col-span-2">
          <div className="flex justify-between items-start flex-col md:flex-row ">
            <div className="flex flex-col text-justify">
              <h1 className="font-bold text-lg">Product Orders</h1>
              <p className="text-gray-400 font-medium text-md">Avg. 57 orders per day</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 mt-3 md:mt-0'>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 px-0 pr-3 md:px-3 text-gray-600 font-medium text-sm'>Category</h1>
                <CustomDropdown name="category" value={category} onChange={handleChange} options={categories} placeholder="Select" />
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 px-0 pr-3 md:px-3 text-gray-600 font-medium text-sm'>Status</h1>
                <CustomDropdown name="status" value={status} onChange={handleChange} options={transactStatus} placeholder="Select" />
              </div>
              <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-semibold mt-1 md:mt-0">View All</button>
            </div>
          </div>
          {/* Table */}
          <div className='py-7'>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-gray-500 uppercase">
                    <th className="px-4 py-2 border-b border-dashed font-bold text-left">Date Added</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-left">Invoice #</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Sales Person</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Amount</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-left border-b border-dashed text-sm ">{row.dateAdded}</td>
                      <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm ">{row.item}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm ">{row.productId}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm ">{row.price}</td>
                      <td className="px-4 py-2 text-gray-500 font-semibold text-right border-b border-dashed text-sm ">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}