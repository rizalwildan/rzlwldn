import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo";
import {graphql, Link} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {slugify} from "../utils/helpers";

export default function Post({ data }) {
    const post = data.mdx
    const { tags, title, date, description, featuredImage } = post.frontmatter
    const image = featuredImage ? featuredImage.childImageSharp.resize : null

    return(
        <Layout>
            <Seo
                title={title}
                description={description}
                isBlogPost
                postSlug={post.slug}
                featuredImage={image}
            />
            <main className="flex flex-col">
                <h1 className="text-4xl mt-8 font-bold lg:text-6xl lg:mt-0">{title}</h1>
                <span className="flex flex-col text-base font-mono mt-4 mb-5 leading-4 align-middle lg:text-xl lg:leading-4 lg:flex-row">
                    <time className="mr-4 mb-4 lg:mb-0">{date}</time>
                    <div className="border-x mr-4"></div>
                    <div className="flex">
                        {
                            tags.map(val => (
                                <Link to={`/tags/${slugify(val)}`} className="mr-2 link link-hover hover:text-secondary">{`#${val}`}</Link>
                            ))
                        }
                    </div>
                </span>
                <section className="my-16 prose max-w-none text-justify prose-stone prose-img:rounded-xl prose-img:m-auto prose-a:text-secondary lg:prose-xl">
                    <MDXRenderer>{post.body}</MDXRenderer>
                </section>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
      mdx(slug: {eq: $slug}) {
        frontmatter {
          description
          date(formatString: "YYYY.MM.DD")
          tags
          title
          featuredImage {
            childImageSharp {
              resize(width: 1200) {
                src
                width
                height
              }
            }
          }
        }
        slug
        body
      }
    }
`