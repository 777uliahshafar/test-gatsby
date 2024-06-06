import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Article from "../components/article"
import PaginationLinks from "../components/pagination-links.js"
import { graphql, Link } from "gatsby"

const articlesList = ({ pageContext, data }) => {
  const { edges } = data.allMarkdownRemark

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/archive" : `/archive/${currentPage - 1}`
  const nextPage = `/archive/${currentPage + 1}`

  /*   const articles = props.data.allMarkdownRemark.edges
  const { currentPage } = props.pageContext */

  return (
    <Layout>
      <Title text={`Page: ${currentPage}`}></Title>
      {edges.map(({ node }) => (
        <Article
          key={node.id}
          slug={node.fields.slug}
          keyword={node.frontmatter.keyword}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          fluid={node.frontmatter.image.childImageSharp.fluid}
          tags={node.frontmatter.tags}
        />
      ))}
      {!isFirst && (
        <div style={{ float: "left" }}>
          <Link to={prevPage}>&#8592; Previous Page</Link>
        </div>
      )}
      {!isLast && (
        <div style={{ float: "right" }}>
          <Link to={nextPage}>Next Page &#8594;</Link>
        </div>
      )}
    </Layout>
  )
}

export const articlesListQuery = graphql`
  query articlesListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 750, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default articlesList
