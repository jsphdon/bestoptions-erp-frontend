// sampleData.js

import TabOneContent from "../components/DashboardTabContents/TabOneContent";
import TabTwoContent from "../components/DashboardTabContents/TabTwoContent";
import TabThreeContent from "../components/DashboardTabContents/TabThreeContent";

export const monthData = [
  { date: '30/10/2024', description: 'Invoice for October 2024', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
  { date: '31/11/2024', description: 'Invoice for November 2024', amount: 'AED 800', invoice: 'PDF', view: 'View' },
  { date: '30/12/2024', description: 'Invoice for December 2024', amount: 'AED 2,800', invoice: 'PDF', view: 'View' }
];

export const yearData = [
  { date: '30/10/2020', description: 'Invoice for 2020', amount: 'AED 50,800', invoice: 'PDF', view: 'View' },
  { date: '31/11/2021', description: 'Invoice for 2021', amount: 'AED 80,800', invoice: 'PDF', view: 'View' },
  { date: '30/12/2022', description: 'Invoice for 2022', amount: 'AED 100,800', invoice: 'PDF', view: 'View' }
];

export const allTimeData = [
  { date: '30/10/2020', description: 'Invoice for October 2020', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
  { date: '31/11/2021', description: 'Invoice for November 2021', amount: 'AED 800', invoice: 'PDF', view: 'View' },
  { date: '30/12/2022', description: 'Invoice for December 2022', amount: 'AED 2,800', invoice: 'PDF', view: 'View' },
  { date: '30/10/2024', description: 'Invoice for October 2024', amount: 'AED 1,800', invoice: 'PDF', view: 'View' },
  { date: '31/11/2024', description: 'Invoice for November 2024', amount: 'AED 800', invoice: 'PDF', view: 'View' },
  { date: '30/12/2024', description: 'Invoice for December 2024', amount: 'AED 2,800', invoice: 'PDF', view: 'View' }
];

export const data = [
  { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
  { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
  { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
  { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
  { item: 'INV-256', productId: 'Joseph', dateAdded: '01/06/2024', price: 'AED 1,800', status: 'PAID', qty: '100' },
];

export const months = [
  { value: 'january', label: 'January' },
  { value: 'february', label: 'February' },
  { value: 'march', label: 'March' },
  { value: 'april', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'june', label: 'June' },
  { value: 'july', label: 'July' },
  { value: 'august', label: 'August' },
  { value: 'september', label: 'September' },
  { value: 'october', label: 'October' },
  { value: 'november', label: 'November' },
  { value: 'december', label: 'December' },
];

export const years = [
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
  { value: '2026', label: '2026' },
  { value: '2027', label: '2027' },
  { value: '2028', label: '2028' },
  { value: '2029', label: '2029' },
  { value: '2030', label: '2030' },
  { value: '2031', label: '2031' },
  { value: '2032', label: '2032' },
  { value: '2033', label: '2033' },
  { value: '2034', label: '2034' },
  { value: '2035', label: '2035' },
];

export const countries = [
  { value: 'uganda', label: 'Uganda' },
  { value: 'uae', label: 'United Arab Emirates' },
  { value: 'philippines', label: 'Philippines' },
];

export const timezones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'America/New_York', label: 'America/New_York' },
  { value: 'America/Los_Angeles', label: 'America/Los_Angeles' },
  { value: 'Europe/London', label: 'Europe/London' },
  { value: 'Africa/Kampala', label: 'Africa/Kampala (Uganda)' },
  { value: 'Asia/Dubai', label: 'Asia/Dubai (UAE)' },
  { value: 'Asia/Manila', label: 'Asia/Manila (Philippines)' },
];

export const languages = [
  { value: 'ar', label: 'Arabic' },
  { value: 'ug', label: 'Uganda' },
  { value: 'tl', label: 'Tagalog' },
  { value: 'en', label: 'English' },
  { value: 'ja', label: 'Japanese' }
];


export const currencies = [
  { value: 'AED', label: 'AED - United Arab Emirates Dirham' },
  { value: 'PHP', label: 'PHP - Philippine Peso' },
  { value: 'UGX', label: 'UGX - Ugandan Shilling' },
  { value: 'USD', label: 'USD - United States Dollar' },
  { value: 'JPY', label: 'JPY - Japanese Yen' },
];


export const logsData = [
  { location: 'location 1', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '2 mins ago' },
  { location: 'location 2', status: 'ERR', device: 'Chrome - Windows', ip: '236.125.56.78', time: '10 mins ago' },
  { location: 'location 3', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '20 mins ago' },
  { location: 'location 4', status: 'WRN', device: 'Chrome - Windows', ip: '236.125.56.78', time: '30 mins ago' },
  { location: 'location 5', status: 'OK', device: 'Chrome - Windows', ip: '236.125.56.78', time: '40 mins ago' },
];

export const hours = [
  { value: 1, label: '1 Hours' },
  { value: 6, label: '6 Hours' },
  { value: 12, label: '12 Hours' },
  { value: 24, label: '24 Hours' },
];

export const transactStatus = [
  { value: "paid", label: 'Paid' },
  { value: "unpaid", label: 'Unpaid' },
  { value: "pending", label: 'Pending' },
];

export const categories = [
  { value: "categoryA", label: 'Category A' },
  { value: "categoryB", label: 'Category B' },
];

export const dashboardDataFirst = [
  { id: '#XGY-346', created: '1 hour ago', customer: 'Joseph', total: 'AED 1,800', profit: 'AED 400', status: 'Pending' },
  { id: '#XGY-347', created: '2 hours ago', customer: 'Samantha', total: 'AED 2,400', profit: 'AED 600', status: 'Completed' },
  { id: '#XGY-348', created: '3 hours ago', customer: 'Michael', total: 'AED 3,000', profit: 'AED 700', status: 'Shipped' },
  { id: '#XGY-349', created: '4 hours ago', customer: 'Isabella', total: 'AED 1,200', profit: 'AED 300', status: 'Pending' },
  { id: '#XGY-350', created: '5 hours ago', customer: 'William', total: 'AED 2,800', profit: 'AED 500', status: 'Completed' },
  { id: '#XGY-351', created: '6 hours ago', customer: 'Olivia', total: 'AED 1,600', profit: 'AED 400', status: 'Shipped' }
];

export const tabContent = [
  { title: <div className="text-center font-semibold">VISA<br />30 Days</div>, content: <TabOneContent />, className: "tabs" },
  { title: <div className="text-center font-semibold">VISA<br />60 Days</div>, content: <TabTwoContent />, className: "tabs" },
  { title: <div className="text-center font-semibold">VISA<br />90 Days</div>, content: <TabThreeContent />, className: "tabs" }

];

export const transactionData = [
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
  { transcId: '#XGY-351', product: 'A2a', paymentProc: 'Wallet', date: '2024-07-06 05:00:00', desc: 'A2A Booking Payment', debit: 'AED', credit: '0.00', direct: '0.00', closingBal: '0.00', dueAmt: '3000.00', remark: 'A2A Booking Payment' },
]

export const depositData = [
  { transcId: '#XGY-351', deposited: 'A2a', credited: '0.00', fee: '10,000', paymentProc: 'Cash-in-Hand', date: '2024-07-06 05:00:00', status: 'Success' }
]

export const reportData = [
  { refId: 'B2BA2A_17177412312312', pnr: 'HX022I', a2a: 'DXB - SLL - DXB', passengers: 'Mr. Faruku SSebunya', date: 'June 07, 2024', price: '805' }
]