import React from "react"
import { content } from "./_404.module.scss"

export default () => (
  <div className={content}>
    <h1 className={content.header}>Page not found</h1>
    <p className={content.errorMessage}>
      The page you are looking for does not exists.
    </p>
  </div>
)
