exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = require(`path`).resolve(
    `src/templates/blogTemplate.js`
  )

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              path
              title
            }
            html
          }
        }
      }
    }
  `).then(result => {
    console.log(result)
    // Handle errors
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
        },
      })
    })
  })
}
