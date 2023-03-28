import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({img, title, liveLink}) {
  return (
    <div className='grid'>
        {portfolioCard.map((val, index) => (
            <div>
                <img src={val.img} alt="" />
            </div>
        ))}
    </div>
  )
}
