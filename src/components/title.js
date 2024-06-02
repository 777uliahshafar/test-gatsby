import React from "react"
import { container, title, subtitle } from "./_title.module.scss"

export default props => (
  <section className={container}>
    <h1 className={title}>{props.text}</h1>
    <div className={subtitle}>{props.subtitle}</div>
  </section>
)
