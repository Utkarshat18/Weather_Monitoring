import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";

function Citytemp() {
    return (
        <div className='backdrop-blur-sm p-12 ml-0 '>
            <div className='flex flex-col items-center justify-around py-6 text-xl text-cyan-300'>
                <p className='text-3xl text-white '>Berlin, DE</p>
                <p className='text-white mt-5'>Cloudy or whatever</p>
            </div>
            <div className='flex flex-row items-center justify-around text-white py-8 m-0'>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className='w-20' />
                <p className='text-5xl'>34°C</p>
                <div className='flex flex-col space-x-10 space-y-1'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-0" />
                        AvgTemp:
                        <span className='font-medium ml-1'>34°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium ml-1'>65%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Speed:
                        <span className='font-medium ml-1'>34 km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-around mb-2'>
                <UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>6:45 AM </span>
                </p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>6:30 PM </span>
                </p>
            </div>
            <div className='flex flex-row items-center justify-between space-x-1 '>
                <UilArrowDown/>
                <p className='font-light'>
                    Min Temp: <span className='font-medium ml-1'>34° C</span>
                </p>
                
                <UilArrowUp />
                <p className='font-light'>
                    Max Temp: <span className='font-medium ml-1'>34° C</span>
                </p>
            </div>

        </div>
    )
}

export default Citytemp
