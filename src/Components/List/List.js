import React from 'react'
import styles from './List.module.css'

const List = ({ title }) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        <li>Animatronics <span>8th</span></li>
        <li>Architectural Design <span>10th</span></li>
        <li>Computer Integrated Manufacturing <span>3rd</span></li>
        <li>Computer Aided Design, Engineering <span>1st</span></li>
        <li>Digital Video Production <span>10th</span></li>
        <li>Fashion Design and Technology <span>3rd</span></li>
        <li>Flight Endurance <span>10th</span></li>
        <li>Future Technology Teacher <span>10th</span></li>
        <li>Outstanding Student <span>5th</span></li>
        <li>Prepared Presentation <span>10th</span></li>
        <li>Scientific Visualization <span>2nd</span></li>
        <li>Software Development <span>7th</span></li>
        <li>STEM Careers <span>10th</span></li>
        <li>System Control Technology <span>3rd</span></li>
        <li>Technology Bowl <span>5th</span></li>
        <li>Technology Bowl Written <span>4th</span></li>
        <li>Webmaster <span>7th</span></li>
      </ul>
    </div>
  </section>
)

export default List
