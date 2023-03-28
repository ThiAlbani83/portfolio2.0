import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(true)


  return (
    <>
        <nav className='flex items-center justify-between max-w-[1440px] px-5 mx-auto py-4'>
            <div>
                <h1>portfolio</h1>
            </div>
            <div>
                <ul className='lg:flex gap-8 hidden'>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Portfolio</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div>
                <GiHamburgerMenu 
                onClick={''}
                className='text-2xl hover:text-cyan-500 cursor-pointer'/>
            </div>
            <div>
            <ul className=''>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Portfolio</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    </>
  )
}
