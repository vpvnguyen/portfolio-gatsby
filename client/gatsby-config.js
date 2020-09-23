module.exports = {
  siteMetadata: {
    title: `Vincent Nguyen`,
    description: `Vincent Nguyen's Portfolio.`,
    author: `Vincent`,
    social: {
      twitter: {
        url: `https://twitter.com/Vincent33567189?ref_src=twsrc%5Etfw`,
        user: `Vincent33567189`,
      },
      github: `vpvnguyen`,
      linkedin: `vpvnguyen`,
    },
    resume: `https://docs.google.com/document/d/1PTogfVNXdTCEIQor0yN4gXIcFEKxHRFzGIlRl4287xM/edit?usp=sharing`,
    api: {
      github: {
        url: `https://api.github.com`,
        user: `vpvnguyen`,
      },
    },
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
        name: `Vincent Nguyen Portfolio`,
        short_name: `vpvnguyen-portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#03DAC5`,
        display: `minimal-ui`,
        icon: `src/images/dev-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
