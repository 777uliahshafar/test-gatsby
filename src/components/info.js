import React from "react"
import { Link } from "gatsby"
import * as styles from "./_info.module.scss"
import { slugify } from "../util/utilityFunction.js"

const Info = ({ slug, title, date, excerpt, tags }) => {
  return (
    <article className={styles.infoBox}>
      <div className={styles.right}>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <div className={styles.date}>{date}</div>
        <div>{excerpt}</div>
        <div>
          <ul className={styles.tags}>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.more}>
          <Link to={slug}>Baca lanjutannya</Link>
        </div>
      </div>
    </article>
  )
}

export default Info
