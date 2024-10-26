import React from 'react'

function Weeklyforcast({ heading, weatherData }) {
    console.log("The summary is ", weatherData);
    if (!weatherData || !weatherData.weather || !weatherData.main || !weatherData.wind) {
        return (
            <div className='backdrop-blur-sm p-12 ml-0 text-white'>
                <p>Loading weather data...</p>
            </div>
        );
    }

    return (
        <div className='backdrop-blur-sm mt-5 p-7'>
            <p className='text-white font-medium uppercase'>{heading}</p>
            <hr className='my-2' />
            <div className='flex flex-col items-center justify-between space-x-9 text-white font-large'>
                <p className=''>{weatherData.name} {weatherData.sys.country}, will experience a climate with {weatherData.weather[0].main}</p>
                <p>where the temperature is {weatherData.main.temp} degrees but feels like {weatherData.main.feels_like} degrees.</p>
            </div>
        </div>
    )
}

export default Weeklyforcast
