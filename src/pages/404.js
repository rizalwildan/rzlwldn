import * as React from 'react'
import Seo from "../components/seo";
import Layout from "../components/layout";

export default function FourOFour() {
    return(
        <Layout>
            <Seo title="404"/>
            <h1 className="text-4xl font-bold my-5">404 - Page Not Found</h1>
            <span className="text-xl my-4">Unfortunately we couldn't find what you were looking for :(</span>
        </Layout>
    )
}