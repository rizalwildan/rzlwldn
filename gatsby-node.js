const path = require('path')

const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const postPage = path.resolve('./src/templates/post.js')
    const tagPage = path.resolve('./src/templates/tag.js')

    const result = await graphql(
        `
            {
                allMdx(sort: {order: DESC, fields: frontmatter___date}) {
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
            }
        `
    )

    if (result.errors) {
        throw result.errors
    }

    const all = result.data.allMdx.edges
    const posts = all.filter((post) => post.node.frontmatter.template === 'post')
    const tagSet = new Set()
    const categorySet = new Set()


    //Posts page
    posts.forEach((post, i) => {
        const previous = i === posts.length - 1 ? null : posts[i + 1].node
        const next = i === 0 ? null : posts[i - 1].node

        if (post.node.frontmatter.tags) {
            post.node.frontmatter.tags.forEach((tag) => {
                tagSet.add(tag)
            })
        }

        if (post.node.frontmatter.categories) {
            post.node.frontmatter.categories.forEach((category) => {
                categorySet.add(category)
            })
        }

        createPage({
            path: post.node.slug,
            component: postPage,
            context: {
                slug: post.node.slug,
                previous,
                next
            }
        })

    })

    //Tag
    const tagList = Array.from(tagSet)
    console.log(tagList)
    tagList.forEach((tag) => {
        createPage({
            path: `/tags/${slugify(tag)}`,
            component: tagPage,
            context: {
                tag,
            }
        })
    })


}

exports.createPages = createPages

function slugify(str) {
    return(
        str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => x.toLowerCase()).join('-')
    )
}