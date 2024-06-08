import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { navContainer, link, row } from "./_nav.module.scss"

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
      <div className={row}>
        <NavLink to="/" text={data.site.siteMetadata.title} />
        <NavLink to="/about" text="Tentang" />
        <NavLink to="/tags" text="Label" />
      </div>
    </nav>
  )
}
export default Nav

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
