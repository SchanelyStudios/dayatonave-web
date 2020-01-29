require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Dayton Avenue Baptist Church`,
    description: `Description coming soon.`,
    author: `@philschanely`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-mdx`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`, // (REQUIRED, replace with your own)
        // accessToken: `${process.env.PRISMIC_TOKEN}`, // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          { // (optional, builds pages dynamically)
            type: 'Test_open_page',         // TypeName from prismic
            match: '/:uid',  // Pages will be generated under this pattern
            path: '/404',        // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/open-page.js'),
          }
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
