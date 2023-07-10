import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `William Dhenin`,
    description: `William Dhenin is a software engineer mainly backend oriented who builds innovative products and great payment solutions.`,
    twitterUsername: `@ninehd09`,
    image: `/og.png`,
    siteUrl: `https://www.williamdhenin.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'William Dhenin',
          short_name: 'William Dhenin',
          "theme_color": "#272935",
          "background_color": "#f0ebe4",
          "display": "standalone",
          icon: 'src/images/logo.png',
        },
      }
  ],
}

export default config
