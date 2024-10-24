import { createContext, useContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Create the TimerContext
import x from "./assets/Images/dashboard/cross-button.png"
// import { useNavigate } from "react-router-dom";

const TimerContext = createContext();

// Custom hook to use the context
export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
// const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const handleGoToCart = () => {
    navigate("/cart"); // Navigate to the cart page
  }; // Store the remaining time
  useEffect(() => {
    let timer;
  
    if (timeLeft > 0) {
      // Decrease timer every second
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
  
      // Show a warning message when timeLeft is 30 seconds
      if (timeLeft === 60) {
        // toast.warn("Hurry up! Only 1 mint left.");
        setShowPopup(true);
      }
    } else if (timeLeft === 0) {
      // Handle timer expiration logic (redirect or alert)
      toast.error("Time is up! Redirecting to the dashboard.");
      window.location.href = "/dashboard"; // Redirect to dashboard
    }
  
    // Cleanup the timer
    return () => clearInterval(timer);
  }, [timeLeft]);
  
//   useEffect(() => {
//     let timer;

//     if (timeLeft > 0) {
//       // Decrease timer every second
//       timer = setInterval(() => {
//         setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//       }, 1000);
//     } else if (timeLeft === 0) {
//       // Handle timer expiration logic (redirect or alert)
//       toast.error("Time is up! Redirecting to the dashboard.");
//       window.location.href = "/dashboard"; // Redirect to dashboard
//     }

//     // Cleanup the timer
//     return () => clearInterval(timer);
//   }, [timeLeft]);

  const startTimer = () => setTimeLeft(10 * 60); // Start 10-minute timer

  return (
    <TimerContext.Provider value={{ timeLeft, startTimer }}>
        <ToastContainer/>
      {children}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div  onClick={() => setShowPopup(false)} className="flex justify-end items-end">
          <img  onClick={() => setShowPopup(false)} src={x} alt="" className="w-[25px] h-[25px]" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Hurry up!</h2>
          <p className="text-lg">Only 1 minute left go to cart.</p>
          <button   
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
           <a href="/cart" className=" no-underline">Go to cart</a> 
          </button>
          {/* <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button> */}
        </div>
      </div> 
      )}
    </TimerContext.Provider>
  );
};
