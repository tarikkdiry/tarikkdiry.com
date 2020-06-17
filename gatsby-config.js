module.exports = {
  siteMetadata: {
    title: `tarikkdiry.com`,
    description: `Tarik Kdiry, Software Engineer`,
    author: `Tarik Kdiry`,
    email: 'mailto:tarik.kdiry@gmail.com',
    instagram: 'https://www.instagram.com/tarik_kdiry/',
    twitter: 'https://twitter.com/ehsotarik',
    linkedin: 'https://www.linkedin.com/in/tarik-kdiry-0b62b8100/',
    github: 'https://github.com/tarikkdiry'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'kpvam4whsk4z',
        accessToken: 'gkewNGQJvSXQnajJhpcMl_WbG-u07bnDaL22FgfdnRc'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/tk_logo_white.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
