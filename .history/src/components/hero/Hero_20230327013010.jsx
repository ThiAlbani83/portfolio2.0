import React from 'react'
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance} from 'react-icons/ai'

export default function Hero() {
    return (
        <div className='w-full px-3 max-w-[1440px] mx-auto mt-10'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl'>Olá, me chamo</h3>
                <h1 className='text-4xl'>Thiago Pereira</h1>
                <h3 className='text-2xl'>E eu sou um <span>Desenvolvedor Frontend</span></h3>
            </div>
            <div className='text-xl flex items-center gap-3'>
                <AiOutlineLinkedin />
                <AiOutlineInstagram />
                <AiOutlineBehance />
                
            </div>
        </div>
    )
}
