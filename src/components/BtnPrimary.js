const BtnPrimary = ({ className, onClick, label, disabled }) => {
  return (
    <button disabled={disabled} className={`rounded-md py-2 px-3 hover:bg-blue-700 bg-blue-600 text-white text-center text-sm mt-1 md:mt-0 ${className}`} onClick={onClick}>{label}
    </button>
  )
}

export default BtnPrimary;