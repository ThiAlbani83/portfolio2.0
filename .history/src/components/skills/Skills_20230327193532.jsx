import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills({ skills }) {

    return (
        <div className='w-full flex flex-col items-center justify-center max-w-[1440px] mx-auto mt-20 lg:mt-40 px-10 text-center md:text-start gap-20'>
            <div className='flex flex-col w-full'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-cyan-500'>Minhas Habilidades</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-10'>
                {skills.map((val, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-3'>
                        <val.icon className='text-5xl' />
                        <h1 className='text-cyan-500 text-xl'>
                            {val.title}
                        </h1>
                        <ProgressBar className='w-full md:w-[60%]' animated now={val.progress} label={`${val.progress}%`} color='#06b6d4'/>
                    </div>
                ))}
            </div>
        </div>
    )
}
