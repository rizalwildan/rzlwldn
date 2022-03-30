import * as React from 'react'
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return(
        <>
            <div className='border-b-4 border-b-secondary'/>
            <div className="flex flex-col min-h-screen max-w-5xl mx-auto p-8">
                    <Header />
                    <main className='flex-grow'>
                        {children}
                    </main>
                    <Footer />
            </div>
        </>
    )
}