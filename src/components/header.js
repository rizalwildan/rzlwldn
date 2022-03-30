import * as React from 'react'
import {useEffect, useState} from "react";
import DarkMode from "./darkMode";
import NavLinks from "./navLinks";
import {Link} from "gatsby";

function setNightTheme(setTheme) {
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
}

function setLightTheme(setTheme) {
    localStorage.setItem('theme', 'light')
    setTheme('light')
}

export default function Header() {
    const [theme, setTheme] = useState('dark')

    const onUpdateTheme = (theme) => {
        console.log(`on click ${theme}`)
        if (theme === 'dark') {
            setLightTheme(setTheme)
        } else if (theme === 'light') {
            setNightTheme(setTheme)
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        console.log(`local storage ${savedTheme}`)

        if (savedTheme === 'dark' || !savedTheme) setNightTheme(setTheme)
        if (savedTheme === 'light') setLightTheme(setTheme)
    }, [])

    return(
        <header className="mb-16 lg:mb-32">
            <div className="flex justify-between">
                <Link to="/" className="text-3xl font-bold">Mr.MARU</Link>
                <DarkMode onUpdateTheme={() => onUpdateTheme(theme)} theme={theme}/>
            </div>
            <div className="flex justify-between mt-4 align-middle border-b pb-2">
                <NavLinks />
            </div>
        </header>
    )
}