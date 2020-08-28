const path = require("path")

// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               data
//               slug
//               title
//             }
//             html
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // Handle errors
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//   })

//   console.log(result)
//   // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//   //   createPage({
//   //     path: node.frontmatter.slug,
//   //     component: blogPostTemplate,
//   //     context: {
//   //       // additional data can be passed via context
//   //       slug: node.frontmatter.slug,
//   //     },
//   //   })
// }
