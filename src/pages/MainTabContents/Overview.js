export default function Overview() {
  const data = [
    { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
    { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
    { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
    { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
    { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
  ];

  return (
    <div>
      {/* Profile Details Section */}
      <div className="flex flex-col border shadow-sm rounded-lg w-full mt-8">
        <div>
          {/* Header */}
          <div className="border-b p-7 flex justify-between items-center py-5">
            <h1 className="text-xl font-bold">Profile Details</h1>
            {/* <button className="rounded-md py-2 px-4 hover:bg-blue-700 bg-blue-600 text-white text-center mx-1 font-bold">Edit Profile</button> */}
          </div>
          {/* Table Details */}
          <div className="p-7">
            <div className="flex justify-center">
              <table className="min-w-full border-collapse">
                <tbody>
                  {/* Full Name */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Full Name</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>Max Smith</p></td>
                  </tr>
                  {/* Company */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Company</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>Keenthemes</p></td>
                  </tr>
                  {/* Contact Phone */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Contact Phone</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium flex items-center"><p>044 3276 454 935</p>
                      {/* is Verified */}
                      <span className="ml-2 bg-green-400 py-1 px-2 text-white font-medium rounded-xl text-xs">Verified</span>
                    </td>
                  </tr>
                  {/* Company Site */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Company Site</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>keenthemes.com</p></td>
                  </tr>
                  {/* Country */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Country</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>Germany</p></td>
                  </tr>
                  {/* Communication */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="mpb-0 d:py-3 w-1/3 text-gray-400 font-medium"><p>Communication</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>Email, Phone</p></td>
                  </tr>
                  {/* Allow Changes */}
                  <tr className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <td className="pb-0 md:py-3 w-1/3 text-gray-400 font-medium"><p>Allow Changes</p></td>
                    <td className="pt-0 md:py-3 w-2/3 font-medium"><p>Yes</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      {/* <div className="flex flex-col lg:flex-row mt-8 w-full h-full">
        <div className="flex flex-col p-7 border shadow-sm rounded-lg w-full mr-0 mb-4 lg:mr-4 lg:mb-0 basis-8/12">
          <div className="h-full flex justify-between items-center flex-row">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Top Selling Categories</h1>
              <p className="text-gray-400">8k social visitors</p>
            </div>
            <button className="flex space-x-1 justify-center items-center rounded-md py-3 px-2 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            </button>
          </div>

          <div className="mt-5">
            <img className="max-w-full h-auto" src="/graph-sample.png" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-7 border shadow-sm rounded-lg w-full text-center ml-0 mt-4 lg:ml-4 lg:mt-0 basis-4/12">
          <h1 className="text-center text-2xl text-gray-800">Have you tried the new <span className="font-bold">Mobile Application ?</span></h1>
          <img className="py-10" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/illustrations/easy/1.svg" alt="alt photo for a girl holding a phone" />

          <div>
            <button className="rounded-md py-2 px-4 hover:bg-blue-700 bg-blue-600 text-white text-center mx-2 md:mx-1 font-bold">Try Now</button>
            <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center font-bold">Follow</button>
          </div>
        </div>
      </div> */}

      {/* 3rd Row */}
      <div className="flex flex-col lg:flex-row mt-8 w-full h-full">
        {/* Latest Items div */}
        <div className="flex flex-col p-7 border shadow-sm rounded-lg w-full mr-0 mb-4 lg:mr-4 lg:mb-0 basis-4/12">
          <div className="flex flex-col">
            <div className="flex justify-between items-center flex-row">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">Latest Items</h1>
                <p className="text-gray-400 font-medium text-sm">342 Items Sold Last Month</p>
              </div>
              <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-normal">View More</button>
            </div>
            <div className="flex justify-center mt-8">
              <table className="min-w-full overflow-x-auto">
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
        {/* Latest Transactions div */}
        <div className="h-full flex flex-col p-7 border shadow-sm rounded-lg w-full text-center ml-0 mt-4 lg:ml-4 lg:mt-0 basis-8/12">
          <div className="h-full flex justify-between items-start md:items-center flex-col md:flex-row ">
            <div className="flex flex-col text-justify">
              <h1 className="font-bold text-lg">Latest Transactions</h1>
              <p className="text-gray-400 font-medium text-md">Total Sales 30,000 AED</p>
            </div>
            <div className='flex flex-col md:flex-row space-x-0 md:space-x-2'>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 pl-0 md:pl-3 text-gray-600 font-medium'>Category</h1>
                <button className="py-2 px-3 text-sm font-normal">Show All</button>
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='py-2 pl-0 md:pl-3 text-gray-600 font-medium'>Status</h1>
                <button className="py-2 px-3 text-sm font-normal">Show All</button>
              </div>
              <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-normal mt-1 md:mt-0">View All</button>
            </div>
          </div>
          {/* Table */}
          <div className='py-7'>
            <div className="flex justify-center overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-gray-500 uppercase">
                    <th className="px-4 py-2 border-b border-dashed font-bold text-right">Date Added</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-left">Invoice #</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-center">Sales Person</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-right">Amount</th>
                    <th className="px-4 py-2 border-b border-dashed font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-gray-500 font-bold text-right border-b border-dashed">{row.dateAdded}</td>
                      <td className="px-4 py-2 text-black font-bold text-left border-b border-dashed">{row.item}</td>
                      <td className="px-4 py-2 text-gray-500 font-bold text-center border-b border-dashed">{row.productId}</td>
                      <td className="px-4 py-2 text-gray-500 font-bold text-right border-b border-dashed">{row.price}</td>
                      <td className="px-4 py-2 text-gray-500 font-bold text-right border-b border-dashed">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}