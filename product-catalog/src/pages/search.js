import React, { useState } from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function search(props) {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const allProducts = data.allMarkdownRemark.edges
    const emptyQuery = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        console.log(event.target.value)
        const query = event.target.value
        const { data } = props
        const products = data.allMarkdownRemark.edges || []
        const filteredData = products.filter(product => {
            const { description, title, tags } = product.node.frontmatter
            return (
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                (tags &&
                    tags
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase()))
            )
        })
        setState({
            query,
            filteredData,
        })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const products = hasSearchResults ? filteredData : allProducts

    return (
        <Layout location={props.location} title={siteTitle}>
            <h1 style={{ textAlign: `center` }}>Product catalog</h1>
            <div className="searchBox">
                <input
                    className="searchInput"
                    type="text"
                    aria-label="Search"
                    placeholder="Type to filter products..."
                    onChange={handleInputChange}
                />
            </div>
            {products.map(({ node }) => {
                const { excerpt } = node
                const { slug } = node.fields
                const { tags, title, date, description } = node.frontmatter
                return (
                    <article key={slug}>
                        <header>
                            <h2>
                                <Link to={slug}>{title}</Link>
                            </h2>
                            <p>{date}</p>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: description || excerpt,
                                }}
                            />
                        </section>
                        <hr />
                    </article>
                )
            })}
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
          title
        }
      }
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            
          }
          fields {
            slug
          }
        }
      }
    }
  }`
