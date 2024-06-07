import React, { useCallback, useState } from 'react';
import CustomDropdown from "../../components/CustomDropdown";
import Layout from "../../components/Layout";
import Usercard from "../../components/UserCard";
import { logsData, hours } from "../../sampleData/sampleData";
import BtnPrimary from '../../components/BtnPrimary';

export default function Logs() {

  const [hour, setHour] = useState('');

  const handleHourChange = useCallback((event) => {
    setHour(event.target.value);
  });

  return (
    <Layout>
      <Usercard />
      {/* Profile Edit Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 flex flex-col md:flex-row justify-between items-start md:items-center py-5 gap-3">
            <h1 className="text-xl font-bold">Login Sessions</h1>
            <div className="flex items-center gap-4">
              {/* Hourly Data */}
              <CustomDropdown value={hour} onChange={handleHourChange} options={hours} placeholder="Select.." />
              {/* View All Button */}
              <BtnPrimary className="min-w-24 font-bold py-4 px-4" label="View All" />
            </div>
          </div>
          {/* Table */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-gray-900 font-medium">
                    <th className="px-4 py-2 border-b text-left min-w-[250px]">Location</th>
                    <th className="px-4 py-2 border-b text-left min-w-[100px]">Status</th>
                    <th className="px-4 py-2 border-b text-left min-w-[150px]">Device</th>
                    <th className="px-4 py-2 border-b text-left min-w-[150px]">IP Address</th>
                    <th className="px-4 py-2 border-b text-left min-w-[150px]">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {logsData.map((row, index) => (
                    <tr key={row.id}>
                      <td className="px-4 py-2 text-gray-700 text-left border-t min-w-[250px]">{row.location}</td>
                      <td className="px-4 py-2 text-gray-700 text-left border-t min-w-[100px]">{row.status}</td>
                      <td className="px-4 py-2 text-gray-700 text-left border-t min-w-[150px]">{row.device}</td>
                      <td className="px-4 py-2 text-gray-700 text-left border-t min-w-[150px]">{row.ip}</td>
                      <td className="px-4 py-2 text-gray-700 text-left border-t min-w-[150px]">{row.time}</td>
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