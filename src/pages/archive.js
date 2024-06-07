import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"
import "bootstrap/dist/css/bootstrap.min.css"

export default () => (
  <Layout>
    <Title text="Archive" />
    <ArticleList />
  </Layout>
)
