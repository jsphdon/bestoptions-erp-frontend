import DashboardCard from "../../components/DashboardCard"
import { depositData } from '../../sampleData/sampleData';

const Withdrawal = () => {
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
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Deposited</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Credited</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Fee</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Payment Processor</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Date & Time</th>
                  <th className="px-4 py-2 border-b-2 font-bold text-left text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {depositData.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.transcId}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.deposited}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.credited}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.fee} AED</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.paymentProc}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.date}</td>
                    <td className="px-4 py-2 text-black font-semibold text-left border-b border-dashed text-sm">{row.status}</td>
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

export default Withdrawal