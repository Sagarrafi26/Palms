import React, { useState } from 'react';
 
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  return (
<div className="relative inline-block ">

<button

        type="button"
        onClick={toggleDropdown}
        className="flex w-[220px] justify-between rounded-md border border-gray-300 shadow-sm px-10 py-2   bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        aria-expanded={isOpen}
        aria-haspopup="true"
>
  
    <div className='justify-between '>ALL</div>
      
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
<div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex="-1">
<div className="py-1" role="none">
            
<a href="#" className=" block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Company A</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Company B</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Company C</a>
<form method="POST" action="#">
<button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                Company D
</button>
</form>
</div>
</div>
      )}
</div>
  );
};
 
export default Dropdown;