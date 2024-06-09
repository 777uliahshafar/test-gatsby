import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { container, card } from "./_sidebar.module.scss"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Card className={card}>
        <CardBody>
          <CardTitle className="text-center">Featured Post</CardTitle>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <a key={node.id} href={node.fields.slug}>
              {node.frontmatter.title}
            </a>
          ))}
        </CardBody>
      </Card>
      <Card className={card}>
        <CardBody>
          <CardTitle>
            <h2>iklan</h2>
          </CardTitle>
          <img
            src="https://via.placeholder.com/320x200"
            alt="Iklan"
            style={{ width: "80%" }}
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default Sidebar
/* 
export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Card className={card}>
        <CardBody>
          <CardTitle className="text-center">Featured Post</CardTitle>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <a key={node.id} href={node.fields.slug}>
              {node.frontmatter.title}
            </a>
          ))}
        </CardBody>
      </Card>
      <Card className={card}>
        <CardBody>
          <CardTitle>
            <h2>iklan</h2>
          </CardTitle>
          <img
            src="https://via.placeholder.com/320x200"
            alt="Iklan"
            style={{ width: "80%" }}
          />
        </CardBody>
      </Card>
    </div>
  )
} */

/* export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { featured: { eq: true } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date(formatString: "MMMM YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className={container}>
        <Card className={card}>
          <CardBody>
            <CardTitle className="text-center">Featured Post</CardTitle>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <a key={node.id} href={node.fields.slug}>
                {node.frontmatter.title}
              </a>
            ))}
          </CardBody>
        </Card>

        <Card className={card}>
          <CardBody>
            <CardTitle>
              <h2>iklan</h2>
            </CardTitle>
            <img
              src="https://via.placeholder.com/320x200"
              alt="Iklan"
              style={{ width: "80%" }}
            />
          </CardBody>
        </Card>
      </div> //end of div container
    )}
  />
)
 */
