module.exports = {
  siteMetadata: {
    title: `Frontend for Beginners`,
    description: `Frontend for Beginner is a blog for aspiring frontend developers with Javascript, HTML and CSS tutorials and work processes overviews`,
    twitterAccount: `@FrontendBegins`,
    imagePreview: `https://highstart.dev/general_preview.png`,
    url: `https://highstart.dev`

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-crisp-chat`,
      options: {
        websiteId: 'b9905cad-cc41-45f5-93c0-87e6b94f6274',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
};
