import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Constants from "../constants/Constants";
import Header from "../Components/Header";

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to store company data
  const [companyData, setCompanyData] = useState({
    cityId: "",
    cityName: "",
    cityCode: "",
    stateId: "",
  });

  // Update state when selectedRow prop changes
  useEffect(() => {
    if (location.state && location.state.row) {
      setCompanyData({
        cityId: location.state.row.cityId,
        cityName: location.state.row.cityName,
        cityCode: location.state.row.cityCode,
        stateId: location.state.row.stateId,
      });
    }
  }, [location.state]);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(companyData);
      const response = await fetch("http://localhost:8081/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <Header pageTitle={Constants.EDIT_PAGE} />
      <form>
      <div className="flex py-5">
        <div className=" flex  ">
          <p className="w-[100%]"> {Constants.COMPANY_NAME} </p>
          <label>
            <input
              type="text"
              name="cityName"
              value={companyData.cityName}
              onChange={handleInputChange}
              className="mx-6  border-2 rounded-md px-5 py-0 flex"
            />
          </label>
        </div>

        <div className=" flex  ">
          <p className="w-[100%]"> {Constants.COMPANY_CODE} </p>
          <label>
            <input
              type="text"
              name="cityCode"
              value={companyData.cityCode}
              onChange={handleInputChange}
              className="mx-6  border-2 rounded-md px-5 py-0 flex"
            />
          </label>
        </div>

        <div className=" flex  ">
          <p className="w-[100%]"> {Constants.COMPANY_STATEID} </p>
          <label>
            <input
              type="text"
              name="stateId"
              value={companyData.stateId}
              onChange={handleInputChange}
              className="mx-6  border-2 rounded-md px-5 py-0 flex"
            />
          </label>
        </div>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="flex  justify-between  py-3">
        <div className="flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative  py-3   rounded-md bg-gray-400 ">
          <Link to="/">
            <button>{Constants.BACK}</button>
          </Link>
        </div>

        <div className="flex  w-1/6  justify-center   cursor-pointer main-w-[200%] relative  py-3   rounded-md bg-gray-400 ">
          <button onClick={handleSubmit}>{Constants.SAVE}</button>
        </div>
      </div>
      
      </form>
    </div>
  );
};

export default EditPage;
