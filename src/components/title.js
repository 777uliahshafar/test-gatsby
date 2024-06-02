import React from "react"
import { container, title, subtitle } from "./_title.module.scss"

const Title = props => {
  return (
    <section className={container}>
      <h1 className={title}>{props.text}</h1>
      <div className={subtitle}>{props.subtitle}</div>
    </section>
  )
}

export default Title
