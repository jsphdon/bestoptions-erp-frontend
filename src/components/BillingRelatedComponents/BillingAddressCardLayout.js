const BillingAddressCardLayout = ({ addressNumber, isPrimary, aptBlockAvenue, cityState, country }) => {
  const addressNum = `Address ${addressNumber}`;

  return (
    <div className="border border-dashed rounded-xl flex flex-col md:flex-row gap-4 md:gap-0 justify-between p-6 items-center">
      {/* Card Name its Mini Details */}
      <div className="flex flex-col">
        {/* Name and Primary indicator */}
        <div className="flex items-center mb-4">
          <h1 className="mr-2 text-lg font-bold">{addressNum}</h1>
          {/* Conditional rendering of "Primary" indicator */}
          {isPrimary && (
            <span className="rounded-md bg-green-200 text-green-500 py-1 px-2 text-xs font-bold">Primary</span>
          )}
        </div>
        {/* Address Details*/}
        <div className="flex items-center">
          {/* Address details */}
          <div>
            {/* Apartment number, block, avenue */}
            <div>
              <h1 className="text-gray-400 text-md">{aptBlockAvenue}</h1>
            </div>
            {/* Address City, State */}
            <div>
              <p className="text-gray-400 text-md">{cityState}</p>
            </div>
            {/* Address Country */}
            <div>
              <p className="text-gray-400 text-md">{country}</p>
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
  )
}

export default BillingAddressCardLayout;
