import React from 'react'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance } from 'react-icons/ai'
import heroimage from '../../assets/heroimage.png'
import {hero} from '../../../data/hero.js'

export default function Hero({hero}) {
    return (
        <div className='w-full px-10 max-w-[1440px] mx-auto mt-10 md:mt-40 lg:mt-10 flex flex-col lg:flex-row gap-3 md:gap-0 items-center justify-center text-center'>
            <div className='w-full flex flex-col gap-5 md:gap-10'>
                <div className='flex flex-col gap-3 md:gap-10'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl tracking-[4px]'>Olá, me chamo</h3>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-cyan-500 tracking-[4px]'>Thiago Pereira</h1>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl tracking-[4px]'>E eu sou um <span className='text-cyan-500'>Desenvolvedor Frontend.</span></h3>
                </div>
                <div className='text-xl flex items-center justify-center gap-7'>
                    <AiOutlineLinkedin className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                    <AiOutlineInstagram className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                    <AiOutlineBehance className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                </div>
            </div>
            <div className='w-full mt-10 flex items-center justify-center'>
                <img src={heroimage} alt="imagem/hero" className='rounded-full w-96 md:w-[60vw] lg:w-[30vw]' />
            </div>
        </div>
    )
}
