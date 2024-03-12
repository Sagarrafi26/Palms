import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Table from "../Components/Table";
import Dropdown from "../Components/Dropdown";
import Dropdown2 from "../Components/Dropdown2";
import Constants from "../constants/Constants";

const Home = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {

    // API call to fetch data from backend
    fetch('http://localhost:8081/data')
      .then(response => response.json())
      .then(data => {
        const transformedData = data.data.map(item => ({
          stateId: item.StateID,
          cityId: item.CityID,
          cityName: item.CityName,
          cityCode: item.CityCode,
          createdBy: item.CreatedBy,
          createdDate: item.CreatedDate
        }));

        // Update state with transformed data
        setCompanyData(transformedData);
      })
      .catch(error => console.error('Error fetching company data:', error));
  }, []);

  // Function to filter data based on CityName
  const handleSearch = () => {
    if (selectedCity) {
      const filtered = companyData.filter((item) => item.cityName === selectedCity);
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  // Function to clear filters and reset to original data
  const handleClear = () => {
    setFilteredData([]);
    setSelectedCity(null);
  };  

  // Function to handle click on a row in the table
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  // Function to handle click on edit button
  const handleEditButtonClick = () => {
    if(selectedRow) {
      navigate(`/company/edit`, {state: {row: selectedRow}});
    }
  };

  return (
    <div className="Home">
      <Header pageTitle={Constants.COMPANY_MASTER} />

      <div className="flex w-[100%]   py-2 ">
        <div className=" flex justify-center  ">
          <p className="w-[100%] py-2 font-bold sm:font-light "> {Constants.COMPANY_NAME} </p>
          <div className=" mx-4 rounded-1-md px-5 py-0 flex me-7 ">
            <Dropdown cities={companyData.map((item) => item.cityName)} selectedCity={selectedCity} setSelectedCity={setSelectedCity}  />
          </div>
        </div>

        <div className=" flex ">
          <p className="w-[100%] py-2"> {Constants.ACTIVE_STATUS} </p>
          <div className="  w-[100%] rounded-1-md px-5 py-0  justify-end">
            <Dropdown2 />
          </div>
        </div>

        <div className="flex  w-[220px]  justify-center  cursor-pointer  mx-20 py-3  rounded-md bg-gray-400 ">
          <button onClick={handleSearch}>{Constants.SEARCH}</button>
        </div>

        <div className="flex w-[220px]  justify-center  cursor-pointer    rounded-md bg-gray-400 ">
          <button onClick={handleClear}>{Constants.CLEAR}</button>
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
          <button onClick={handleEditButtonClick}>{Constants.EDIT}</button>
        </div>
      </div>

      <div className="container mx-auto pt-8">
        <Table data={filteredData.length > 0 ? filteredData : companyData} onRowClick={handleRowClick}/>
      </div>

    </div>
  );
}

export default Home;