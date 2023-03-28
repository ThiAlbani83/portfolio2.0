import React from 'react'

export default function Skills({ skills }) {
    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-10 md:gap-10'>
            <div className='flex flex-col'>
                <h1 className='text-2xl text-cyan-500'>Habilidades</h1>
            </div>
            <div className='grid grid-cols-2 w-full gap-10'>
                {skills.map((val, index) => (
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <val.icon className='text-5xl'/>
                        <h1 className='text-cyan-500'>
                            {val.title}
                        </h1>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[10%]`}>{val.progress}%</div>
                        </div>

                    </div>
                ))}

            </div>
 
        </div>
    )
}
