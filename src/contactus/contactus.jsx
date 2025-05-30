import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import TextField from '@mui/material/TextField';
import Image from '../assets/Images/about/Main_Image.png';

import { URL } from "../url";

const contactus = () => {
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleContact = async () => {
  
        if (!name || !mobilenumber || !emailaddress || !message) {
            setResponseMessage('All fields are required.');
            return;
          }

      const payload = {
        name: name,
        mobilenumber: mobilenumber, // Convert mobile number to an integer
        emailaddress: emailaddress,
        message: message,
      };
  
      try {
        
        const response = await fetch(`${URL}/contact_us/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        const data = await response.json();

        if (response.ok) {
          if (data.response === 'success') {
            setResponseMessage('Message sent successfully.');
          }
        } else {
          if (data.detail && data.detail.length > 0) {
            const errors = data.detail.map((error) => {
              if (error.loc.includes('emailaddress')) {
                return `Email Error: ${error.msg}`;
              } else if (error.loc.includes('mobilenumber')) {
                return `Mobile Number Error: ${error.msg}`;
              }
              return `Error: ${error.msg}`;
            });
            setResponseMessage(errors.join(' '));
          } else {
            setResponseMessage('An unknown error occurred.');
          }
        }
      } catch (error) {
        console.error('Error:', error);
        setResponseMessage('Network error or server is unreachable.');
      }
    };

  return (
    <>
   <Navbar/>
   <div>
   <main className="w-full h-[500px]  flex px-[5%]">
   
    <div className="w-[50%] flex flex-col justify-center">
    <div className="pr-[10px]  ">
      {/* <div  className="flex text-[30px] font-extrabold justify-center items-center pb-5">
        <h1 className="blue-color ">Get in Touch With Us</h1>
      </div> */}
    <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-[20px]  rounded-[28px] shadow-lg p-7 pb-5 border-solid border-[1px] bg-[#245FB1]">
<h1 className=" text-white text-[25px] ml-8 font-bold justify-center items-center ">Get in Touch With Us</h1>
<div className="flex gap-[5px] mb-2"> 

<TextField 
                    id="Name"
                    label="Name"
                    variant="outlined"
                    type="text"
                  
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      style: {
                    
                        width: "325px",
                        height: "50px",
                       
                        borderRadius: "10px",
                        backgroundColor:"white",
                        
                      },
                      autoComplete: "off",
                    }}
         InputLabelProps={{
    shrink: name ? true : false, // Label will float when input has value
    style: {
      color: name ? 'white' : 'black', // Floating label color changes to white
      fontSize: '14px', // Font size for the label
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: name ? '-10px' : '10%', // Move label above when input has value
      left: name ? '10px' : '12px', // Adjust left position for floating label
      transform: name ? 'translateY(-50%)' : 'translateY(50%)', // Adjust for floating effect
      fontWeight: name ? 'semibold' : 'normal', // Bold label when floating
    },
  }}
                  />
                  {/* <TextField
                    id="LastName"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    required
                    
                  
                    InputProps={{
                      style: {
                    
                        width: "160px",
                        height: "50px",
                       
                        borderRadius: "10px",
                        backgroundColor:"white",
                        
                      },
                      autoComplete: "off",
                    }}
         
                  /> */}


  </div>
  <div className="mb-2">
  <TextField
                          id="email"
                          label="Email"
                          value={emailaddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                        
                          variant="outlined"
                     
                          required
                          InputLabelProps={{
    shrink: emailaddress ? true : false, // Label will float when input has value
    style: {
      color: emailaddress ? 'white' : 'black', // Floating label color changes to white
      fontSize: '14px', // Font size for the label
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: emailaddress ? '-10px' : '10%', // Move label above when input has value
      left: emailaddress ? '10px' : '12px', // Adjust left position for floating label
      transform: emailaddress ? 'translateY(-50%)' : 'translateY(50%)', // Adjust for floating effect
      fontWeight: emailaddress ? 'semibold' : 'normal', // Bold label when floating
    },
  }}
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              gap:"5px"
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                               <img src="src\assets\Images\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
  </div>
  <div className="mb-2">
  <TextField
                          id="Mobile"
                          label="Mobile"
                          
                          value={mobilenumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          variant="outlined"
                          required
                          InputLabelProps={{
    shrink: mobilenumber ? true : false, // Label will float when input has value
    style: {
      color: mobilenumber ? 'white' : 'black', // Floating label color changes to white
      fontSize: '14px', // Font size for the label
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: mobilenumber ? '-10px' : '10%', // Move label above when input has value
      left: mobilenumber ? '10px' : '12px', // Adjust left position for floating label
      transform: mobilenumber ? 'translateY(-50%)' : 'translateY(50%)', // Adjust for floating effect
      fontWeight: mobilenumber ? 'semibold' : 'normal', // Bold label when floating
    },
  }}
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              gap:"5px"
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                               <img src="src\assets\Images\signup\iphone.png" alt="" className="w-[20px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
  </div>
  <div>
  <TextField
                          id=""
                          label="Your Message"
                          value={message}
                         onChange={(e) => setMessage(e.target.value)}
                        
                          variant="outlined"
                          required
                          InputLabelProps={{
    shrink: message ? true : false, // Label will float when input has value
    style: {
      color: message ? 'white' : 'black', // Floating label color changes to white
      fontSize: '14px', // Font size for the label
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: message ? '-10px' : '10%', // Move label above when input has value
      left: message ? '10px' : '12px', // Adjust left position for floating label
      transform: message ? 'translateY(-50%)' : 'translateY(50%)', // Adjust for floating effect
      fontWeight: message ? 'semibold' : 'normal', // Bold label when floating
    },
  }}
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
  </div>


  <div className="flex justify-center ">
    <button className="w-28  items-center p-2 font-bold bg-white  inline-block text-[#245FB1]  rounded-full" onClick={handleContact}>Send</button>
  </div>
  {responseMessage && <div className=" text-white">{responseMessage}</div>}

  </div>
    </div>
    </div>
    </div>
    <div className="w-[50%] flex justify-end items-center">
  
            <img src={Image} alt="News Image" className="max-w-[525px]" />

</div>
   </main>
   </div>

    </>
  
  );
};

export default contactus;
