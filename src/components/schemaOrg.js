import * as React from 'react'
import {Helmet} from "react-helmet";

export default function SchemaOrg({ title, description, url, isBlogPost, postSlug, image }) {
    const baseSchema = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url,
            name: title,
            alternateName: title
        }
    ]

    if (isBlogPost) {
        baseSchema.push(
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: {
                            '@id': `${url}/${postSlug}`,
                            name: title,
                            image
                        },
                    },
                ],
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                url: url,
                name: title,
                alternateName: title,
                headline: title,
                description,
            }
        )
    }
    return(
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
        </Helmet>
    )
}