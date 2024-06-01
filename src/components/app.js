import React from "react"
//import Navbar from './Nav/Navbar';
import { app } from "./_app.module.scss"
import Burger from "./Nav/Burger"

function App() {
  return (
    <div className={app}>
      <Burger />
    </div>
  )
}

export default App
