import React from 'react'
import styles from './MultiCol.module.css'

const MultiCol = ({ children, title }) => (
  <section>
    <h2 className={styles.heading} >{title}</h2>
    <div className={styles.container}>
      {children}
    </div>
  </section>
)

export default MultiCol
