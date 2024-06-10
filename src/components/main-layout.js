import React from "react"
import { singleContainer, singleContent } from "./_layout.module.scss"
import Footer from "./footer.js"
import Nav from "./nav"
import App from "./app"
import Slide from "./slide"

const MainLayout = ({ children }) => {
  return (
    <div className={singleContainer}>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <App />
      <Nav />
      <Slide />
      <div className={singleContent}>{children}</div>

      <Footer>All rigth Reserved - 2024</Footer>
    </div>
  )
}

export default MainLayout
