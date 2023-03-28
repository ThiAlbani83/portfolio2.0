import React from 'react'

export default function Footer() {
    return (
        <div className='w-full bg-black/20 relative'>
            <div className='w-full max-w-[1440px] px-10 py-5 mt-5'>
                <div>
                    <h1 className='font-semibold text-sm'>THIALBANIDEV</h1>
                </div>
                <div>
                    <ul className=''>
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