import React from 'react'
import {Card, CardBody, CardTitle } from 'reactstrap'

import styles from './_sidebar.module.scss'


const Sidebar = () => (
    <container>
        
            <Card className={styles.card}>
                <CardBody >
                    <CardTitle className="text-center">
                        <h2>iklan</h2>
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x200" alt="Iklan" style={{width:"80%"}}/>
                </CardBody>
            </Card>
            </container>

        
)

export default Sidebar