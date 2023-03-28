import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({img, title, liveLink}) {
  return (
    <div className='grid grid-cols-1 gap-10 drop-shadow-lg shadow-cyan-500'>
        {portfolioCard.map((val, index) => (
            <div>
                <img src={val.img} alt="" />
            </div>
        ))}
    </div>
  )
}
