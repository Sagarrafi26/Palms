
import React, { useState, useEffect, useRef } from 'react';


const Table = ({data,onRowClick }) => {
  

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    if (selectedRow && selectedRow.cityId === row.cityId) {
      // If the clicked row is already selected, unselect it
      setSelectedRow(null);
      onRowClick(null);
    } else {
      // Otherwise, select the clicked row
      setSelectedRow(row);
      onRowClick(row);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Select</th>
            <th className="border px-4 py-2">StateID</th>
            <th className="border px-4 py-2">CityID</th>
            <th className="border px-4 py-2">CityName</th>
            <th className="border px-4 py-2">CityCode</th>
            <th className="border px-4 py-2">CreatedBy</th>
            <th className="border px-4 py-2">CreatedDate</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((row) => (
            <tr key={row.cityId} className={selectedRow && selectedRow.cityId === row.cityId ? 'bg-blue-200' : ''} onClick={() => handleRowClick(row)}>
              <td className="border px-4 py-2">
                <input
                  type="radio"
                  name="selectedRow"
                  checked={selectedRow && selectedRow.cityId === row.cityId}
                  onChange={() => {}}
                />
              </td>
              <td className="border px-4 py-2">{row.stateId}</td>
              <td className="border px-4 py-2">{row.cityId}</td>
              <td className="border px-4 py-2">{row.cityName}</td>
              <td className="border px-4 py-2">{row.cityCode}</td>
              <td className="border px-4 py-2">{row.active}</td>
              <td className="border px-4 py-2">{row.date}</td>
              {/* {Object.values(row).map((value, i) => (
                <td key={i} className="border px-4 py-2">{value}</td>
              ))}
              */}

            

              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Table;
 