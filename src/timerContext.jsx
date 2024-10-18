import { createContext, useContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Create the TimerContext
const TimerContext = createContext();

// Custom hook to use the context
export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(null); // Store the remaining time

  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      // Decrease timer every second
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timeLeft === 0) {
      // Handle timer expiration logic (redirect or alert)
      toast.error("Time is up! Redirecting to the dashboard.");
      window.location.href = "/dashboard"; // Redirect to dashboard
    }

    // Cleanup the timer
    return () => clearInterval(timer);
  }, [timeLeft]);

  const startTimer = () => setTimeLeft(10 * 60); // Start 10-minute timer

  return (
    <TimerContext.Provider value={{ timeLeft, startTimer }}>
        <ToastContainer/>
      {children}
    </TimerContext.Provider>
  );
};
