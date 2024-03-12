import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Constants from "../constants/Constants";
import Header from "../Components/Header";

export const Addpage = () => {
  const [cityName, setCityName] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [stateId, setStateId] = useState("");
  
  const navigate = useNavigate();

  const handleSave = async () => {
  
    // Prepare the data to send to the backend
    const newData = {
      cityName: cityName,
      cityCode: cityCode,
      stateId: stateId,
    };
    console.log(newData);
    try {
      // Send a POST request to your backend server to save the new data
      const response = await fetch("http://localhost:8081/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
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
      <Header pageTitle={Constants.ADD_PAGE} />
      <div className="flex py-5">
        <div className=" flex  ">
          <p className="w-[100%]"> {Constants.COMPANY_NAME} </p>

          <label>
            <input
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="mx-6  border-2 rounded-md px-5 py-0 flex"
            />
          </label>
        </div>
        
        <div className=" flex  ">
          <p className=""> {Constants.COMPANY_CODE} </p>
          <label>
            <input
              type="text"
              value={cityCode}
              onChange={(e) => setCityCode(e.target.value)}
              className="mx-6  border-2 rounded-md px-5 py-0 flex items-start"
            />
          </label>
        </div>

        <div className=" flex  ">
          <p className="my-0"> {Constants.COMPANY_STATEID} </p>
          <label>
            <input
              type="text"
              value={stateId}
              onChange={(e) => setStateId(e.target.value)}
              className="mx-6 my-0  border-2 rounded-md px-5 py-0 flex"
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
          <Link to="/">
          <button onClick={handleSave}>{Constants.SAVE}</button>
          </Link>
        </div>
      </div>

    </div>
  );
};
