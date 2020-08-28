const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              data
              path
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `).then(result => {
    // Handle errors
    if (result.errors) {
      return Promise.reject(result.errors)
    }
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        path: node.frontmatter.path,
      },
    })
  })
}
