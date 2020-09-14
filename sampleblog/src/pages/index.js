import React from "react";
import { graphql } from "gatsby";

export default function Home({ data }) {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h4>{data.site.siteMetadata.description}</h4>

      {
        data.allMarkdownRemark.edges.map(edge => (
          <div>
          {edge.node.frontmatter.title}
          </div>
          ))
      }
    </div>
  )
}


export const query = graphql`
  {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`