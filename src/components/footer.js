import React from "react"
/* import { container, footer } from "./_footer.module.scss"
 */
import * as styles from "./_footer.module.scss"

const Footer = ({ children }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>{children}</div>
    </footer>
  )
}
export default Footer
