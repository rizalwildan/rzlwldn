export function getSimplifiedPosts(posts, options = {}) {
    return posts.map((post) => ({
        id: post.node.id,
        date: post.node.frontmatter.date,
        slug: post.node.slug,
        tags: post.node.frontmatter.tags,
        categories: post.node.frontmatter.categories,
        title: post.node.frontmatter.title,
        description: post.node.frontmatter.description
    }))
}

export function slugify(str) {
    return(
        str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => x.toLowerCase()).join('-')
    )
}