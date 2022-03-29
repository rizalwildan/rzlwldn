import * as React from 'react'
import {Helmet} from "react-helmet";
import {BiSun, FaMoon} from "react-icons/all";

export default function DarkMode({ onUpdateTheme, theme }) {
    return(
        <>
            <Helmet htmlAttributes={{
                'data-theme': theme
            }}/>
            <button className="justify-items-center" onClick={onUpdateTheme}>
                { (theme === 'dark') ? <BiSun size="24"/> : <FaMoon />}
            </button>
        </>
    )
}