const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      // Tag pages:
      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (edge.node.frontmatter.tags) {
          edge.node.frontmatter.tags.forEach(tag => {
            if (tags.indexOf(tag) === -1) {
              tags.push(tag);
            }
          })
        }
      })
      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag.toLowerCase()}/`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            tag,
          },
        })
      })
    })
}
