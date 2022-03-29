import * as React from 'react'

export default function About({ quote }) {
    return(
        <section className="mb-16 lg:mb-64 md:mb-32 lg:px-8">
            {/* <span className="text-4xl font-bold lg:text-5xl md:text-5xl">Hi.</span> */}
            <p className="text-3xl mt-4 lg:text-5xl md:text-2xl text-left">
                {quote.content}
            </p>
            <p className='mt-4 text-lg lg:text-4xl md:text-4xl italic'>― {quote.author}</p>
        </section>
    )
}