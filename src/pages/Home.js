import Header from "../Components/Header";
import Table from "../Components/Table";
import Dropdown from "../Components/Dropdown";
import Dropdown2 from "../Components/Dropdown2";
import Constants from "../constants/Constants";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EditPage from "./EditPage";

const Home = () => {
  const [companyData, setCompanyData] = useState([]); // Initialize state with data
  const [showEditPage, setShowEditPage] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    // Fetch company data from the backend when the component mounts
    fetch('http://localhost:8081/test') // Adjust the URL as needed
      .then(response => response.json())
      .then(data => {
        // Transform the data to match the expected properties
        const transformedData = data.data.map(item => ({
          id: item.CityID,
          companyName: item.CityName,
          companyCode: item.CityCode,
          active: item.CreatedBy !== null // Example condition for active status
        }));
        setCompanyData(transformedData);
      })
      .catch(error => console.error('Error fetching company data:', error));
  }, []);


  

  // Function to handle saving/updating company data
  const handleSave = (updatedData) => {
    const updatedCompanyData = companyData.map((row) =>
      row.id === updatedData.id ? updatedData : row
    );

    setCompanyData(updatedCompanyData);

    setShowEditPage(false);
  };
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowEditPage(true);
  };

  return (
    <div className="Home">
      <Header pageTitle={Constants.COMPANY_MASTER} />

      <div className="flex w-[100%]   py-2">
        <div className=" flex justify-center  ">
          <p className="w-[100%] py-2"> {Constants.COMPANY_NAME} </p>
          <div className=" mx-4 rounded-1-md px-5 py-0 flex me-7 ">
            <Dropdown />
          </div>
        </div>
        <div className=" flex ">
          <p className="w-[100%] py-2"> {Constants.ACTIVE_STATUS} </p>
          <div className="  w-[100%] rounded-1-md px-5 py-0  justify-end">
            <Dropdown2 />
          </div>
        </div>
        <div className="flex  w-[220px]  justify-center  cursor-pointer  mx-20 py-3  rounded-md bg-gray-400 ">
          <button>{Constants.SEARCH}</button>
        </div>
        <div className="flex w-[220px]  justify-center  cursor-pointer    rounded-md bg-gray-400 ">
          <button>{Constants.CLEAR}</button>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="flex text-end justify-end  py-3">
        <div className="flex  w-[220px]  justify-center  cursor-pointer  mx-20 py-3   rounded-md bg-gray-400 ">
          <Link to="/company/add">
            <button>{Constants.ADD}</button>
          </Link>
        </div>
        <div className="flex w-[220px]  justify-center   cursor-pointer   mx-[2px] py-2  rounded-md bg-gray-400 ">
          <Link to="/company/edit">
            <button>{Constants.EDIT}</button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto pt-8">
        {/* <Table data={companyData} onSave={handleSave} /> */}
        {showEditPage ? (
          <EditPage onSave={handleSave} selectedRow={selectedRow} />
        ) : (
          <Table data={companyData} onRowClick={handleRowClick} />)}
      </div>
    </div>
  );
}

export default Home;
