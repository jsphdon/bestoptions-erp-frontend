export default function Logs() {
  const data = [
    { location: 'location 1', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '2 mins ago' },
    { location: 'location 2', status: 'ERR', device: 'Chrome - Windows', ip: '236.125.56.78', time: '10 mins ago' },
    { location: 'location 3', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '20 mins ago' },
    { location: 'location 4', status: 'WRN', device: 'Chrome - Windows', ip: '236.125.56.78', time: '30 mins ago' },
    { location: 'location 5', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '40 mins ago' },
  ];

  return (
    <div>
      {/* Profile Edit Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 flex justify-between items-center py-5">
            <h1 className="text-xl font-bold">Login Sessions</h1>
            <div className="flex items-center space-x-4">
              <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">1 Hour</button>
              <button className="rounded-md py-2 px-4 hover:bg-blue-700 bg-blue-600 text-white text-center mx-1 font-bold">View All</button>
            </div>
          </div>
          {/* Table */}
          <div>
            <div className="flex justify-center">
              <table className="min-w-full">
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
                  {data.map((row, index) => (
                    <tr key={index}>
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
    </div>
  )
}