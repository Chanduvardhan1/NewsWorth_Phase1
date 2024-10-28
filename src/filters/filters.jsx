import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const filters = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current route
  const [activePage, setActivePage] = useState(""); // Track the active page

  // Update activePage when location changes
  useEffect(() => {
    setActivePage(location.pathname); // Update active page based on the current path
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected path
  };

  return (
    <>
      <div className="w-full py-[10px] fixed bg-white z-10 top-[63px] px-[20px]">
        <div className="flex space-x-4   mb-6">

      
        <p
          onClick={() => handleNavigation("/dashboard")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/dashboard" ? "font-bold" : ""
          }`}
        >
          Home
        </p>
        <p
        //   onClick={() => handleNavigation("/general")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/#" ? "font-bold" : ""
          }`}
        >
          General News
        </p>
        <p
          // onClick={() => handleNavigation("/images")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/images" ? "font-bold" : ""
          }`}
        >
          Images
        </p>
        <p
          // onClick={() => handleNavigation("/audio")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/audio" ? "font-bold" : ""
          }`}
        >
          Audio
        </p>
        <p
        //   onClick={() => handleNavigation("/entertainment")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/entertainment" ? "font-bold" : ""
          }`}
        >
          Entertainment
        </p>
        <p
        //   onClick={() => handleNavigation("/sports")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/sports" ? "font-bold" : ""
          }`}
        >
          Sports
        </p>
        <p
        //   onClick={() => handleNavigation("/business")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/business" ? "font-bold" : ""
          }`}
        >
          Business
        </p>
        <p
        //   onClick={() => handleNavigation("/health")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/health" ? "font-bold" : ""
          }`}
        >
          Health
        </p>
        <p
        //   onClick={() => handleNavigation("/educational")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/educational" ? "font-bold" : ""
          }`}
        >
          Educational
        </p>
        {/* <p
        //   onClick={() => handleNavigation("/wildlife")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/wildlife" ? "font-bold" : ""
          }`}
        >
          Wildlife
        </p> */}
        <p
        //   onClick={() => handleNavigation("/fashion")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/fashion" ? "font-bold" : ""
          }`}
        >
          Fashion
        </p>
        <p
        //   onClick={() => handleNavigation("/fashion")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/fashion" ? "font-bold" : ""
          }`}
        >
          Location
        </p>
        <p
          onClick={() => handleNavigation("/mycontent")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/mycontent" ? "font-bold" : ""
          }`}
        >
          My Content
        </p>
        <p
        //   onClick={() => handleNavigation("/fashion")}
          className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg ${
            activePage === "/fashion" ? "font-bold" : ""
          }`}
        >
          Book Mark
        </p>
        </div>
      </div>
    </>
  );
};

export default filters;
