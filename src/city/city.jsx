import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPinned } from 'lucide-react';
import { Haze } from 'lucide-react';
import { Calendar } from 'lucide-react';



const city = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate]=useState(new Date());

  useEffect( ()=>{
    const intervalId= setInterval(()=>{
        setCurrentDate(new Date());
    },1000);
     return () => clearInterval(intervalId);
  },[])
    const formattedDateTime = currentDate.toLocaleDateString('en-GB', {
  weekday: 'long',  // full name of the day (e.g. 'Monday')
  day: 'numeric',   // numeric day (e.g. '3')
  month: 'long',    // full month name (e.g. 'June')
  year: 'numeric',  // full year (e.g. '2025')
}); // You can customize the format
  // Function to get the user's location
  const dateWithComma = `${formattedDateTime.split(' ')[0]}, ${formattedDateTime.split(' ').slice(1).join(' ')}`;
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          setError('Failed to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Fetch the weather data when location is available
  useEffect(() => {
    getLocation();
  }, []);

  // Function to fetch weather data
  const fetchWeather = async () => {
    if (location) {
      try {
        setLoading(true);
        setError(null);

        const apiKey = 'f7ff2e93d1e383c91b8de7ce65375ed0';  // Replace with your OpenWeatherMap API key
        const { latitude, longitude } = location;

        // Fetch weather data from OpenWeatherMap
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; // units=metric for Celsius
        const weatherResponse = await axios.get(weatherUrl);

        setWeatherData(weatherResponse.data);

        // Extract city name from the weather data response
        setCity(weatherResponse.data.name);

      } catch (err) {
        setError('Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Set up a polling mechanism to refresh the weather data at regular intervals
  useEffect(() => {
    if (location) {
      fetchWeather(); // Initial fetch on load

      const intervalId = setInterval(() => {
        fetchWeather(); // Refresh the data every 5 minutes
      }, 5 * 60 * 1000); // 5 minutes

      // Cleanup the interval on unmount or when location changes
      return () => clearInterval(intervalId);
    }
  }, [location]);

  if (loading) {
    return <div>Loading your location and weather...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  const { main } = weatherData;

  return (
    <div className='bg-[#EFF7FF] flex justify-between h-10 items-center'>
        <div className="weather flex ml-32">
           <p className='ml-2 mr-2'><Haze/></p>
            <p>{main.temp}°C  <span  className='mr-2 ml-1'> {city} </span></p>
            <p>{<MapPinned className='ml-2 mr-2'/>}</p>
            <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
        </div>
        <div className="time flex mr-32">
            <p>{<Calendar size={22} className='mr-1 '/>}</p>
            <p>{dateWithComma}</p>
        </div>
    </div>
  );
};

export default city;
