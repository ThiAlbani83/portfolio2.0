import React from 'react'

export default function About({ aboutMe: { title1, description1, title2, description2 } }) {
    return (       
            <div className='w-full flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-10 md:gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl text-cyan-500'>{title1}</h1>
                    <p className='text-sm md:text-base leading-[1.8rem]'>{description1}</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl text-cyan-500'>{title2}</h1>
                    <p className='text-sm leading-[1.8rem]'>{description2}</p>
                </div>
            </div>
    )
}
