import React from "react"
import { Link } from "gatsby"
import { articleBox } from "./_article.module.scss"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunction.js"

const Article = ({ slug, title, date, excerpt, fluid, tags }) => {
  return (
    <article className={articleBox}>
      <div className={articleBox.left}>
        <Img fluid={fluid} alt={title} />
      </div>
      <div className={articleBox.right}>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <div className={articleBox.date}>{date}</div>
        <div>{excerpt}</div>
        <div>
          <ul className={articleBox.tags}>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={articleBox.more}>
          <Link to={slug}>Read More</Link>
        </div>
      </div>
    </article>
  )
}

export default Article
