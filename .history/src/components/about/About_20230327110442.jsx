import React from 'react'

export default function About({ aboutMe: { title1, description1, title2, description2 } }) {
    return (       
            <div className='w-full flex flex-col md:flex-row items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-5 md:gap-10'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl'>{title1}</h1>
                    <p className='text-sm leading-[1.8rem]'>{description1}</p>
                </div>
                <div>
                    <h1 className='text-2xl'>{title2}</h1>
                    <p className='text-sm leading-[1.8rem]'>{description2}</p>
                </div>
            </div>
    )
}
