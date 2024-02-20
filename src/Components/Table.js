import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr >
            <th className=" border px-4 py-2">
                <select><option value="">Select</option></select></th>
            <th className=" border px-4 py-2"><select><option value="">ID</option></select></th>
            <th className=" border px-4 py-2"><select><option value="">Company Name</option></select></th>
            <th className=" border px-4 py-2"><select><option value="">Company Code </option></select></th>
            <th className="border px-4 py-2"><select><option value="">Active Status</option></select></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.companyName}</td>
              <td className="border px-4 py-2">{row.companyCode}</td>
              <td className="border px-4 py-2">{row.active ? 'Active' : 'Inactive'}</td>
              {/* <td className="border px-4 py-2">
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option value="">{row.id}</option>
                  {/* Add options dynamically if needed */}
                {/* </select>
              </td>
              <td className="border px-4 py-2">
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option value="">{row.companyName}</option>
                  {/* Add options dynamically if needed */}
                {/* </select>
              </td>
              <td className="border px-4 py-2">
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option value="">{row.companyCode}</option> */}
                  {/* Add options dynamically if needed */}
                {/* </select>
              </td>
              <td className="border px-4 py-2">
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option value="">{row.active ? 'Active' : 'Inactive'}</option>
                  {/* Add options dynamically if needed */}
                
              {/* </td> */}
      

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
