// import React from 'react'

// function DateTimeLocation() {
//   return (
//     <div className='flex items-center justify-center mt-4'>
//     <p className='text-white text-xl'>Sunday, 20 May 2024 | Local time: 12:46 PM</p>
//     </div>
//   )
// }

// export default DateTimeLocation

import React, { useState, useEffect } from 'react';

function DateTimeLocation() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <div className='flex items-center justify-center mt-4 mb-5'>
      <p className='text-white text-xl'>{formattedDate} | Local time: {formattedTime}</p>
    </div>
  );
}

export default DateTimeLocation;