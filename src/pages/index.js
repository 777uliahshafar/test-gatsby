import React from "react"
import MainLayout from "../components/main-layout"
import Title from "../components/title"
import FeatureList from "../components/feature-list"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  return (
    <MainLayout>
      <Title text="Informasi" />
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p> */}
      <FeatureList />
    </MainLayout>
  )
}
export default Home
