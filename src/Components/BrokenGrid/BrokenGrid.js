import React from 'react'
import styles from './BrokenGrid.module.css'

const BrokenGrid = ({ children, title, src, alt }) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      {children}
    </div>
  </section>
)

export default BrokenGrid
