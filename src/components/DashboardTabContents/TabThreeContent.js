import { dashboardDataFirst } from '../../sampleData/sampleData'

// Change the name of the component according to the tabs indicated on Dashboard.js
const TabThreeContent = () => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-gray-500 uppercase">
          <th className="px-4 py-2 border-b border-dashed font-bold text-left">Order ID</th>
          <th className="px-4 py-2 border-b border-dashed font-bold text-center">Customer</th>
          <th className="px-4 py-2 border-b border-dashed font-bold text-center">Total</th>
          <th className="px-4 py-2 border-b border-dashed font-bold text-center">Profit</th>
          <th className="px-4 py-2 border-b border-dashed font-bold text-right">Status</th>
        </tr>
      </thead>
      <tbody>
        {dashboardDataFirst.map((row) => (
          <tr key={row.id}>
            <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.id}</td>
            <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm">{row.customer}</td>
            <td className="px-4 py-2 text-gray-500 font-semibold text-center border-b border-dashed text-sm">{row.total}</td>
            <td className="px-4 py-2 text-black font-semibold text-center border-b border-dashed text-sm">{row.profit}</td>
            <td className="px-4 py-2 text-gray-500 font-semibold text-right border-b border-dashed text-sm">{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TabThreeContent;