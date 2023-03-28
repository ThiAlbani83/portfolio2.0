import React from 'react'
import { ProgressBar } from 'react-bootstrap'

export default function Skills({ skills }) {

    return (
        <div className='w-full flex flex-col items-center justify-center max-w-[1440px] mx-auto mt-20 px-10 text-center md:text-start gap-10 md:gap-10'>
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
                        <ProgressBar animated now={50} />
                        {/* <div className='w-full bg-gray-200 rounded-full'>
                            <div className={`w-[${val.progress}%] bg-cyan-500 rounded-full text-xs text-center p-0.5`}>
                                {val.progress}%
                            </div>
                        </div> */}
                        {/* <div className="w-full bg-gray-200 rounded-full">
                            <div className={`bg-cyan-500 text-xs text-center p-0.5 leading-none rounded-full w-[${val.progress}%]`}>
                                <p>{val.progress}%</p>
                            </div>
                        </div>  */} 
                    </div>
                ))}
            </div>
        </div>
    )
}
