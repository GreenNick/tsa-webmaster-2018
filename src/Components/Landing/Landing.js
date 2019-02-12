import React from 'react'
import styles from './Landing.module.css'

const Landing = ({ title, tagline }) => (
  <header className={styles.header}>
    <div></div>
    <h1>{title}</h1>
    <p><em>{tagline}</em></p>
  </header>
)

export default Landing
