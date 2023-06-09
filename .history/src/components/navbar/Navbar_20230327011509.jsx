import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        if(!nav){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    }

    
    return (
        <div className='w-full flex justify-between px-10 py-4 items-center max-w-[1440px] mx-auto'>
            <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
            <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10 ease-in duration-300'
                : 'absolute top-0 h-screen top-[-100%] ease-in duration-300 z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center gap-12'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Reservations</li>
                    <li>Amenities</li>
                    <li>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar 
