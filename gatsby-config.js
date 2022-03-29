/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-dark-mode`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `posts`,
              path: `${__dirname}/contents/`,
          },
      },
      {
          resolve: `gatsby-plugin-mdx`,
          options: {
              extensions: [`.mdx`, `.md`],
          },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-netlify`
  ],
}
