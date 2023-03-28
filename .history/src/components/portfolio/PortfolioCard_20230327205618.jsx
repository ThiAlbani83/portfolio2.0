import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({img, title, liveLink}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-center w-full'>
        {portfolioCard.map((val, index) => (
            <div className='flex flex-col gap-2 w-full border border-gray-500'>
                <img src={val.img} alt="image/portfolio" className='w-full'/>
                <h1 className='text-cyan-500 font-semibold'>{val.title}</h1>
            </div>
        ))}
    </div>
  )
}
