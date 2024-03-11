
import Header from "../Components/Header";
import Table from "../Components/Table";
import Dropdown from "../Components/Dropdown";
import Dropdown2 from "../Components/Dropdown2";
import Constants from "../constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EditPage from "./EditPage";
 
const Home = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState([]); // Initialize state with data
  const [showEditPage, setShowEditPage] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data
  const [selectedCity, setSelectedCity] = useState(null); // State to store selected city
 
 
 
  useEffect(() => {
    // Fetch company data from the backend when the component mounts
    fetch('http://localhost:8081/test') // Adjust the URL as needed
      .then(response => response.json())
      .then(data => {
        // Transform the data to match the expected properties
        const transformedData = data.data.map(item => ({
          stateId:item.StateID,
          cityId: item.CityID,
          cityName: item.CityName,
          cityCode: item.CityCode,
          active: item.CreatedBy,  
          date:item.CreatedDate
        }));
        setCompanyData(transformedData);
       
       
      })
      .catch(error => console.error('Error fetching company data:', error));
  }, []);
 
 
  const handleSearch = () => {
    if (selectedCity) {
      const filtered = companyData.filter((item) => item.cityName === selectedCity);

      setFilteredData(filtered);
      // setCompanyData(filteredData)

    } else {
      setFilteredData([]);
    }
  };
 
  // Function to clear filters and reset to original data
  const handleClear = () => {
    setFilteredData([]);
    setSelectedCity(null);
  };  
 
  // Function to handle saving/updating company data
  const handleSave = (updatedData) => {
    const updatedCompanyData = companyData.map((row) =>
      row.cityId === updatedData.cityId ? updatedData : row
    );
 
    setCompanyData(updatedCompanyData);
    //  setShowEditPage(false);
 
  };
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleEditButtonClick = () => {
    if(selectedRow) {
      navigate(`/company/edit`, {state: {row: selectedRow}});
    }
     
  // const handleEditButtonClick = () => {
  //   setShowEditPage(true); // Show EditPage component when "Edit" button is clicked
  // };

}
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
        {/* <Table data={companyData} onSave={handleSave} /> */}
        {/* {showEditPage && 
          <EditPage onSave={handleSave} selectedRow={selectedRow} />
        } */}
        {showEditPage && 
        <EditPage handleSave={handleSave} />
      }
        <Table data={filteredData.length > 0 ? filteredData : companyData} onRowClick={handleRowClick}/>
      </div>
     
    </div>
  );
}
      
 
export default Home;
        