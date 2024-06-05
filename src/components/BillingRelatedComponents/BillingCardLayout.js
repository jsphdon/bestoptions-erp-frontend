const BillingCardLayout = ({ cardName, isPrimary, cardProcessorImg, cardNumber, cardExpiry }) => {
  return (
    <div className="border border-dashed rounded-xl flex flex-col md:flex-row gap-8 md:gap-0 justify-between p-6 items-center">
      {/* Card Name its Mini Details */}
      <div className="flex flex-col">
        {/* Name and Primary indicator */}
        <div className="flex items-center mb-4">
          <h1 className="mr-2 text-lg font-bold">{cardName}</h1>
          {/* Conditional rendering of "Primary" indicator */}
          {isPrimary && (
            <span className="rounded-md bg-green-200 text-green-500 py-1 px-2 text-xs font-bold">Primary</span>
          )}
        </div>
        {/* Card Network and its mini details */}
        <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-0">
          {/* Card processor image */}
          <div className="mr-2">
            <img src={cardProcessorImg} alt="Card Processor" />
          </div>
          {/* Card mini details */}
          <div>
            {/* Card number */}
            <div>
              <h1 className="text-lg font-bold">{cardNumber}</h1>
            </div>
            {/* Card Expiry */}
            <div>
              <p className="text-gray-400 text-md font-medium">Card expires at {cardExpiry}</p>
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

export default BillingCardLayout;