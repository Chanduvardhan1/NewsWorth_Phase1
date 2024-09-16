import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import TextField from '@mui/material/TextField';
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
   <main className="w-full h-[500px]  flex px-10">
   
    <div className="w-[50%]">
    <div className="pr-[10px] ">
      <div  className="flex text-[30px] font-extrabold justify-center items-center pb-5">
        <h1 className="blue-color ">Get in Touch With Us</h1>
      </div>
    <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-[20px]  rounded-[28px] shadow-lg p-7 pb-5 border-solid border-[1px]">

<div className="flex gap-[5px] "> 

<TextField
                    id="First Name"
                    label="First Name"
                    variant="outlined"
                    type="text"
                  
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      style: {
                    
                        width: "160px",
                        height: "50px",
                       
                        borderRadius: "10px",
                        backgroundColor:"white",
                        
                      },
                      autoComplete: "off",
                    }}
         
                  />
                  <TextField
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
         
                  />


  </div>
  <div>
  <TextField
                          id="email"
                          label="Email"
                          value={emailaddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                        
                          variant="outlined"
                     
                          required
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
  <div>
  <TextField
                          id="Mobile"
                          label="Mobile"
                          
                          value={mobilenumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          variant="outlined"
                          required
                          
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


  <div className="flex justify-end ">
    <button className="primary-btn" onClick={handleContact}>Send</button>
  </div>
  {responseMessage && <div className=" text-red-500">{responseMessage}</div>}

  </div>
    </div>
    </div>
    </div>
    <div className="w-[50%] flex justify-center items-center">
  
  <img src={home} alt="" width={500}  height={500}/>

</div>
   </main>
   </div>

    </>
  
  );
};

export default contactus;
