import * as React from 'react'

export default function Footer() {
    return(
        <footer className="border-t mt-16 lg:mt-32 md:mt-32 flex flex-col justify-between font-mono lg:flex-row md:flex-row">
            <div className="pt-4 text-sm lg:text-base">
                <span>© 2022 by Space Ship. All rights reserved.</span>
            </div>
            <div className="pt-4 text-sm lg:text-base">
                <span>RZLWLDN</span>
            </div>
        </footer>
    )
}