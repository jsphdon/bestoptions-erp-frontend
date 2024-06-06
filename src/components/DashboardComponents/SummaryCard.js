const SummaryCard = ({ className, amount, description, percentage, currency, children }) => {
  return (
    <div className={`rounded-lg shadow-sm flex flex-col justify-between py-4 px-7 border-slate-100 border min-w-[260px] min-h-[240px] ${className}`}>
      <div>
        <h1 className="text-3xl font-semibold flex flex-row items-center gap-1">
          {currency}{amount}<span className="rounded-md bg-green-200 text-green-700 py-1 px-2 text-sm font-semibold">{percentage}%</span>
        </h1>
        <p className="text-sm text-gray-400 font-semibold">{description}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default SummaryCard;
