import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
        if (!toggleMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }


    return (
        
            <nav className='absolute flex items-center justify-between max-w-[1440px] px-5 mx-auto py-4'>
                <h1 className='text-2xl z-20'>portfolio</h1>
                <GiHamburgerMenu 
                onClick={handleMenu}
                className='text-2xl hover:text-cyan-500 cursor-pointer' />
                <div className={toggleMenu ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10 ease-in duration-300'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'}>
                    <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Habilidades</li>
                        <li>Portfolio</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </nav>
    )
}
