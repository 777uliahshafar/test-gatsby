import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'

export default () => (
    <StaticQuery
        query = { graphql`query {
            site {
              siteMetadata{
                title
              }
            }  
          
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
                <Article id={node.id}
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