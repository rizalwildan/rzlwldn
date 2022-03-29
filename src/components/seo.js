import * as React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import SchemaOrg from "./schemaOrg";

function Seo({ theme, description, meta, title, isBlogPost, postSlug, featuredImage }) {
    const {site} = useStaticQuery(graphql`
        query MyQuery{
          site {
            siteMetadata {
              title
              siteUrl
              description
              author
            }
          }
        }
    `)

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    const canonical = postSlug ? `${site.siteMetadata.siteUrl}/${postSlug}` : null
    const metaImage = featuredImage && featuredImage.src ? `${site.siteMetadata.siteUrl}${featuredImage.src}` : null

    return(
        <>
        <Helmet
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            link={
                canonical ? [
                    {
                        rel: "canonical",
                        href: canonical
                    }
                ] : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(
                metaImage ?
                    [
                        {
                            property: "og:image",
                            content: metaImage,
                        },
                        {
                            property: "og:image:width",
                            content: metaImage.width,
                        },
                        {
                            property: "og:image:height",
                            content: metaImage.height,
                        },
                        {
                            name: "twitter:card",
                            content: "summary_large_image",
                        },
                    ] : [
                        {
                            name: "twitter:card",
                            content: "summary",
                        },
                    ]
            ).concat(meta)}
        />
        <SchemaOrg
            title={title}
            description={metaDescription}
            url={site.siteMetadata.siteUrl}
            isBlogPost
            postSlug={postSlug}
            image={metaImage}
        />
        </>
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default Seo