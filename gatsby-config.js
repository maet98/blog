/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
        title: "Miguel's blog",
    },
  plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-highlight-code`,
              options: {
                terminal: 'ubuntu'
              }
            },
          ],
        },
      },
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      `gatsby-plugin-fontawesome-css`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          }
      },
      `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
  }],
}
