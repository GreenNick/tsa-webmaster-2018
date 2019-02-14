import React from 'react'
import styles from './SquiggleSection.module.css'

const SquiggleSection = ({ sections }) => (
  <section className={styles.section}>
    {
      sections.map(section => (
        <div className={styles.container}>
          <img src={section.src} alt={section.alt} />
          <div className={styles.textbox}>
            {section.content}
          </div>
        </div>
      ))
    }
  </section>
)

export default SquiggleSection
