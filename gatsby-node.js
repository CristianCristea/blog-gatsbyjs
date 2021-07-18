const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    const category = node.frontmatter.category.toLowerCase();

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'category',
      value: category,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');

  // Returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              category
            }
          }
        }
      }
    }
  `);

  // Create article pages
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });

  // Create category pages(collections of articles accessible from sidebar)
  const categoryTemplate = path.resolve('./src/templates/category.js');
  // Create unique pages
  const uniqueCategories = [
    ...new Set(
      res.data.allMarkdownRemark.edges.map((edge) => edge.node.fields.category)
    ),
  ];

  uniqueCategories.forEach((category) => {
    createPage({
      component: categoryTemplate,
      path: `/category/${category}`,
      context: {
        category: category,
      },
    });
  });
};
