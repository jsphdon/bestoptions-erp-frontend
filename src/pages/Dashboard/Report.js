import { reportData } from '../../sampleData/sampleData';

const Report = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center my-12 px-4 md:px-8">
      <div className="flex flex-col py-4 px-4 sm:px-7 border-slate-100 border w-full shadow-sm rounded-md mt-9">
        {/* FILTERS */}
        <div className="flex flex-col lg:flex-row justify-between mb-4 gap-2">
          {/* SEARCH BAR */}
          <div className=''>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2"
              placeholder="Search here"
              name=""
            />
          </div>
          {/* SORT DATE AND BUTTONS */}
          <div className='flex flex-col lg:flex-row gap-2'>
            {/* SORT DATE */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
              {/* FROM */}
              <div className='flex items-center gap-2'>
                <label for="start">From:</label>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='p-2 border rounded-md' />
              </div>
              {/* TO */}
              <div className='flex items-center gap-2'>
                <label for="start">To</label>
                <input type="date" id="start" name="trip-end" value="2024-06-07" min="2024-06-07" max="2018-12-31" className='p-2 border rounded-md' />
              </div>
            </div>
            {/* CLEAR FILTER */}
            <button className='w-full min-w-[150px] text-white py-2 bg-blue-700'>CLEAR FILTERS</button>
            {/* DOWNLOAD BUTTON */}
            <button className='w-full min-w-[150px] text-white py-2 bg-green-500'>DOWNLOAD</button>
          </div>
        </div>
        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-500 uppercase">
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">Reference Number</th>
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">PNR Number</th>
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">A2A</th>
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">Passengers</th>
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">Date</th>
                  <th className="px-4 py-2 border-b-2 border-black font-bold text-left text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row) => (
                  <tr key={row.id}>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm">{row.refId}</td>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm">{row.pnr}</td>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm min-w-[150px]">{row.a2a}</td>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm">{row.passengers} AED</td>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm">{row.date}</td>
                    <td className="p-4 text-black font-semibold text-left border-b border-dashed text-sm">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report