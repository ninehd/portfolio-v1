import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `William Dhenin`,
    siteUrl: `https://www.williamdhenin.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'William Dhenin',
          short_name: 'William Dhenin',
          "theme_color": "#ffffff",
          "background_color": "#ffffff",
          "display": "standalone",
          icon: 'src/images/logo.svg',
        },
      }
  ],
}

export default config
