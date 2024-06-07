// YearTableComponent.js
const YearTableComponent = ({ data }) => {
  return (
    <>
      {data.map((row) => (
        <tr key={row.id}>
          <td className="min-w-[150px] pl-7 px-4 py-5 text-gray-500 text-left border-b">{row.date}</td>
          <td className="min-w-[250px] px-4 py-5 text-gray-500 text-left border-b">{row.description}</td>
          <td className="min-w-[150px] px-4 py-5 text-gray-500 text-center border-b">{row.amount}</td>
          <td className="min-w-[150px] px-4 py-5 text-gray-500 text-center border-b">
            <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center">
              {row.invoice}
            </button>
          </td>
          <td className="px-4 py-5 text-gray-500 text-center border-b">
            <button className="rounded-md py-2 px-4 hover:bg-gray-300 bg-gray-100 text-gray-600 text-center">
              {row.view}
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default YearTableComponent;
