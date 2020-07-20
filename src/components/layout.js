import React from "react"
import styles from './_layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'
import Sidebar from './sidebar'


export default ({children}) => (
    <div className={styles.container}>
        <Header/>
            <div className={styles.content}>
                {children}
            </div>

        <Sidebar/>
        <Footer>
            All rigth Reserved - 2020
        </Footer>
    </div>
)
