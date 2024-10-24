// import React from 'react'
import Citytemp from './Citytemp'
import Timelyforcast from './Timelyforcast'
import Weeklyforcast from './Weeklyforcast'
import React, { useState, useEffect } from 'react'
import Weatherservices from '../../Services/Weatherservices';
import Searchbar from '../Searchbar/Searchbar'; // Import Searchbar
import Navbar from '../Navbar/Navbar'; // Import Navbar
import DateTimeLocation from '../DateTimeLocation/DateTimeLocation';

function Container() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pune");
  const [lastRefresh, setLastRefresh] = useState(null); // State for last refresh time
  const fetchInterval = 5*60 * 1000; // 5 minutes in milliseconds

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      try {
        const data = await Weatherservices.fetchWeather(city);
        setWeatherData(data);
        setLastRefresh(new Date()); // Update last refresh time
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForCity(); // Initial fetch

    const intervalId = setInterval(fetchWeatherForCity, fetchInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [city, fetchInterval]);

  return (
    <div>
      <Navbar setCity={setCity} />
      <Searchbar setCity={setCity} className="pt-5" />
      <DateTimeLocation />
      <div className='flex flex-row justify-around mt-7 '>
        <div>
          <Citytemp weatherData={weatherData} />
        </div>
        <div className='flex flex-col justify-center '>
          <Timelyforcast heading="hourly forcast" />
          <Weeklyforcast heading="Daily forcast" />
        </div>
      </div>
      {lastRefresh && ( // Display last refresh time if available
        <div className='text-center text-white mt-4'>
          Last refreshed: {lastRefresh.toLocaleTimeString()}
        </div>
      )}
    </div>
  )
}

export default Container
