import React from 'react'
import styles from './Teachers.module.css'

const Teachers = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Teachers</h2>
    <div className={styles.container}>
      <img src='/Images/Todd.jpg' alt='' />
      <h3>Ms. Todd</h3>
      <h4>Biology Teacher, 10 Years Teaching</h4>
      <p>Ms. Todd is the founder and coordinator for the Tucker High School STEM Program. She is very passionate about helping students to excel in STEM based fields and does whatever she can to help students. The success of the STEM program at Tucker High School is largely due to Ms. Todd’s passion for helping students. Ms. Todd is also a biology teacher who primarily teaches freshman students. She helps acclimate new students to high school, and introduces them to her passion for biology.</p>
    </div>
    <div className={styles.container}>
      <img src='/Images/Hicks.jpg' alt='' />
      <h3>Mr. Hicks</h3>
      <h4>Engineering Teacher, 32 Years Teaching</h4>
      <p>Mr. Hicks is the driving force behind Tucker VEX and Tucker TSA. He has been the head advisor for both VEX and TSA for three years now. Much of our success as a program we owe to him. Mr. Hicks has a very unique teaching style. While he provides assistance when needed, he believes that education should be primarily self-guided. At the beginning of each year, Mr. Hick requires a design plan from each team. However, once these plans are approved, teams are on their own to build the robot and learn from their mistakes.</p>
    </div>
    <div className={styles.container}>
      <img src='/Images/Williams.jpg' alt='' />
      <h3>Ms. Williams</h3>
      <h4>Engineering Teacher, 4 Years Teaching</h4>
      <p>Ms. Williams is an engineering teacher and an advisor for the Tucker High School VEX program. Where Mr. Hicks collaborates directly with our school’s VEX teams, Ms. Williams deals with finances and logistics. A team can be the best team in the world, but without a hotel to stay in during the World Championships, it won’t matter. Ms. Williams helps us to sign up for competitions and figure out hotels. Without her, we would be lost in the world of finances.</p>
    </div>
  </section>
)

export default Teachers
