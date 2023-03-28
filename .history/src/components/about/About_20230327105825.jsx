import React from 'react'

export default function About({ aboutMe: { title1, description1, title2, description2 } }) {
    return (
        <>
            <div>
                <div>
                    <h1 className='text-2xl'>{title1}</h1>
                </div>
                <div>
                    <p>{description1}</p>
                </div>
            </div>
        </>
    )
}
