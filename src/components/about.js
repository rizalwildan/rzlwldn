import * as React from 'react'
import {Link} from "gatsby";

export default function About() {
    return(
        <section className="mb-16 lg:mb-64 md:mb-32">
            <span className="text-4xl font-bold lg:text-5xl md:text-5xl">Hi.</span>
            <p className="text-lg mt-4 lg:text-2xl md:text-2xl">
                I'm LekoArts, your theme creator. I'm passionate about open source & teaching. Learn more about Gatsby & React on
                <Link to="#" className="text-secondary hover:border-b hover:border-b-secondary ml-2">my website.</Link>
            </p>
        </section>
    )
}