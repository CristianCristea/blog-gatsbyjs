module.exports = {
  siteMetadata: {
    siteUrl: 'https://confident-mestorf-a96039.netlify.app/',
    title: 'cristiancristea.dev',
    author: 'Cristian Cristea',
    job: 'Full Stack Web Developer',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-78116734-3',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `query {
                  allMarkdownRemark {
                    edges {
                      node {
                        frontmatter {
                          tags
                          title
                          date
                        }
                        excerpt
                        id
                        fields {
                          slug
                        }
                      }
                    }
                  }
                }`,
        ref: 'id',
        index: ['title', 'excerpt'],
        store: ['title', 'excerpt', 'date', 'slug', 'id'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.edges.map((edge) => ({
            id: edge.node.id,
            title: edge.node.frontmatter.title,
            excerpt: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            slug: edge.node.fields.slug,
          })),
      },
    },
  ],
};
