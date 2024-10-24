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

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      try {
        const data = await Weatherservices.fetchWeather(city); // Fetch for Berlin
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForCity();
  }, [city]); // Add city as a dependency

  return (
    <div>
      <Navbar setCity={setCity} /> {/* Pass setCity as a prop to Navbar */}
      <Searchbar setCity={setCity} className="pt-5" />
      <DateTimeLocation/>
      <div className='flex flex-row justify-around mt-7 '>
        <div>
          <Citytemp weatherData={weatherData} />
        </div>
        <div className='flex flex-col justify-center '>
          <Timelyforcast heading="hourly forcast" />
          <Weeklyforcast heading="Daily forcast" />
        </div>
      </div>
    </div>
  )
}

export default Container
