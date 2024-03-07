import React, { useState, useEffect, useRef } from 'react';




const Table = ({data }) => {
  

  const [selectedRow, setSelectedRow] = useState(null);

  const tableRef = useRef(null);
 
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onRowClick = (row) => {
    setSelectedRow(row === selectedRow ? null : row);
  };

  return (
    <div className="overflow-x-auto" ref={tableRef}>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">StateID</th>
            <th className="border px-4 py-2">CityID</th>
            <th className="border px-4 py-2">CityName</th>
            <th className="border px-4 py-2">CityCode</th>
            <th className="border px-4 py-2">CreatedBy</th>
            <th className="border px-4 py-2">CreatedDate</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, index) => (
            <tr key={index} className={selectedRow === row ? 'bg-blue-200' : ''} onClick={() => onRowClick(row)}>
              <td className="border px-4 py-2">
               {row.stateId}
              </td>
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
