import { URL } from "../url";
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import slugify from 'slugify';
import { useNavigate } from "react-router-dom";

import { NavLink,useLocation } from 'react-router-dom';
function customSlugifyWithUnderscore(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')  // Replace non-alphanumeric chars with underscore
    .replace(/^_+|_+$/g, '');      // Trim leading/trailing underscores
}

function filtersCategory(){
  const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
  const location = useLocation();
  const authToken = localStorage.getItem('authToken') || null;
 const [searchQuery, setSearchQuery] = useState('');

 

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${URL}/content_catgories`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (accessToken) {
      fetchCategories();
    }
  }, []);

  // ✅ Log only when categories change
  useEffect(() => {
    console.log("Fetched categories:", categories);
  }, [categories]);

  // ✅ Debug mount behavior
  useEffect(() => {
    console.log("FiltersCategory component mounted");
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    
  
    try {
      const response = await fetch(`${URL}/search_content?query=${encodeURIComponent(searchQuery)}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: '',
      });
  
      if (!response.ok) {
        throw new Error('Search request failed');
      }
  
      const data = await response.json();
      
      
      if (data.response === "fail") {
        navigate('/search', { state: {noDataMessage: data.response_message } });
      } else {
        navigate('/search', { state: { videoData: data.response_message, ImageData: data.response_message, cardData: data.response_message } });
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };  


  return (
    <>
     <div className="fixed top-[116px] left-6 inline-flex w-fit z-50 ml-[27px]">
  {Array.isArray(categories) &&
    categories.map((cat, index) => {
      const name =
        typeof cat === "string"
          ? cat
          : cat.category_name || `Category ${index + 1}`;
      const path = `/${customSlugifyWithUnderscore(name)}`;

      return (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `px-2 py-2 text-sm font-medium text-white transition-all duration-200
            ${isActive ? 'bg-[#CF1B58]' : 'bg-[#2c2c2c] hover:bg-gray-700'}`
          }
        >
          {name}
        </NavLink>
      );
    })} 
</div>
  <div className="fixed top-[115px] right-6 z-50 ">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-4 h-4  dark:text-gray-400 text-white" /> {/* Lucide Search Icon */}
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          id="default-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[180px] p-2 pl-10  text-sm bg-[#2c2c2c] text-white border border-gray-300   focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </form>
    </div>
  </div>



       

      {/* Debugging: show raw categories JSON */}
      {/* <div className="mt-8 w-full">
        <h2>Debug: Raw categories JSON</h2>
        <pre className="bg-gray-100 p-4 rounded max-h-60 overflow-auto">
          {JSON.stringify(categories, null, 2)}
        </pre>
      </div> */}
    </>
  );
}

export default filtersCategory;