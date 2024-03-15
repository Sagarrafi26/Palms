import React, { useState } from 'react';

function formatISODate(isoDateString) {
  if (!isoDateString) return ''; // Handle empty input

  const date = new Date(isoDateString);
  if (isNaN(date.getTime())) {
      return ''; // Handle invalid date strings
  }

  // Format the date
  const formattedDate = `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;

  // Format the time
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Combine date and time
  return `${formattedDate} ${formattedTime}`;
}



const Table = ({ data, onRowClick }) => {
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
            <th className="border px-4 py-2">State Name</th>
          
            <th className="border px-4 py-2">City Name</th>
            <th className="border px-4 py-2">City Code</th>
          
            <th className="border px-4 py-2">Created Date</th>
          
          </tr>
        </thead>
        <tbody>
          {data && data.map((row) => (
            <tr key={row.cityName} className={selectedRow && selectedRow.cityName === row.cityName ? 'bg-blue-200' : ''} onClick={() => handleRowClick(row)}>
              <td className="border px-4 py-2">
                <input
                  type="radio"
                  name="selectedRow"
                  checked={selectedRow && selectedRow.cityName === row.cityName}
                  onChange={() => {}}
                />
              </td>
              <td className="border px-4 py-2 text-center">{row.stateName}</td>
             
              <td className="border px-4 py-2 text-center">{row.cityName}</td>
              <td className="border px-4 py-2 text-center">{row.cityCode}</td>
             
              <td className="border px-4 py-2 text-center">{formatISODate(row.createdDate)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
