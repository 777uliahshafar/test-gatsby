import React from "react"
import { content, header, errorMessage } from "./_404.module.scss"

const NotFound = () => {
  return (
    <div className={content}>
      <h1 className={header}>Page not found</h1>
      <p className={errorMessage}>
        The page you are looking for does not exists.
      </p>
    </div>
  )
}

export default NotFound

/* export default () => (
  <div className={content}>
    <h1 className={header}>Page not found</h1>
    <p className={errorMessage}>
      The page you are looking for does not exists.
    </p>
  </div>
) */
