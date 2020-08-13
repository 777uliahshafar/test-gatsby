import React from 'react'
import { graphql , Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import styles from './_post.module.scss'
import { slugify } from '../util/utilityFunction.js'


const SinglePost = ({ data , pageContext }) => {
  const post = data.markdownRemark
  const baseUrl = 'http://determined-shirley-3a40e7.netlify.app'
  return (
    <Layout>
       <div className={styles.container}>
          <Title text={post.frontmatter.title}></Title>
          <div className={styles.topContent}>
            <div>{post.frontmatter.date}</div>

            <div>
              <ul>
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}> 
                    <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '.5rem' }}></div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
          <h3>Share This Post</h3>
          <div className={styles.botContent}>
            <ul>
            <li>
              <a
                href={
                  'https://www.facebook.com/sharer/sharer.php?u=' +
                  baseUrl +
                  pageContext.slug
                }
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x" />
              </a>
            </li>

            <li>
            <a
              href={
                'https://twitter.com/share?url=' +
                baseUrl +
                pageContext.slug +
                '&text=' +
                post.title +
                '&via' +
                'twitterHandle'
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>

          <li>
            <a
              href={
                'https://www.linkedin.com/shareArticle?url=' +
                baseUrl +
                pageContext.slug
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>


            </ul>
          </div>
       </div>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        tags
        image{
          childImageSharp{
            fluid(maxWidth:400, maxHeight: 200){
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM YYYY")
      }
    }
  }
`

export default SinglePost