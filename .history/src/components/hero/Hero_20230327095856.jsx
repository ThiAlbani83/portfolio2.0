import React from 'react'
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance} from 'react-icons/ai'
import heroimage from '../../assets/heroimage.png'

export default function Hero() {
    return (
        <div className='w-full px-10 max-w-[1440px] mx-auto mt-10 flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl'>Olá, me chamo</h3>
                <h1 className='text-4xl text-cyan-500'>Thiago Pereira</h1>
                <h3 className='text-2xl'>E eu sou um <span className='text-cyan-500'>Desenvolvedor Frontend</span></h3>
            </div>
            <div className='text-xl flex items-center gap-3'>
                <AiOutlineLinkedin className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                <AiOutlineInstagram className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                <AiOutlineBehance className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
            </div>
            <div>
                <img src={heroimage} alt="imagem/hero" className='rounded-full w-96'/>
            </div>
        </div>
    )
}
 