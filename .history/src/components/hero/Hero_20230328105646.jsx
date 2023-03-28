import React from 'react'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance, AiOutlineGithub } from 'react-icons/ai'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Hero({ hero: { title, name, description, job, img } }) {

    const [text, count] = useTypewriter({
        words: [
            'Thiago Pereira',
        ],
        loop: true,
        delaySpeed: 3000,
    })

    return (
        <div id='home' className='w-full px-10 max-w-[1440px] mx-auto mt-10 md:mt-40 lg:mt-28 flex flex-col lg:flex-row gap-3 md:gap-0 items-center justify-center text-center'>
            <div className='w-full flex flex-col gap-5 md:gap-10'>
                <div className='flex flex-col gap-3 md:gap-10' data-aos="fade-right" data-aos-duration="1000" >
                    <h3 className='text-2xl md:text-3xl lg:text-4xl tracking-[4px]'>{title}</h3>
                    <h1 className='text-5xl text-cyan-500'>{text}
                        <Cursor cursorColor="rgb(255 255 255)" />
                    </h1>

                    <h3 className='text-2xl md:text-3xl lg:text-4xl tracking-[4px]'>{description} <span className='text-cyan-500'>{job}</span></h3>
                </div>
                <div className='text-xl md:text-2xl flex items-center justify-center gap-7'>
                    <AiOutlineLinkedin className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                    <AiOutlineBehance className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                    <AiOutlineGithub className='cursor-pointer hover:text-cyan-500 hover:scale-110' />
                </div>
            </div>
            <div className='w-full mt-10 flex items-center justify-center' data-aos="flip-left" data-aos-duration="3000">
                <img src={img} alt="imagem/hero" className='rounded-full w-96 md:w-[60vw] lg:w-[30vw]' />
            </div>
        </div>
    )
}
