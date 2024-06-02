import React from "react"
/* import { container, footer } from "./_footer.module.scss"
 */
import * as styles from "./_footer.module.scss"
export default ({ children }) => (
  <footer className={styles.container}>
    <div className={styles.footer}>{children}</div>
  </footer>
)
