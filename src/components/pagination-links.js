import React from "react"
import { Link } from "gatsby"
import * as styles from "./_pagination-links.module.scss"

const PaginationLinks = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/archive" : `/archive/${currentPage - 1}`
  const nextPage = `/archive/${currentPage + 1}`
  return (
    <div className={styles.container}>
      {!isFirst && (
        <div className={styles.left}>
          <div className={styles.prev}>
            <Link to={prevPage}>&#8592; Previous Page</Link>
          </div>
        </div>
      )}
      {!isLast && (
        <div className={styles.right}>
          <div className={styles.next}>
            <Link to={nextPage}>Next Page &#8594;</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaginationLinks
