import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Timelyforcast({ heading, forecastData }) {
    console.log("The data for forcast ", forecastData);
    const [filteredData, setFilteredData] = useState([]);

    if (!forecastData) {
        return (
            <div className='backdrop-blur-sm p-12 ml-0 text-white'>
                <p>Loading weather data...</p>
            </div>
        );
    }

    useEffect(() => {
        const filterData = () => {
            const selectedHours = new Set();
            const filtered = forecastData.filter(item => {
                const hour = new Date(item.dt_txt).getHours();
                if ([6, 9, 12, 15, 18, 21].includes(hour) && !selectedHours.has(hour)) {
                    selectedHours.add(hour);
                    return true;
                }
                return false;
            });
            setFilteredData(filtered);
        };
        filterData();
    }, [forecastData]);
    console.log("The filtered data is ", filteredData);

    useEffect(() => {
        const updateBackground = () => {
            const weatherCondition = forecastData[0]?.weather[0]?.main.toLowerCase();
            const rootElement = document.getElementById('root');

            if (weatherCondition === 'clear') {
                rootElement.className = 'weather-clear';
            } else if (weatherCondition === 'rain' || weatherCondition==='haze') {
                rootElement.className = 'weather-rainy';
            } else if (weatherCondition === 'clouds') {
                rootElement.className = 'weather-cloudy';
            }
        };

        updateBackground();
    }, [forecastData]);

    // useEffect(() => {
        // const saveWeatherData = async () => {
        //     try {
        //         await axios.post('http://localhost:5000/api/weather', forecastData);
        //         console.log('Weather data saved successfully');
        //     } catch (error) {
        //         console.error('Error saving weather data:', error);
        //     }
        // };

    //     if (forecastData) {
    //         saveWeatherData();
    //     }
    // }, [forecastData]);

    return (
        <div className='backdrop-blur-sm mb-7 p-7'>
            <p className='text-white font-medium uppercase'>{heading}</p>
            <hr className='my-2' />
            <div className='flex flex-row items-center justify-between space-x-11'>
                {filteredData.map((forecast, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                            {new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} className='w-12' alt='' />
                        <p className='font-medium'>{forecast.main.temp} °C</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timelyforcast
