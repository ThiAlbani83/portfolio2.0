import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({img, title, liveLink}) {
  return (
    <div className='grid grid-cols-1 gap-10 items-center'>
        {portfolioCard.map((val, index) => (
            <div>
                <img src={val.img} alt="image/portfolio" />
                <h1>{val.title}</h1>
            </div>
        ))}
    </div>
  )
}
