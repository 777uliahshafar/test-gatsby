import React from "react"
import { Link } from "gatsby"

const PaginationLinks = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/archive" : `/archive/${currentPage - 1}`
  const nextPage = `/archive/${currentPage + 1}`
  return (
    <div>
      {!isFirst && (
        <div style={{ float: "left" }}>
          <Link to={prevPage}>&#8592; Previous Page</Link>
        </div>
      )}
      {!isLast && (
        <div style={{ float: "right" }}>
          <Link to={nextPage}>Next Page &#8594;</Link>
        </div>
      )}
    </div>
  )
}

export default PaginationLinks
