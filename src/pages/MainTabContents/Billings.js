export default function Billings() {
  const data = [
    { date: '30/10/2024', description: 'Invoice for October 2024', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
    { date: '31/11/2024', description: 'Invoice for November 2024', amount: 'AED 800', invoice: 'PDF', view: 'View' },
    { date: '30/12/2024', description: 'Invoice for December 2024', amount: 'AED 2,800', invoice: 'PDF', view: 'View' }
  ];

  return (
    <div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
              {/* Sample Card (Card Details) */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center">
                {/* Card Name its Mini Details */}
                <div className="flex flex-col">
                  {/* Name and Primary indicator */}
                  <div className="flex items-center mb-4">
                    <h1 className="mr-2 text-lg font-bold">Marcus Morris</h1>
                    <span className="rounded-md bg-green-200 text-green-500 py-1 px-2 text-xs font-bold">Primary</span>
                  </div>
                  {/* Card Network and its mini details */}
                  <div className="flex items-center">
                    {/* Card processor image */}
                    <div className="mr-2">
                      <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg" />
                    </div>
                    {/* Card mini details */}
                    <div>
                      {/* Card number */}
                      <div>
                        <h1 className="text-lg font-bold">Visa **** 1679</h1>
                      </div>
                      {/* Card Expiry */}
                      <div>
                        <p className="text-gray-400 text-md font-medium">Card expires at 09/24</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Buttons Delete and Edit */}
                <div className="flex space-x-3 h-fit">
                  <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm">Delete</button>
                  <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm">Edit</button>
                </div>
              </div>

              {/* Add Card */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center border-blue-700 bg-blue-100">
                {/* Card Name its Mini Details */}
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">Important Note!</h1>
                  <div class="text-sm text-gray-700 pe-7">Please carefully read <a href="#" class="font-bold me-1">Product Terms</a> adding <br /> your new payment card</div>

                </div>
                {/* Card Buttons Delete and Edit */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-5 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold">Add Card</button>
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
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
              {/* Sample Address */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center">
                {/* Address Name its Mini Details */}
                <div className="flex flex-col">
                  {/* Name and Primary indicator */}
                  <div className="flex items-center mb-4">
                    <h1 className="mr-2 text-lg font-bold">Address 1</h1>
                    <span className="rounded-md bg-green-200 text-green-500 py-1 px-2 text-xs font-bold">Primary</span>
                  </div>
                  {/* Card Network and its mini details */}
                  <div className="flex items-center">
                    {/* Address details */}
                    <div>
                      {/* Apartment number, block, avenue */}
                      <div>
                        <h1 className="text-gray-400 text-md">Ap #285-7193 Ullamcorper Avenue</h1>
                      </div>
                      {/* Address City, State */}
                      <div>
                        <p className="text-gray-400 text-md">Amesbury HI 93373</p>
                      </div>
                      {/* Address Country */}
                      <div>
                        <p className="text-gray-400 text-md">US</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Buttons Delete and Edit */}
                <div className="flex space-x-3 h-fit">
                  <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm">Delete</button>
                  <button className="rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm">Edit</button>
                </div>
              </div>

              {/* Add Card */}
              <div className="border border-dashed rounded-xl flex justify-between p-6 items-center border-blue-700 bg-blue-100">
                {/* Card Name its Mini Details */}
                <div className="flex flex-col">
                  {/* Important Note */}
                  <h1 className="mb-1 text-lg font-bold">This is a very important note!</h1>
                  <div class="text-sm text-gray-700 pe-7">Writing headlines for blog posts is much science and probably cool audience</div>

                </div>
                {/* Card Buttons Delete and Edit */}
                <div className="flex h-fit">
                  <button className="rounded-lg py-2 px-5 hover:bg-blue-600 bg-blue-500 text-center text-md text-white font-white font-bold">New Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History Table */}
      <div className="flex flex-col lg:flex-row mt-8 w-full h-full">
        {/* Table */}
        <div className="h-full flex flex-col border shadow-sm rounded-lg w-full text-center">
          <div className="h-full flex justify-between items-start md:items-center flex-col md:flex-row p-7 border-b py-5">
            <div className="flex flex-col text-justify">
              <h1 className="font-bold text-xl">Billing History</h1>
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
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="min-w-[150px] pl-7 px-4 py-5 text-gray-500 text-left border-b">{row.date}</td>
                      <td className="min-w-[250px] px-4 py-5 text-gray-500 text-left border-b">{row.description}</td>
                      <td className="min-w-[150px] px-4 py-5 text-gray-500 text-center border-b">{row.amount}</td>
                      <td className="min-w-[150px] px-4 py-5 text-gray-500 text-center border-b">
                        <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center">
                          {row.invoice}
                        </button>
                      </td>
                      <td className="px-4 py-5 text-gray-500 text-center border-b"><button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center">
                        {row.view}
                      </button></td>
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