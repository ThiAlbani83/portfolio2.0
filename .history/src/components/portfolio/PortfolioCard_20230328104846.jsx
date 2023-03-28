import React from 'react'
import { portfolioCard } from '../../data/data'

export default function PortfolioCard({ img, title, liveLink }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-center w-full'>
            {portfolioCard.map((val, index) => (
                <a href={val.liveLink} target='_blank'><div className='flex flex-col gap-2 w-full rounded-lg border-gray-200 shadow-md shadow-cyan-800 
            cursor-pointer hover:shadow-gray-300 hover:scale-105 duration-500' data-aos="fade-up" data-aos-duration="3000">
                    <img src={val.img} alt="image/portfolio" className='w-full rounded-t-lg' />
                    <h1 className='text-cyan-500 font-semibold mb-4'>{val.title}</h1>
                </div></a>
            ))}
        </div>
    )
}
