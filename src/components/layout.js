import React from "react"
import { container, content } from "./_layout.module.scss"
import Footer from "./footer.js"
import Sidebar from "./sidebar"
import Nav from "./nav"
import App from "./app"

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <App />
      <Nav />
      <div className={content}>{children}</div>

      <Sidebar />
      <Footer>All rigth Reserved - 2024</Footer>
    </div>
  )
}

export default Layout
