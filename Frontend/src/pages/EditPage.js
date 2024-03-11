import React, { useEffect, useState } from "react";
import Constants from "../constants/Constants";
import Header from "../Components/Header";

import { Link, useLocation, useNavigate } from "react-router-dom";

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    cityId: "",
    cityName: "",
    cityCode: "",
    stateId: "",
  });

  // Update state when selectedRow prop changes
  useEffect(() => {
    setCompanyData({
      cityId: location.state.row.cityId,
      cityName: location.state.row.cityName,
      cityCode: location.state.row.cityCode,
      stateId: location.state.row.stateId,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };
  // const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setCompanyData((prevData) => ({
  //         ...prevData,
  //         [name]: value
  //     }));
  // };

  console.log("CompanyData -->", companyData);
  const handleSubmit = async () => {
   
    try {
      const response = await fetch("http://localhost:8081/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });
      if (response.ok) {
        // If the data was successfully saved, reload the page to fetch updated data
        navigate.push("/");
      } else {
        // Handle error response
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <Header pageTitle={Constants.EDIT_PAGE} />
      <form onSubmit={handleSubmit}>
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
          {/* <div
                        onClick={() => setIsToggled(!isToggled)}
                        className={classNames('flex  w-20 h-10 bg-gray-600 m-0 my-0 rounded-full', {
                            'bg-green-500': isToggled,
                        })}>
                        <span className={classNames('h-10 w-10 bg-white rounded-full', {
                            "ml-10": isToggled,
                        })} />
                    </div>
                    <div>
                        DEACTIVE
                    </div> */}
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
            <Link to="/">
              <button type="submit">{Constants.SAVE}</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
