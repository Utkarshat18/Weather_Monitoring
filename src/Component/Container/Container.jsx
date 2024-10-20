import React from 'react'
import Citytemp from './Citytemp'
import Timelyforcast from './Timelyforcast'
import Weeklyforcast from './Weeklyforcast'

function Container() {
  return (
    <div className='flex flex-row justify-around mt-7 '>
      <div>
      <Citytemp/>
      </div>
      <div className='flex flex-col justify-center '>
      <Timelyforcast heading="hourly forcast" />
      <Weeklyforcast heading="Daily forcast"/>
      </div>
    </div>
  )
}

export default Container
