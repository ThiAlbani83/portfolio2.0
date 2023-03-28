import React from 'react'

export default function Skills({ skills }) {

    const percentages = ['85%', 85, 70, 70, 80]



    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-10 md:gap-10'>
            <div className='flex flex-col'>
                <h1 className='text-2xl text-cyan-500'>Habilidades</h1>
            </div>
            <div className='grid grid-cols-2 w-full gap-10'>
                {skills.map((val, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-3'>
                        <val.icon className='text-5xl' />
                        <h1 className='text-cyan-500 text-xl'>
                            {val.title}
                        </h1>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className={`bg-cyan-500 text-xs text-center p-0.5 leading-none rounded-full w-[${percentages[index]}]`}>
                                <p>{val.progress}%</p>
                            </div>
                        </div>
                        {console.log(percentages[index])}
                    </div>

                ))}

            </div>

        </div>
    )
}
