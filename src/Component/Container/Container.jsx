// import React from 'react'
import Citytemp from './Citytemp.jsx'
import TimelyForcast from './TimelyForcast.jsx'
import WeeklyForcast from './Weeklyforcast.jsx'
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
        console.log("The weather data is", weatherData);
        setLastRefresh(new Date()); // Update last refresh time

        const forecast = await Weatherservices.fetchForecast(city);
        setForecastData(forecast.list); // Set forecast data
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForCity(); // Initial fetch
  }, [city]);

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
          <TimelyForcast heading="hourly forecast" forecastData={forecastData} />
          <WeeklyForcast heading="Daily Summary" weatherData={weatherData}/>
        </div>
      </div>
    </div>
  )
}

export default Container
