import React from 'react'

function Navbar() {

    const cities=[
    {
        id:1,
        title:'Delhi'
    },
    {
        id:2,
        title:'Mumbai'
    },
    {
        id:3,
        title:' Chennai'
    },
    {
        id:4,
        title:' Bangalore'
    },
    {
        id:5,
        title:'Kolkata'
    },
    {
        id:6,
        title:'Hyderabad'
    }
]

  return (
    <>
    <div className='flex items-center justify-around p-5'>
     {cities.map((city)=>(
       <button key={city.id} className='text-white '>{city.title}</button>
      ))}
    </div> 
    </>
  )
}

export default Navbar;
