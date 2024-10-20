import React from 'react'

function Timelyforcast({heading}) {
  return (
    <div className=' backdrop-blur-sm  mb-7 p-7'>
      <p className='text-white font-medium uppercase'>{heading}</p>
      <hr className='my-2'/>
      <div className='flex flex-row items-center justify-between space-x-9'>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:25 PM
            </p>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' className='w-12 ' alt=''/>
            <p className='font-medium'>22 °C</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:25 PM
            </p>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' className='w-12 ' alt=''/>
            <p className='font-medium'>22 °C</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:25 PM
            </p>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' className='w-12 ' alt=''/>
            <p className='font-medium'>22 °C</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:25 PM
            </p>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' className='w-12 ' alt=''/>
            <p className='font-medium'>22 °C</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:25 PM
            </p>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' className='w-12 ' alt=''/>
            <p className='font-medium'>22 °C</p>
        </div>
      </div>
    </div>
  )
}

export default Timelyforcast
