import { URL } from "../url";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import slugify from 'slugify';

import { NavLink,useLocation } from 'react-router-dom';
function customSlugifyWithUnderscore(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')  // Replace non-alphanumeric chars with underscore
    .replace(/^_+|_+$/g, '');      // Trim leading/trailing underscores
}

function filtersCategory(){
    const [categories, setCategories] = useState([]);
  const location = useLocation();

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
  return (
    <>
     <div className="fixed top-[116px] left-6 inline-flex w-fit z-50 ml-[110px]">
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