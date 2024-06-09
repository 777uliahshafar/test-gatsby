import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Article from "../components/article"
import * as styles from "./_feature-list.module.scss"

/* const IndexPage = () => {

  const articlesPerPage = 4
  let numberOfPages
  return (
    <StaticQuery
      query={indexQuery}
      render={data => {
        numberOfPages = Math.ceil(
          data.allMarkdownRemark.totalCount / articlesPerPage
        )
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
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
            <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
          </div>
        )
      }}
    />
  )
} */

const ArchivePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 4) {
        totalCount
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
  `)
  const articles = data.allMarkdownRemark.edges
  const total = data.allMarkdownRemark.totalCount

  const currentPage = 1
  const articlesPerPage = 4
  const nextPage = `${currentPage + 1}`
  const hasNextPage = total > articlesPerPage

  return (
    <div>
      {articles.map(({ node }) => (
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
      {hasNextPage && (
        <div className={styles.container}>
          <div className={styles.right}>
            <div className={styles.more}>
              <Link to={nextPage}>
                <span>Next Page &#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArchivePage

/* = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 4) {
      totalCount
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
` */

/* export default IndexPage
 */
