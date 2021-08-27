module.exports = {
  siteMetadata: {
    title: "Ruby's TimeShip",
    titleTemplate: "%s ·Built to save Ruby's sister, Princess Lizabeth from prison in the Tower of London",
    description: "Built with ❤️ and gatsby function by Ola Vea (43 🦇😺 ) and Lillian (6 🏴‍☠️👸 )",
    siteUrl: `https://rubystimeshipstripe.gatsbyjs.io/`,
    url: `https://rubystimeshipstripe.gatsbyjs.io/`,
    image: "/images/icon.png", // Get my OlaVea iconPath to your image you placed in the 'static' folder
    twitter: "@olaholstvea",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rubys-timeship`,
        short_name: `timeship`,
        start_url: `/`,
        background_color: `#fffaf0`,
        theme_color: `ff1616`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
      },
    },

  ],
}
