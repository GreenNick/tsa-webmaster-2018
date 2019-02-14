import React from 'react'
import styles from './BlockSections.module.css'

const BlockSections = ({ title, blocks }) => (
  <section>
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      { blocks.map(block => <div className={styles.block}>{block}</div>) }
    </div>
  </section>
)

export default BlockSections
