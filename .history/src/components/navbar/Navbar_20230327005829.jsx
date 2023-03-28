import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(true)

    const handleMenu = () => {
        setNav(!toggleMenu)
        if(!toggleMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    }


    return (
        <>
            <nav className='fixed flex items-center justify-between max-w-[1440px] px-5 mx-auto py-4'>
                <div>
                    <h1>portfolio</h1>
                </div>
                {toggleMenu }
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
                        className='text-2xl hover:text-cyan-500 cursor-pointer' />
                </div>
            </nav>
        </>
    )
}
