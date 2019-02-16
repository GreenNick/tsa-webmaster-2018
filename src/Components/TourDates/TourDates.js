import React from 'react'
import styles from './TourDates.module.css'

const TourDates = () => (
  <section>
    <h2 className={styles.heading}>Georgia Tour 2019</h2>
    <div className={styles.container}>
      <div>
        <h3>Atlanta</h3>
        <p>March 1 2019<br />
          Admission: $250</p>
      </div>
      <div>
        <h3>Athens</h3>
        <p>March 9 2019<br />
          Admission: $200</p>
      </div>
      <div>
        <h3>Savannah</h3>
        <p>March 15 2019<br />
          Admission: 230</p>
      </div>
      <div>
        <h3>Columbus</h3>
        <p>March 22 2019<br />
          Admission: $170</p>
      </div>
      <div>
        <h3>Macon</h3>
        <p>April 5 2019<br />
          Admission: $160</p>
      </div>
      <div>
        <h3>Augusta</h3>
        <p>April 13 2019<br />
          Admission $150</p>
      </div>
    </div>
  </section>
)

export default TourDates
