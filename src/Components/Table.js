import React, { useState, useEffect, useRef } from 'react';
import data from '../db.json';



const Table = ({ data  }) => {
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

  const handleRowClick = (row) => {
    setSelectedRow(row === selectedRow ? null : row);
  };

  return (
    <div className="overflow-x-auto" ref={tableRef}>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Select</th>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Company Name</th>
            <th className="border px-4 py-2">Company Code</th>
            <th className="border px-4 py-2">Active Status</th>
           
            
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, index) => (
            <tr key={index} className={selectedRow === row ? 'bg-blue-200' : ''} onClick={() => handleRowClick(row)}>
              <td className="border px-4 py-2">
               
              </td>
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.companyName}</td>
              <td className="border px-4 py-2">{row.companyCode}</td>
              <td className="border px-4 py-2">{row.active}</td>
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
