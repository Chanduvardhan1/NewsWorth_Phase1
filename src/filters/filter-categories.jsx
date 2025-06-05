import { URL } from "../url";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink,useLocation } from 'react-router-dom';

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
      <h1 className="mt-20">Filters</h1>
       {Array.isArray(categories) &&
  categories.map((cat, index) => {
    const name =
      typeof cat === "string"
        ? cat
        : cat.category_name || `Category ${index + 1}`; // <-- use category_name here
    const path = `/${name.toLowerCase().replace(/\s+/g, "")}`;

    return (
      <NavLink
        key={index}
        to={path}
        className="p-2 bg-gray-100 rounded hover:bg-gray-200 shadow-md"
      >
        {name}
      </NavLink>
    );
  })}

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