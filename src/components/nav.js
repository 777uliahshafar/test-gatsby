import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { navContainer, link, brand, row } from "./_nav.module.scss"

//NavLink component

const NavLink = props => (
  <Link className={link} to={props.to}>
    {props.text}
  </Link>
)

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav className={navContainer}>
      <div className={brand}>
        <NavLink to="/" text={data.site.siteMetadata.title} />
      </div>
      <div className={row}>
        <NavLink to="/about" text="Tentang" />
        <NavLink to="/tags" text="Label" />
        <NavLink to="/tags" text="Label" />
      </div>
    </nav>
  )
}
export default Nav
