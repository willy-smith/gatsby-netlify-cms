exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

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
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        // this is where you pass query variables to the component
        // pagePath is passed as the query variable to the query in blogTemplate.js
        pagePath: path,
      },
    })
  })
}
