import React from 'react'

export default function Skills({ skills }) {
    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-10 md:gap-10'>
            <div className='flex flex-col'>
                <h1 className='text-2xl text-cyan-500'>Habilidades</h1>
            </div>
            <div className='grid grid-cols-2 w-full'>
                {skills.map((val, index) => (
                    <div className='flex'>
                        <val.icon />
                        <h1 className='text-cyan-500'>
                            {val.title}
                        </h1>

                    </div>
                ))}

            </div>

        </div>
    )
}
