import React, { useState } from 'react'
import { UilSearch } from "@iconscout/react-unicons";

function Searchbar({ setCity }) {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setCity(input);
    };

    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
                <input
                    type='text'
                    placeholder='Search for city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <UilSearch size={25} className='text-white cursor-pointer' onClick={handleSearch} />
            </div>
        </div>
    )
}

export default Searchbar
