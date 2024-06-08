import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"
import "bootstrap/dist/css/bootstrap.min.css"

const Archive = () => {
  return (
    <Layout>
      <Title text="Archive" />
      <ArticleList />
    </Layout>
  )
}

export default Archive
