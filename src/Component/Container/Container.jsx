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
  const [forecastData, setForecastData] = useState([]); // State for forecast data
  const [city, setCity] = useState("Pune");
  const [lastRefresh, setLastRefresh] = useState(null); // State for last refresh time
  const fetchInterval = 5*60 * 1000; // 5 minutes in milliseconds

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      try {
        const weather = await Weatherservices.fetchWeather(city);
        setWeatherData(weather);
        setLastRefresh(new Date()); // Update last refresh time

        const forecast = await Weatherservices.fetchForecast(city);
        setForecastData(forecast.list); // Set forecast data
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
          <Citytemp weatherData={weatherData} lastRefresh={lastRefresh} />
        </div>
        <div className='flex flex-col justify-center '>
          <Timelyforcast heading="hourly forecast" forecastData={forecastData} />
          <Weeklyforcast heading="Daily Summary" weatherData={weatherData}/>
        </div>
      </div>
    </div>
  )
}

export default Container
