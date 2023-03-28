import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

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
        <div className='w-full flex justify-between px-10 py-6 items-center max-w-[1440px] mx-auto'>
            <h1 className='text-white font-bold text-2xl z-20'>ThiAlbaniDev</h1>
            <GiHamburgerMenu onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
            <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10 ease-in duration-300'
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center gap-12'>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Portfolio</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar 
