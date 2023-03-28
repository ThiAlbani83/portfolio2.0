import React from 'react'

export default function Footer() {
    return (
        <div className='w-full bg-black/20 relative'>
            <div className='w-full max-w-[1440px] px-10 py-5 mt-5'>
                <div>
                    <h1 className='font-semibold text-sm'>THIALBANIDEV</h1>
                </div>
                <div>
                    <ul className='text-sm'>
                    <li className=''>Home</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Portfolio</li>
                    <li>Contato</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}