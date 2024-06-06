const BtnSecondary = ({ className, onClick, label, disabled }) => {
  return (
    <button disabled={disabled} className={`rounded-md py-2 px-3 hover:bg-gray-300 bg-gray-100 text-center text-sm font-semibold mt-1 md:mt-0 ${className}`} onClick={onClick}>{label}</button>
  )
}

export default BtnSecondary;