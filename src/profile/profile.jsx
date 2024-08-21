import React, { useState,useEffect } from "react";
import logo from "../../images/home/NewsWorth.png"
import Navbar from "../Navbar/navbar";
import home from '../../images/home/NW-image.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const profile = () => {
    const [address, setAddress] = useState({});

   
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setAddress(data.address);
          })
          .catch((error) => console.error("Error fetching address:", error));
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return (
    <div>
           <p>Pincode: {address.postcode || 'Not available'}</p>
      <p>City: {address.city || 'Not available'}</p>
           <p>district: {address.state_district || 'Not available'}</p>
           <p>state: {address.state || 'Not available'}</p>



      <p>Country: {address.country || 'Not available'}</p>
    </div>
  );
};


export default profile;
