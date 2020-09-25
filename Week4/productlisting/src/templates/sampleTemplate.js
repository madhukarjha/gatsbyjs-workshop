import React from 'react';
import { graphql } from "gatsby";
const sampleTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}
export default sampleTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { mypath: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
