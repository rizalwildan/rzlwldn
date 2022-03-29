import * as React from 'react'
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return(
        <>
            <div className="max-w-5xl mx-auto h-full p-8">
                <div className="flex flex-col h-full">
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}