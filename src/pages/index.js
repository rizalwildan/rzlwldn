import React, {useMemo} from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/about";
import {graphql, Link} from "gatsby";
import {getSimplifiedPosts} from "../utils/helpers";
import PostLists from "../components/postLists";

export default function Home({ data }) {
  const latest = data.latest.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])


  return(
      <Layout>
          <Seo title="Homepage"/>
          <About />
          <section>
              <div className="flex justify-between border-b items-center pb-4 mb-8">
                  <h2 className="text-xl lg:text-3xl md:text-3xl">Latest Articles</h2>
                  <Link to="/blog" className="link link-hover hover:text-secondary">View All Articles</Link>
              </div>
              <div>
                  <PostLists posts={simplifiedLatest}/>
              </div>
          </section>
      </Layout>
  )
}

export const pageQuery = graphql`
    query IndexQuery {
        latest: allMdx(
            limit: 7
            filter: {frontmatter: {template: {eq: "post"}}}
            sort: {order: DESC, fields: frontmatter___date}
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
                }
              }
            }
          }
    }
`
