import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({img, title, liveLink}) {
  return (
    <div className='grid grid-cols-1 gap-20 items-center justify-center'>
        {portfolioCard.map((val, index) => (
            <div className='flex flex-col gap-2'>
                <img src={val.img} alt="image/portfolio" />
                <h1 className='text-cyan-500 font-poppins'>{val.title}</h1>
            </div>
        ))}
    </div>
  )
}
