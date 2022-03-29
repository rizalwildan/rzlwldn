import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo";
import {graphql} from "gatsby";
import {useMemo} from "react";
import {getSimplifiedPosts} from "../utils/helpers";
import PostLists from "../components/postLists";

export default function Tag({ data, pageContext }) {
    const { tag } = pageContext
    const posts = data.allMdx.edges

    const simplifiedPost = useMemo(() => getSimplifiedPosts(posts), [posts])

    return(
        <Layout>
            <Seo title={tag}/>
            <section>
                <div className="flex mb-8">
                    <span className="text-2xl lg:text-4xl font-bold mr-2">Posts Tagged:</span>
                    <h2 className="text-2xl lg:text-4xl font-bold border-b text-secondary border-b-secondary">{tag}</h2>
                </div>
                <PostLists posts={simplifiedPost}/>
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogTagQuery($tag: String!) {
      allMdx(
        filter: {frontmatter: {tags: {in: [$tag]}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
              date(formatString: "YYYY.MM.DD")
            }
            slug
          }
        }
      }
    }
`