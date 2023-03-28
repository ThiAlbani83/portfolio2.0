import React from 'react'
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'

export default function Footer() {
    return (
        <div className='w-full bg-black/20 relative'>
            <div className='flex w-full max-w-[1440px] px-10 py-5 mt-5 justify-between mx-auto items-center'>
                <div>
                    <h1 className='font-semibold text-sm'>THIALBANIDEV</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <a href=""><AiOutlineWhatsApp /></a>
                    <a href=""><AiOutlineInstagram /></a>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 lg:flex-row'>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>Sobre</li>
                        <li className='text-sm'>Habilidades</li>
                        <li className='text-sm'>Portfolio</li>
                        <li className='text-sm'>Contato</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}