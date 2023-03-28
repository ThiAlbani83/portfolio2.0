import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className='flex items-center justify-between max-w-[1440px] px-5 mx-auto py-4'>
            <div>
                <h1>portfolio</h1>
            </div>
            <div>
                <ul>
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
