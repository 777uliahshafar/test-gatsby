import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'

const IndexPage = () => (
  <StaticQuery query={indexQuery} render={data => {
    return (

      <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Article key={node.id}
                    path={node.fields.slug}
                    keyword={node.frontmatter.keyword}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.excerpt} 
                    fluid={node.frontmatter.image.childImageSharp.fluid} />
            ))}
        </div>

    )
  }}/>
)

const indexQuery = graphql`
  query {
    site{
      siteMetadata{
        title
      }
    }

    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
      ) {
      edges {
        node {
          fields{
            slug
          }
          id 
          frontmatter {
            title
            image{
              childImageSharp{
                fluid(maxWidth:750, maxHeight: 150){
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

export default IndexPage
 

/* Batas 



export default () => (
    <StaticQuery
        query = { graphql`query($skip: Int!=0) {
            site {
              siteMetadata{
                title
              }
            }  
          
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
              limit: 4
              skip: $skip
              ) {
              totalCount
              edges{
                node{
                    fields{
                      slug
                    }
                  id 
                  frontmatter{
                    title
                    image
                    date(formatString: "MMMM YYYY")
                  }
                  excerpt
                  }
                }
              }
          
          }`
        }

        render = { data => (  
        
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Article key={node.id}
                    id={node.id}
                    to={node.fields.slug}
                    keyword={node.frontmatter.keyword}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.excerpt} />
            ))}
        </div>


        )}
    />
)

*/