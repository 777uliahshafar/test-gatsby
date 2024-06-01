import React from "react"
import { container } from "./_title.module.scss"

export default props => (
  <section className={container}>
    <h1 className={container.title}>{props.text}</h1>
    <div className={container.subtitle}>{props.subtitle}</div>
  </section>
)
