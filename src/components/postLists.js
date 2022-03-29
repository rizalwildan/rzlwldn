import * as React from 'react'
import {Link} from "gatsby";
import {useMemo} from "react";

export default function PostLists({ posts, showYears }) {
    const postByYear = useMemo(() => {
        const collection = {}

        posts.forEach((post) => {
            const year = post.date?.split('.')[0]

            collection[year] = [...(collection[year] || []), post]
        })

        return collection
    }, [posts])

    const years = useMemo(() => Object.keys(postByYear).reverse(), [postByYear])
    console.log(postByYear)

    if (showYears) {
        return years.map((year) => (
            <section key={year}>
                <h2 className="text-xl lg:text-2xl  font-bold border-b mb-8 pb-1">{year}</h2>
                { postByYear[year].map((node) => (
                    <article className="flex flex-col mb-4 lg:mb-8" key={node.id}>
                        <Link to={`/${node.slug}`} className="link link-hover text-xl lg:text-2xl md:text-2xl hover:text-secondary font-mono">{node.title}</Link>
                        <span className="mt-1 font-mono mb-5 text-base lg:text-lg md:text-lg">{node.date}</span>
                    </article>
                ))}
            </section>
        ))
    } else {
        return(
            <>
                {posts.map((node) => (
                    <article className="flex flex-col mb-4 lg:mb-8" key={node.id}>
                        <Link to={`/${node.slug}`} className="link link-hover text-xl lg:text-2xl md:text-2xl hover:text-secondary font-mono">{node.title}</Link>
                        <span className="mt-1 font-mono mb-5 text-base lg:text-lg md:text-lg">{node.date}</span>
                    </article>
                ))}
            </>
        )
    }
}