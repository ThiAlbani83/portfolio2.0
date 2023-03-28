import React from 'react'
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance} from 'react-icons/ai'

export default function Hero() {
    return (
        <div>
            <div>
                <h3>Olá, me chamo</h3>
                <h1>Thiago Pereira</h1>
                <h3>E eu sou um <span>Desenvolvedor Frontend</span></h3>
            </div>
            <div className='text-2xl'>
                <AiOutlineLinkedin />
                <AiOutlineInstagram />
                <AiOutlineBehance />
                
            </div>
        </div>
    )
}
