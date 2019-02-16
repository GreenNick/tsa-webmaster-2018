import React from 'react'
import styles from './TourDates.module.css'

const TourDates = () => (
  <section>
    <h2 className={styles.heading}>Georgia Tour 2019</h2>
    <div className={styles.container}>
      <div>
        <h3>Atlanta</h3>
        <p>March 1 2019<br />
        Admission: $50</p>
      </div>
      <div>
        <h3>Athens</h3>
        <p>March 9 2019<br />
        Admission: $40</p>
      </div>
      <div>
        <h3>Savannah</h3>
        <p>March 15 2019<br />
        Admission: $50</p>
      </div>
      <div>
        <h3>Columbus</h3>
        <p>March 22 2019<br />
        Admission: $35</p>
      </div>
      <div>
        <h3>Macon</h3>
        <p>April 5 2019<br />
        Admission: $30</p>
      </div>
      <div>
        <h3>Augusta</h3>
        <p>April 13 2019<br />
        Admission $30</p>
      </div>
    </div>
  </section>
)

export default TourDates
