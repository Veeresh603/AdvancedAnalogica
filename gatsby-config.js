/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Analogica",
    titleTemplate: "Analogic Template",
    description: "Courses",
    siteUrl: "http://localhost:8000/",
    author: "Veeresh",
    authorSite: "",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    
    },
    {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `roboto`,
         // you can also specify font weights and styles
      ],
      display: 'swap'
    }
    },
    
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
