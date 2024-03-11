

import React, { useState, useEffect } from 'react';

const Dropdown = ({ selectedCity,setSelectedCity}) => {
  const [isOpen, setIsOpen] = useState(false);
  //  const [selectedCity, setSelectedCity] = useState();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch city data from the backend when the component mounts
    fetch('http://localhost:8081/test') // Adjust the URL as needed
      .then(response => response.json())
      .then(data => {
        // Transform the data to extract city names
        const cityNames = data.data.map(item => item.CityName);
        setCities(cityNames);
      })
      .catch(error => console.error('Error fetching city data:', error));
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    toggleDropdown(); // Close dropdown after selection
    
  };
  useEffect(() => {
    console.log(selectedCity); // Log the selected city after it's updated
  }, [selectedCity]);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex w-[220px] justify-between rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="justify-between">{selectedCity || "Select City"}</div>
        {/* <div className="justify-between">Select City</div> */}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56  max-h-[200px] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {cities.map((city, index) => (
              <button
                key={index}
                type="button"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
