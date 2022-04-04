import * as React from 'react'
import {Link} from "gatsby";
import {FaGithub, FaTwitter} from "react-icons/all";

const menus = [
    {
        name: 'Articles',
        url: '/blog'
    },
]

const socials = [
    {
        name: 'github',
        url: '#'
    },
    {
        name: 'twitter',
        url: '#'
    }
]
export default function NavLinks() {
    return(
        <>
            <div className="flex">
                { menus.map(val => (
                    <Link to={val.url} className="mr-4 link link-hover hover:text-secondary" key={val.name}>{val.name}</Link>
                ))}
            </div>
            <div className="flex items-center">
                { socials.map(val => (
                    <Link to={val.url} target="_blank" rel='noreferrer' className="mr-4 last:mr-0 hover:text-secondary" key={val.name}>
                        { val.name === 'github' ? <FaGithub /> : ''}
                        { val.name === 'twitter' ? <FaTwitter /> : ''}
                    </Link>
                ))}
            </div>
        </>
    )
}