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
    image: "../images/AnalogicaIcon.png",
    twitterUsername: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://anastrapiatlas.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`author`, 'course'],
        //If using single types place them in this array.
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "veereshsapo@gmail.com",
          password: "Veeru@7737",
        },
      },
    },
    
    {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `montserrat\:100, 200, 300, 400, 500, 600, 700, 800, 900`,
         // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  `gatsby-plugin-ffmpeg`,

  {
    resolve: `gatsby-remark-videos`,
    options: {
      pipelines: [
        {
          name: 'vp9',
          transcode: chain =>
            chain
              .videoCodec('libvpx-vp9')
              .noAudio()
              .outputOptions(['-crf 20', '-b:v 0']),
          maxHeight: 480,
          maxWidth: 900,
          fileExtension: 'webm',
        },
        {
          name: 'h264',
          transcode: chain =>
            chain
              .videoCodec('libx264')
              .noAudio()
              .videoBitrate('1000k'),
          maxHeight: 480,
          maxWidth: 900,
          fileExtension: 'mp4',
        },
      ],
    }
  },
  
   
  
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
     `gatsby-transformer-ffmpeg`,
  ],
}
