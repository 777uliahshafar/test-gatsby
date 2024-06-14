import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Info from "./info.js"
import * as styles from "./_feature-list.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2) {
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

  return (
    <div>
      {articles.map(({ node }) => (
        <Info
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
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.more}>
            <Link to="/archive">Selengkapnya</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
