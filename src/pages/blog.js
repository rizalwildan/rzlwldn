import * as React from 'react'
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostLists from "../components/postLists";
import {useMemo} from "react";
import {getSimplifiedPosts, slugify} from "../utils/helpers";

export default function Blog({ data }) {
    const posts = data.articles.edges
    const tags = data.tags.group
    console.log(tags)
    const simplifiedPost = useMemo(() => getSimplifiedPosts(posts), [posts])

    return(
        <Layout>
            <Seo title="Articles" description="My collection articles"/>
            <section className="mb-16">
                <div className="flex mb-8">
                    <h2 className="text-3xl font-bold lg:text-4xl">Tags</h2>
                </div>
                <div className="flex flex-col lg:flex-row">
                    { tags.map((node) => (
                        <Link to={`/tags/${slugify(node.fieldValue)}`} className="text-xl lg:text-2xl mr-4 font-mono link link-hover hover:text-secondary" key={node.fieldValue}>
                            {`#${node.fieldValue}(${node.totalCount})`}
                        </Link>
                    ))}
                </div>
            </section>
            <section>
                <div className="flex items-center pb-4 mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold">Articles</h2>
                </div>
                <PostLists posts={simplifiedPost} showYears/>
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogQuery {
      articles: allMdx(
        sort: {order: DESC, fields: frontmatter___date}
        filter: {frontmatter: {template: {eq: "post"}}}
      ) {
        edges {
          node {
            slug
            frontmatter {
              title
              template
              tags
              categories
              date(formatString: "YYYY.MM.DD")
              description
            }
            id
          }
        }
      }
      tags: allMdx(sort: {order: DESC, fields: frontmatter___tags}) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
`