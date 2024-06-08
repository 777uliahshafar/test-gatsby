import React from "react"
import { Link } from "gatsby"
import { navContainer, link, row } from "./_nav.module.scss"

//NavLink component

const NavLink = props => (
  <Link className={link} to={props.to}>
    {props.text}
  </Link>
)

export default function Nav() {
  return (
    <nav className={navContainer}>
      <div className={row}>
        <NavLink to="/" text="Beranda" />
        <NavLink to="/about" text="Tentang" />
        <NavLink to="/tags" text="Label" />
      </div>
    </nav>
  )
}

/* export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className={navContainer}>
        <div className={row}>
          <NavLink to="/" text="Articles" />
          <NavLink to="/about" text="About" />
          <NavLink to="/tags" text="Tags" />
        </div>
      </nav>
    )}
  />
)
 */
