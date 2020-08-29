import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template
