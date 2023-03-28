import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
  return (
    <div className='w-full flex flex-col items-center justify-center max-w-[1440px] mx-auto mt-20 lg:mt-40 px-10 text-center md:text-start gap-20'>
        <div className='flex flex-col w-full'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-cyan-500'>Portfolio</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
            <PortfolioCard />
        </div>
    </div>
  )
}
