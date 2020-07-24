import React from "react"
import styles from './_layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'
import Sidebar from './sidebar'
import Nav from './nav'
import App from './app';


export default ({children}) => (
    <div className={styles.container}>
        <App />
        <Header/>     
        <Nav />

            <div className={styles.content}>
                {children}
            </div>

        <Sidebar/>
        <Footer>
            All rigth Reserved - 2020
        </Footer>
    </div>
)
