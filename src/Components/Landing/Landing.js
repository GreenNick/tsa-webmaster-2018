import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = ({ title, tagline }) => (
  <header className={styles.header}>
    <div className={styles.hero}></div>
    <h1>{title}</h1>
    <p><em>{tagline}</em></p>
    <nav className={styles.nav}>
      <ul>
        <li><Link to='/'>TSA Chapter</Link></li>
        <li><Link to='/CTE'>CTE Program</Link></li>
        <li><Link to='/DesignBrief'>Design Brief</Link></li>
      </ul>
    </nav>
  </header>
)

export default Landing
