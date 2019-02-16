import React from 'react'
import styles from './Albums.module.css'

const Albums = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Albums</h2>
    <div className={styles.container}>
      <div className={styles.album}>
        <img src='/Images/Broken.jpg' alt=''/>
        <p>Everything I Own is Broken</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Books.jpg' alt=''/>
        <p>Reading Is Hard</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Metal.jpg' alt=''/>
        <p>Hey Guys, I Wrote a Metal Song</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Call.jpg' alt=''/>
        <p>Don't Call Me Again</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Crows.jpg' alt=''/>
        <p>Crows</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Pick.jpg' alt=''/>
        <p>I Lost My Guitar Pick</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Pillows.jpg' alt=''/>
        <p>I Own Too Many Pillows</p>
      </div>
      <div className={styles.album}>
        <img src='/Images/Math.jpg' alt=''/>
        <p>I Can't Do Math Anymore</p>
      </div>
    </div>
  </section>
)

export default Albums
