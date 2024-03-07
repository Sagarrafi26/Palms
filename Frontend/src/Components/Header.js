import React from "react";

const Header = ({ 
    pageTitle
}) => {
    return (
        <nav className="bg-white border-gray-500 shadow px-2 sm:px-4 py-5" id="navbar-header">
            <div className="text-[30px] text-start">
                <p className="text-sm text-black-500 sm:text-2xl font-medium">{pageTitle}</p>
            </div>
        </nav>
    );
};

export default Header;
