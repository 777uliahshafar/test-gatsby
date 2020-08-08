const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { slugify } = require('./src/util/utilityFunction')
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === 'MarkdownRemark') {
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode, basePath: 'markdown' })
      createNodeField({
         node,
         name: 'slug',
         value: slug,
      })
   }
}


// Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
 
    return new Promise(resolve => {
       graphql(`
       {
          allMarkdownRemark {
             edges {
                node {
                   fields {
                      slug
                   }
                   frontmatter{
                      tags
                   }
                }
             }
          }
       }`
       ).then(result => {
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
             createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/post.js'),
                context: {
                  slug: node.fields.slug,
                },
              })

            //Get all Tags
             let tags = []
             _.each(result.data.allMarkdownRemark.edges, edge => {
                if (_.get(edge, 'node.frontmatter.tags')) {
                   tags = tags.concat(edge.node.frontmatter.tags)
                }

             })

             let tagPostCounts = {}
             tags.forEach(tag => {
                tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
             })

             tags = _.uniq(tags)
            //Create tags page
             createPage({
               path: `/tags`,
               component: path.resolve('./src/templates/post-tags.js'),
               context: {
                  tags,
                  tagPostCounts,
                },
             })
            
             //Create tag posts
            tags.forEach(tag => {
               createPage({
                  path: `/tag/${slugify(tag)}`,
                  component: path.resolve('./src/templates/tag-posts.js'),
                  context: {
                     tag,
                   },
                })
            })


          })
          resolve()
       })


    })
 }