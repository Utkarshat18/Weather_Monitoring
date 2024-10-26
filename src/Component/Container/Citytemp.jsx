import React from 'react';
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";

function Citytemp({ weatherData, lastRefresh }) {
    console.log("The data is ", weatherData);

    // Check if weatherData is available and has the required properties
    if (!weatherData || !weatherData.weather || !weatherData.main || !weatherData.wind) {
        return (
            <div className='backdrop-blur-sm p-12 ml-0 text-white'>
                <p>Loading weather data...</p>
            </div>
        );
    }

    // Convert sunrise and sunset times from UNIX timestamp to a readable format
    const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

    return (
        <div className='backdrop-blur-sm p-12 ml-0 '>
            {lastRefresh && (
                <div className='text-center text-white mt-4'>
                    Last refreshed: {lastRefresh.toLocaleTimeString()}
                </div>
            )}
            <div className='flex flex-col items-center justify-around py-6 text-xl text-cyan-300'>
                <p className='text-3xl text-white '>{weatherData.name}, {weatherData.sys.country}</p>
                <p className='text-white mt-5 uppercase'>{weatherData.weather[0].description}</p>
            </div>
            <div className='flex flex-row items-center justify-around text-white py-8 m-0'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-20' />
                <p className='text-5xl'>{weatherData.main.temp}°C</p>
                <div className='flex flex-col space-x-10 space-y-1'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-0" />
                        AvgTemp:
                        <span className='font-medium ml-1'>{weatherData.main.feels_like}°C</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium ml-1'>{weatherData.main.humidity}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Speed:
                        <span className='font-medium ml-1'>{weatherData.wind.speed} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-around mb-2 text-white'>
                <UilSun />
                <p className='font-light '>
                    Rise: <span className='font-medium ml-1'>{sunriseTime}</span>
                </p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>{sunsetTime}</span>
                </p>
            </div>
            <div className='flex flex-row items-center justify-between space-x-1 text-white'>
                <UilArrowDown />
                <p className='font-light'>
                    Min Temp: <span className='font-medium ml-1'>{weatherData.main.temp_min}° C</span>
                </p>

                <UilArrowUp />
                <p className='font-light'>
                    Max Temp: <span className='font-medium ml-1'>{weatherData.main.temp_max}° C</span>
                </p>
            </div>

        </div>
    );
}

export default Citytemp;
