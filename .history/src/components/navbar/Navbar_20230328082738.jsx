import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }


    return (
        <div className='w-full flex justify-between px-10 py-6 items-center max-w-[1440px] mx-auto'>
            <h1 className='text-white font-bold text-2xl z-20'>ThiAlbaniDev</h1>
            <ul className='lg:flex w-full h-full items-center justify-center gap-12 peer hidden'>
                <a href="#home"><li className='text-lg'>Home</li></a>
                <a href="#about"><li className='text-lg'>Sobre</li></a>
                <a href="#skills"><li className='text-lg'>Habilidades</li></a>
                <a href="#portfolio"><li className='text-lg'>Portfolio</li></a>
                <a href="#contact"><li className='text-lg'>Contato</li></a>
            </ul>
            <GiHamburgerMenu onClick={handleNav} className='z-20 text-white cursor-pointer hover:text-cyan-500 lg:hidden' size={25} />
            <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10 ease-in duration-300'
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center gap-12 peer'>
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
