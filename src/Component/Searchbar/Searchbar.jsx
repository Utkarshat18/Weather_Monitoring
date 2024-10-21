import React from 'react'
import { UilSearch,UilLocationPoint } from "@iconscout/react-unicons";

function Searchbar() {
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
                <input type='text' placeholder='Search for city...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
                
                <UilLocationPoint size={25} className='text-white cursor-pointer' />
                <UilSearch size={25} className='text-white cursor-pointer' />
            </div>
        </div> 
    )
}

export default Searchbar
