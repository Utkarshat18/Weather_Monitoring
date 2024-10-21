// import React from 'react'
import Citytemp from './Citytemp'
import Timelyforcast from './Timelyforcast'
import Weeklyforcast from './Weeklyforcast'
import React, { useState, useEffect } from 'react'
import Weatherservices from '../../Services/Weatherservices';

function Container() {
    const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      try {
        const data = await Weatherservices.fetchWeather('Berlin,DE'); // Fetch for Berlin
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForCity();
  }, []);
  return (
    <div className='flex flex-row justify-around mt-7 '>
      <div>
      <Citytemp weatherData={weatherData}/>
      </div>
      <div className='flex flex-col justify-center '>
      <Timelyforcast heading="hourly forcast" />
      <Weeklyforcast heading="Daily forcast"/>
      </div>
    </div>
  )
}

export default Container
