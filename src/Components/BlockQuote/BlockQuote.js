import React from 'react'
import styles from './BlockQuote.module.css'

const BlockQuote = ({ children, title, cite }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <blockquote cite={cite}>
      {children}
    </blockquote>
  </section>
)

export default BlockQuote
