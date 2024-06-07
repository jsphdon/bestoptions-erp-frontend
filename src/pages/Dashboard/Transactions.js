import DashboardCard from "../../components/DashboardCard"
import { transactionData } from '../../sampleData/sampleData';

const Transactions = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center my-12 px-8">
      <DashboardCard />
      <div className="flex flex-col py-4 px-7 border-slate-100 border w-full">
        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-500 uppercase">
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Transaction No.</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Product</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Payment Processor</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm min-w-[150px]">Date & Time</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Description</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Debit</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Credit</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Direct</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Closing Balance</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Due Amount</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Remark</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.transcId}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.product}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.paymentProc}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.date}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.desc}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.debit}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.credit} AED</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.direct} AED</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.closingBal} AED</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.dueAmt} AED</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.remark}</td>
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

export default Transactions